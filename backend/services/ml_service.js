import axios from "axios";
import FormData from "form-data";

export const callMLService = async (imageBuffer) => {
  const formData = new FormData();
  formData.append("file", imageBuffer, "image.jpg");

  const res = await axios.post(
    "http://localhost:8000/api/ml-predict",
    formData,
    { headers: formData.getHeaders() }
  );

  console.log("ml_service.node.js ", res.data);
  return res.data;

  // return {
  //   data: {
  //     plant: "potato",
  //     disease: "Late blight",
  //     confidence: 0.7,
  //   },
  // }
  };