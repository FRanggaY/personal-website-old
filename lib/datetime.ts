/**
 * Formats a date string to "Month YYYY"
 * @param {string} dateString - The date string in the format "YYYY-MM-DD HH:mm:ss"
 * @returns {string} The formatted date string in "Month YYYY" format
 */
export const formatMonthYear = (dateString: string, locale: string = 'en') => {
  const date = new Date(dateString);

  let localeFormat = 'en-US';
  if(locale == 'id'){
    localeFormat = 'id-ID'
  }
  
  // Create an instance of DateTimeFormat for month and year
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  const formattedDate = new Intl.DateTimeFormat(localeFormat, options).format(date);

  return formattedDate;
};

