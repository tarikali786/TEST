export const withdrawal = (data) => {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/api/v1/transction/withdrawal", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const err = await response.json();
        reject({ err });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
