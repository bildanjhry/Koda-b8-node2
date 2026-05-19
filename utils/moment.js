import moment from "moment";

export default function generateDate(date) {
  const dates = moment(date, "DD-MM-YYYY", true);
  if(!dates.isValid()){
    return console.log('Format tanggal tidak sesuai');
  }

  return console.log('Hasil :'+ dates.calendar());
}