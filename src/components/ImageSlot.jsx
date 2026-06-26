/**
 * Presentational placeholder for a user-supplied image.
 *
 * Recreates the empty-state of the original <image-slot> web component:
 * a soft-tinted box with a dashed ring, a small icon, and a caption. The
 * original supported drag-and-drop fill persisted to a sidecar via the
 * design runtime; that runtime isn't present in a plain Vite build, so this
 * renders the placeholder only. Pass `src` to show a real image instead.
 */
export default function ImageSlot({
  placeholder = 'Drop an image',
  radius = 12,
  src,
  alt = '',
  className = '',
  style,
}) {
  const borderRadius = typeof radius === 'number' ? `${radius}px` : radius

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ objectFit: 'cover', borderRadius, ...style }}
      />
    )
  }

  return (
    <div className={`image-slot ${className}`} style={{ borderRadius, ...style }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.5"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="cap">{placeholder}</span>
    </div>
  )
}
