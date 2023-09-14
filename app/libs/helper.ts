import { SignInResponse } from "next-auth/react";

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
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDateForMeetups = (dateString: string): { month: string; day: number } => {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const [year, monthIndex, day] = dateString.split("-").map(Number);
  const monthAbbreviation = months[monthIndex - 1]; // Subtract 1 since months are 0-based

  return {
    month: monthAbbreviation,
    day: day,
  };
};
