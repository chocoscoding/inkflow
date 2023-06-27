export const trimmer = (value: string) => {
  return value.trim();
};
export const validateNotEmpty = (value: string, errorMessage: string) => {
  if (trimmer(value) === "") {
    return errorMessage;
  }
  return true;
};


export const getFormattedDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month: string | number = currentDate.getMonth() + 1;
    let day: string | number = currentDate.getDate();

    // Add leading zero for single digit months and days
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };