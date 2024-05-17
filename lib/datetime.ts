/**
 * Formats a date string to "Month YYYY"
 * @param {string} dateString - The date string in the format "YYYY-MM-DD HH:mm:ss"
 * @returns {string} The formatted date string in "Month YYYY" format
 */
export const formatMonthYear = (dateString: string) => {
  const date = new Date(dateString);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()]; // Get month name from array
  const year = date.getFullYear();
  return `${month} ${year}`;
};
