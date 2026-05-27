
/**
 * Convert date format into Indonesian locale format.
 *
 * This function:
 * - validates date separator
 * - validates DD-MM-YYYY format
 * - converts date into Indonesian formatted date
 *
 * @param {string} date 
 * Date string with DD-MM-YYYY format.
 *
 * @throws {Error} If date contains "/" separator.
 * 
 * @throws {Error} If date format is invalid.
 *
 * @returns {string} Formatted Indonesian date.
 *
 */
export default function changeFormat(date) {
  try {
    const splitDate = date.split('-');
    const splitDateSlash = date.split('/');

    if(splitDateSlash.length === 3){
      throw new Error('Manual: Format tanggal tidak boleh mengandung / ');
    }
    
    if(splitDate.length !== 3) {
      throw new Error('Manual: Format tanggal tidak lengkap');
    }
    
    const newDate = new Date(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`);
    
    if(isNaN(newDate.valueOf())) {
      throw new Error('Manual: Format tanggal tidak sesuai');
    }
    const formatter = new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    return formatter.format(newDate);

  } catch (err) {
    console.log(err.message);
    throw new Error(err.message, { cause: err });
  }
}