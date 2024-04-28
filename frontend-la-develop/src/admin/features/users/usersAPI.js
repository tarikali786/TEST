export const users = async (queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(`/api/v1/admin/users?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const responseData = await response.json();
    return { data: responseData };
  } else {
    const err = await response.json();
    return { err };
  }
};
export const getUser = async (id) => {
  try {
    const response = await fetch(`/api/v1/admin/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      const err = await response.json();
      return { err };
    }
  } catch (error) {
    console.error("Error in users function:", error);
    return { err: "An error occurred while fetching data." };
  }
};

export const userUpdate = async (data) => {
  try {
    const response = await fetch(`/api/v1/admin/users/update/status`, {
      method: "PUT",
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
      return { err };
    }
  } catch (error) {
    console.error("Error in updateUserData function:", error);
    return { err: "An error occurred while updating data." };
  }
};
