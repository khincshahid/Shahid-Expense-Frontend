export default function DateField({
  value,
  onChange,
  label = 'Select date',
  min,
  max,
  ariaLabel,
  className = ''
}) {
  return (
    <div className={`w-full ${className}`}>
      {/* Small label visible on every device — no overlap, no guessing */}
      <label className="block text-[11px] font-medium text-slate-500 mb-1">
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        aria-label={ariaLabel || label}
        className="input py-2 text-sm w-full"
        style={{ minHeight: '40px' }}
      />
    </div>
  );
}