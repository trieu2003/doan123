import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/predict/";

export const predictFlower = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error predicting flower:", error);
    return null;
  }
};
