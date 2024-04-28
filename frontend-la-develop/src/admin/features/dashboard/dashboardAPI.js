export const analytics = async () => {
  
    const response = await fetch(`/api/v1/admin/analytics/counts`, {
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