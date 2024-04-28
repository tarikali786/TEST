export const getProftConfig = async () => {

  const response = await fetch(`/api/v1/admin/profitconfig`, {
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

export const updateProftConfig = async (data) => {
  try {
    const response = await fetch(`/api/v1/admin/profitconfig`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      return {data:responseData};
    } else {
      const err = await response.json();
      return { err };
    }
  } catch (error) {
    console.error("Error in updateUserData function:", error);
    return { err: "An error occurred while updating data." };
  }
};
