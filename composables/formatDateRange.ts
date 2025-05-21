export const formatDateRange = (startEpochMs: number, endEpochMs: number): string => {
  const duration = ref('')
  const startDate = new Date(startEpochMs);
  const endDate = new Date(endEpochMs !== 0 ? endEpochMs : Date.now());

  const startMonth = startDate.toLocaleString('default', { month: 'long' });
  const startYear = startDate.getUTCFullYear();
  console.log('startYear: ', startYear);
  const endMonth = endDate.toLocaleString('default', { month: 'long' });
  const endYear = endDate.getUTCFullYear();

  const totalMonths =
    (endYear - startYear) * 12 + (endDate.getUTCMonth() - startDate.getUTCMonth()) + 1;

  if (totalMonths < 12) {
    duration.value = `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    duration.value = `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) {
      duration.value += ` and ${months} month${months > 1 ? 's' : ''}`;
    }
  }

  return `${startMonth} ${startYear} – ${endMonth} ${endYear} (${duration.value})`;
}