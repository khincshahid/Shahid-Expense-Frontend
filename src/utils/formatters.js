/**
 * Format a number with thousand separators.
 */
export const formatMoney = (value) => {
  const n = Number(value || 0);
  return n.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Format a date as "Mar 03 2026".
 */
export const formatDate = (date) => {
  if (!date) return '—';
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = d.toLocaleDateString('en-US', { month: 'short' });
  const year = d.getFullYear();
  return `${month} ${day} ${year}`;
};

/**
 * Format a date as "2025-01-15" (input[type=date] value).
 */
export const toInputDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

/**
 * Currency symbol for a currency code.
 */
export const currencySymbol = (currency) => (currency === 'USD' ? '$' : 'Rs');

/**
 * Display label for payment methods.
 * Stored value is "Check" (backend enum), displayed as "Cheque".
 */
export const paymentMethodLabel = (method) => {
  if (method === 'Check') return 'Cheque';
  return method || '';
};