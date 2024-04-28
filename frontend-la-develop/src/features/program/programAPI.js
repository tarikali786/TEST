export const programData = () => {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/api/v1/programs/", {
        method: "GET",
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
    console.error(error);
  }
};
