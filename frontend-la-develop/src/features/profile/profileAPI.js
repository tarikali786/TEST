import axios from "axios";

export const updateProfile = async (userData) => {
  try {
    const formData = new FormData();
    //return userData

    // Append user profile data to FormData
    if (userData.images) {
      for (const file of userData.images) {
        formData.append("images", file);
      }
    }

    // Append other fields to FormData dynamically using a loop
    for (const field in userData) {
      if (field !== "images") {
        formData.append(field, userData[field]);
      }
    }
    const response = await axios.post("/api/v1/user/update/profile", formData);
    return response.data;
  } catch (error) {
    // Handle errors and log them
    console.error("Error in updateProfile:", error);
    return {
      error: error.message || "An error occurred while updating the profile.",
    };
  }
};
