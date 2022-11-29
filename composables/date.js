//composable for formatting dates
//converts to formatted dates, will convert the dates to a readable format.



export function useDate(date) {
      let formatDate = new Date(date);
      let day = formatDate.getDate()
      let month = formatDate.getMonth()+1
      let year = formatDate.getFullYear()
      return month + "/" + day + "/" + year
   
 
  }


  export function useFormatted(date) {
    let formatDate = new Date(date);
    let day = formatDate.getDate()
    let month = formatDate.getMonth()+1
    let year = formatDate.getFullYear()
    return month + "/" + day + "/" + year
 
}

export function useDateAge(start, end) {
  const date1 = new Date(start);
  if(end === undefined || end === null || end === "") {
    end = new Date()
  }else{
    end = new Date(end)
  }
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}