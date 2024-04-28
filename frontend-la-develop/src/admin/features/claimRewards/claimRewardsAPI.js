export const claimRewards = async (queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `/api/v1/admin/users/claimed-rewards?${queryString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const responseData = await response.json();
    return { data: responseData };
  } else {
    const err = await response.json();
    return { err };
  }
};

export const claimRewardUpdate = async (sendData) => {
  try {
    const response = await fetch(`/api/v1/admin/users/claimed-rewards`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const err = await response.json();
      return Promise.reject({ error: err }); // Reject the promise with an error object
    }
  } catch (error) {
    console.error("Error in updateUserData function:", error);
    return Promise.reject({ error: "An error occurred while updating data." });
  }
};
