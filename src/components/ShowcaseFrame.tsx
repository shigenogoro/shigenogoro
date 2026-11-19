import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectShowcase } from '../data/types'

/** Seconds an unattended auto-scroll takes to travel the whole capture. */
const TRAVEL_SECONDS = 9

/**
 * A mock browser window holding a tall product screenshot. The capture scrolls
 * on hover so the card shows the real page in motion; any manual scroll hands
 * control back to the reader.
 */
const ShowcaseFrame = ({ showcase }: { showcase: ProjectShowcase }) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const prevTimeRef = useRef(0)
  const readerScrolledRef = useRef(false)
  /**
   * Sub-pixel scroll position. Chromium snaps `scrollTop` to whole pixels, so
   * reading it back each frame would swallow the <1px steps this animation
   * takes and never move at all.
   */
  const offsetRef = useRef(0)
  /** The main capture first, then each feature view; all share the scrolling frame. */
  const views = [
    { label: showcase.label ?? 'Overview', src: showcase.src, url: showcase.url, alt: showcase.alt, caption: showcase.caption },
    ...(showcase.features ?? []),
  ]
  const [active, setActive] = useState(0)
  const view = views[active]

  const stop = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = null
  }, [])

  const start = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport || frameRef.current !== null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    readerScrolledRef.current = false
    prevTimeRef.current = 0
    offsetRef.current = viewport.scrollTop

    const step = (time: number) => {
      if (!prevTimeRef.current) prevTimeRef.current = time
      const elapsed = (time - prevTimeRef.current) / 1000
      prevTimeRef.current = time

      const distance = viewport.scrollHeight - viewport.clientHeight
      if (distance <= 0) return stop()

      offsetRef.current = Math.min(
        distance,
        offsetRef.current + Math.max(24, distance / TRAVEL_SECONDS) * elapsed,
      )
      viewport.scrollTop = offsetRef.current
      if (offsetRef.current >= distance - 0.5) return stop()

      frameRef.current = requestAnimationFrame(step)
    }

    frameRef.current = requestAnimationFrame(step)
  }, [stop])

  /** Manual input wins: stop the animation and leave the reader where they are. */
  const yieldToReader = useCallback(() => {
    readerScrolledRef.current = true
    stop()
  }, [stop])

  const rewind = useCallback(() => {
    stop()
    const viewport = viewportRef.current
    if (viewport && !readerScrolledRef.current) {
      viewport.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [stop])

  /** Switch views: stop any scroll and start the new capture from the top. */
  const select = useCallback(
    (i: number) => {
      stop()
      readerScrolledRef.current = false
      offsetRef.current = 0
      if (viewportRef.current) viewportRef.current.scrollTop = 0
      setActive(i)
    },
    [stop],
  )

  useEffect(() => stop, [stop])

  return (
    <div className="flex flex-col gap-3 bg-ink-950 p-3 sm:p-4 md:w-1/2">
      <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-ink-900 md:min-h-0 md:flex-[1_1_0px]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-800/70 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-2 flex-1 truncate rounded bg-ink-950 px-2 py-1 font-mono text-xs text-slate-400">
            {view.url}
          </span>
        </div>

        <div
          ref={viewportRef}
          tabIndex={0}
          role="group"
          aria-label={view.alt}
          onMouseEnter={start}
          onMouseLeave={rewind}
          onWheel={yieldToReader}
          onTouchStart={yieldToReader}
          onKeyDown={yieldToReader}
          className="showcase-scroll h-[22rem] overflow-y-auto outline-none ring-accent/40 focus-visible:ring-2 md:h-auto md:min-h-[24rem] md:flex-[1_1_0px]"
        >
          <img key={view.src} src={view.src} alt={view.alt} loading="lazy" className="block w-full" />
        </div>
      </div>

      {views.length > 1 && (
        <div className="flex flex-wrap gap-2 px-1" role="group" aria-label="Feature views">
          {views.map((v, i) => (
            <button
              key={v.label}
              type="button"
              aria-pressed={i === active}
              onClick={() => select(i)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                i === active
                  ? 'border-accent bg-accent/15 text-accent'
                  : 'border-white/10 text-slate-400 hover:border-accent/60 hover:text-accent'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      <p className="px-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
        {view.caption}{' '}
        {showcase.note && <>{showcase.note} </>}
        <span className="hidden md:inline">Hover to scroll. </span>
        <a href={view.src} target="_blank" rel="noreferrer" className="whitespace-nowrap text-accent hover:underline">
          Open full size ↗
        </a>
      </p>
    </div>
  )
}

export default ShowcaseFrame
