/**
 * BgIcons — self-contained floating background icons.
 * Outer div = static rotation. Inner span = float animation.
 * Color comes from prop — each product passes its own brand color.
 */

const SLOTS = [
  { top:'6%',   left:'1%',    rot:-18, size:3.2, dur:4.0, delay:0.0, op:0.13 },
  { top:'24%',  left:'2%',    rot: 28, size:2.4, dur:5.2, delay:0.7, op:0.11 },
  { top:'46%',  left:'1%',    rot:-35, size:1.8, dur:3.6, delay:1.4, op:0.12 },
  { top:'68%',  left:'2%',    rot: 15, size:2.4, dur:4.8, delay:0.3, op:0.10 },
  { top:'86%',  left:'8%',    rot:-50, size:1.6, dur:3.2, delay:1.8, op:0.11 },
  { top:'92%',  left:'30%',   rot: 38, size:1.8, dur:5.8, delay:2.2, op:0.09 },
  { top:'5%',   right:'1%',   rot: 22, size:2.4, dur:4.4, delay:0.5, op:0.13 },
  { top:'26%',  right:'1.5%', rot:-42, size:3.2, dur:5.0, delay:1.1, op:0.11 },
  { top:'50%',  right:'1%',   rot: 55, size:1.8, dur:3.8, delay:2.8, op:0.12 },
  { top:'70%',  right:'3%',   rot:-20, size:2.4, dur:4.2, delay:0.9, op:0.10 },
  { top:'88%',  right:'14%',  rot: 42, size:1.6, dur:5.4, delay:3.2, op:0.09 },
  { top:'40%',  left:'46%',   rot:-12, size:1.4, dur:4.6, delay:1.6, op:0.08 },
]

export default function BgIcons({ icons = [], color = 'var(--blue)' }) {
  if (!icons || !icons.length) return null
  return (
    <>
      {icons.slice(0, SLOTS.length).map((icon, i) => {
        const s = SLOTS[i]
        return (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: s.top,
              ...(s.left  !== undefined ? { left:  s.left  } : {}),
              ...(s.right !== undefined ? { right: s.right } : {}),
              transform: `rotate(${s.rot}deg)`,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 0,
            }}
          >
            <span style={{
              display: 'inline-flex',
              color,
              opacity: s.op,
              fontSize: `${s.size}rem`,
              lineHeight: 1,
              animation: `bgFloat ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}>
              <i className={`fas ${icon}`} />
            </span>
          </div>
        )
      })}
    </>
  )
}
