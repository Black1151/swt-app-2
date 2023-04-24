import axios from "axios";

const server = "192.168.0.56";
const port = "3333";

export const getAllStudentsAPI = async () => {
  try {
    const response = await axios.get(`http://${server}:${port}/api/students`);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addStudentAPI = async (student) => {
  try {
    const response = await axios.post(
      `http://${server}:${port}/api/students`,
      student
    );
    return response.status;
  } catch (error) {
    console.error(error);
    return null;
  }
};
