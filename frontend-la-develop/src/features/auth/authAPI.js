export function createUser(userData) {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        resolve( data );
      } else {
        const err = await response.json();
        reject({ err });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
export function checkDataExist(userData) {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/api/v1/auth/checkdata", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if (response.ok) {
      const data = await response.json();
      resolve({ data });
      // } else {
      // const err = await response.json();
      // reject({ err });
      // }
    });
  } catch (error) {
    console.log(error);
  }
}

export function login(loginInfo) {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`/api/v1/auth/signin`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "Content-Type": "application/json" },
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
}
export function CheckAuth() {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`/api/v1/auth/check`);
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
}
export function signOut() {
  try {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`/api/v1/auth/signout`, {
        method: "DELETE",
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" },
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
}
export function UpdateAuth(update) {
  try {
    return new Promise(async (resolve) => {
      const response = await fetch("/api/v1/auth/user/", {
        method: "PUT",
        body: JSON.stringify(update),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      resolve({ data });
    });
  } catch (error) {
    console.log(error);
  }
}
