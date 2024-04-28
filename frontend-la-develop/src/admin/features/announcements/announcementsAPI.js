export const get = async (queryParams) => {
  try {
    const queryString = new URLSearchParams(queryParams).toString();
    const response = await fetch(
      `http://localhost:000/api/v1/admin/announcements?${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return { data: responseData };
  } catch (error) {
    console.error("Error in get function:", error);
    return { err: "An error occurred while fetching data." };
  }
};

export const create = async (data) => {
  try {
    const response = await fetch(`/api/v1/admin/announcements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const err = await response.json();
      return { data: err };
      //throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return { data: responseData };
  } catch (error) {
    console.error("Error in updateUserData function:", error);
    return { data: "An error occurred while updating data." };
  }
};

export const deleteAnouncement = async (data) => {
  try {
    const response = await fetch(`/api/v1/admin/announcements`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const err = await response.json();
      return Promise.reject({ error: err });
    }
  } catch (error) {
    console.error("Error in delete function:", error);
    return Promise.reject({ error });
  }
};
