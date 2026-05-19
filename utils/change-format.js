export default function changeFormat(date) {
  const newDates = new Date(date);
  const format = { day: 'numeric', month: 'numeric', year: 'numeric' };

  if(isNaN(newDates.valueOf())){
    return console.log('Format tidak sesuai');
  }

  // function isValidDate(newDates) {
  //     return isNaN(Date.parse(newDates));
    
  // }

    
  const formatter = new Intl.DateTimeFormat('en-US', format, { dateStyle: 'long' });
  const formatedDates = formatter.format(newDates);
  console.log(newDates.toLocaleDateString('en-US', format));

    
  console.log("Hasilnya: "+formatedDates);
}