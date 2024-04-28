export const transactions = async (queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(`/api/v1/admin/transactions?${queryString}`, {
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
    return { data:err };
  }
};

export const transactionUpdate = async (data) => {
  try {
    const response = await fetch(`/api/v1/admin/transactions/status/update`, {
      method: "POST",
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
      return { data:err };
    }
  } catch (error) {
    console.error("Error in updateUserData function:", error);
    return { err: "An error occurred while updating data." };
  }
};
