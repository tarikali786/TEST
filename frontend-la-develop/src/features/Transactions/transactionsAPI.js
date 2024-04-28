export const deposit = (data) => {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`/api/v1/transction/deposit`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
export const withdraw = (data) => {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`/api/v1/transction/withdrawal`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
