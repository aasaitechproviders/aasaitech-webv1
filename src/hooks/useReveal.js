import { useEffect } from 'react'

// Scroll-reveal as progressive enhancement.
//
// Safety model: elements are visible by default. We only *hide* an element
// (by adding `reveal-armed`) at the exact moment we start observing it — and
// only if it's below the fold. Anything already on-screen is never hidden, so
// the hero and above-the-fold content can never flash or get stuck invisible.
// A failsafe also force-reveals everything shortly after, no matter what.
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'))
    if (!els.length) return

    const show = (el) => {
      el.classList.add('reveal-armed') // ensure transition target is set
      // next frame so the browser registers the armed (hidden) state first
      requestAnimationFrame(() => el.classList.add('in'))
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )

    const vh = window.innerHeight || 800
    els.forEach((el) => {
      const top = el.getBoundingClientRect().top
      if (top < vh * 0.95) {
        // On-screen / above the fold: show immediately, never hide.
        el.classList.add('in')
      } else {
        // Below the fold: arm (hide) then observe for entry.
        el.classList.add('reveal-armed')
        obs.observe(el)
      }
    })

    // Absolute safety: never let content stay invisible.
    const failsafe = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'))
    }, 2200)

    return () => {
      obs.disconnect()
      clearTimeout(failsafe)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
