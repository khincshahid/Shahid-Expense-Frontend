import { useMemo } from 'react';
import { computeRange } from '../../utils/dateRanges';
import Select from '../ui/Select';
import DateField from '../ui/DateField';

const PRESET_OPTIONS = [
  { value: '7d',     label: 'Last 7 Days' },
  { value: '30d',    label: 'Last 30 Days' },
  { value: 'month',  label: 'This Month' },
  { value: 'year',   label: 'This Year' },
  { value: 'all',    label: 'All Time' },
  { value: 'custom', label: 'Custom Range' }
];

export default function RangePicker({
  value,
  onChange,
  customStart,
  customEnd,
  onCustomChange
}) {
  const showCustom = value === 'custom';

  const effectiveStart = showCustom ? customStart : computeRange(value).startDate;
  const effectiveEnd = showCustom ? customEnd : computeRange(value).endDate;

  return (
    <div className="card p-3 sm:p-4 mb-5">
      <div className="flex flex-col lg:flex-row lg:items-end gap-3">
        {/* Left: preset dropdown */}
        <div className="flex items-end gap-3 shrink-0">
          <div>
            <label className="block text-[11px] font-medium text-slate-500 mb-1">
              Range
            </label>
            <div className="w-44">
              <Select
                value={value}
                onChange={onChange}
                options={PRESET_OPTIONS}
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Right: date range */}
        <div className="flex-1 grid grid-cols-2 sm:flex sm:items-end gap-3 sm:justify-end">
          <DateField
            value={effectiveStart}
            onChange={(e) => {
              onCustomChange({
                startDate: e.target.value,
                endDate: effectiveEnd
              });
              if (!showCustom) onChange('custom');
            }}
            label="From"
            max={effectiveEnd || undefined}
            ariaLabel="Start date"
            className="sm:w-40"
          />
          <DateField
            value={effectiveEnd}
            onChange={(e) => {
              onCustomChange({
                startDate: effectiveStart,
                endDate: e.target.value
              });
              if (!showCustom) onChange('custom');
            }}
            label="To"
            min={effectiveStart || undefined}
            ariaLabel="End date"
            className="sm:w-40"
          />
        </div>
      </div>
    </div>
  );
}