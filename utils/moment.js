import moment from "moment";

/**
 * Generate formatted calendar date using moment.js.
 *
 * This function:
 * - validates date format using strict parsing
 * - accepts date in DD-MM-YYYY format
 * - returns formatted relative calendar date
 *
 * @param {string} date 
 * Date string with DD-MM-YYYY format.
 *
 * @throws {Error} If date format is invalid.
 *
 * @returns {string} Formatted calendar date result.
 *
 * @return {string} returning date in string
 */
export default function generateDate(date) {
  try{
    const dates = moment(date, "DD-MM-YYYY", true);

    if(!dates.isValid()){
      throw new Error('Format tanggal tidak sesuai');
    }
    return 'Hasil :'+ dates.calendar();

  } catch(err){
    console.log(err.message);
    throw new Error(err.message, { cause: err });
  }
}