export const tocapitalCase = (str) => {
  if (str.length < 1) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const numberToASCII = (number) => {
  // Use String.fromCharCode() to convert the number to ASCII
  return String.fromCharCode(number);
};
export const initializeRecaptcha = () => {
  return new Promise((resolve) => {
    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(
        "6LeSl0IpAAAAAImReR2KjLPI11kTQPZFvOsisafd",
        {
          action: "submit",
        }
      );
      resolve(token);
    });
  });
};
export const dateFormate = (dateFormate) => {
  const date = new Date(dateFormate); // Example date

  const options = {
    weekday: "long", // Full day name (e.g., Monday)
    month: "short", // Short month name (e.g., Oct)
    day: "numeric", // Day of the month (e.g., 21)
    year: "numeric", // Full year (e.g., 2023)
    hour: "numeric", // Hour (e.g., 8)
    minute: "numeric", // Minute (e.g., 22)
    hour12: true, // Use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};

export const getStatusClassName = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "Success":
      return "success";
    case "Rejected":
      return "danger";
    default:
      return "";
  }
};
