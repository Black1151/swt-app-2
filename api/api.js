import axios from "axios";

const server = "192.168.0.56";
const port = "3333";
const studentsUrl = `http://${server}:${port}/api/students/`;

const apiCall = async (method, url, data) => {
  try {
    const response = await axios({ method, url, data });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Fetch all students
export const getAllStudentsAPI = async () => {
  const response = await apiCall("get", studentsUrl);
  console.log("response", response.data);
  return response.data;
};

// Fetch single student
export const getStudentAPI = async (id) => {
  const response = await apiCall("get", `${studentsUrl}${id}`);
  return response.data;
};

// Add a student
export const addStudentAPI = async (student) => {
  const response = await apiCall("post", studentsUrl, student);
  return response.status;
};

// update behaviour
export const updateBehaviourScoreAPI = async (studentId, behaviorScore) => {
  const response = await apiCall(
    "put",
    `${studentsUrl}${studentId}/behavior_score`,
    { behavior_score: behaviorScore }
  );
  return response.status;
};

// Get all goals
export const getAllGoalsAPI = async (studentId) => {
  const response = await apiCall("get", `${studentsUrl}goals/${studentId}`);
  return response.data;
};

// add a goal
export const addGoalAPI = async (studentId, title) => {
  const response = await apiCall("post", `${studentsUrl}goals/${studentId}`, {
    title,
  });
  return response.status;
};

// update a goals status
export const updateGoalStatusAPI = async (studentId, goalIndex, status) => {
  const response = await apiCall(
    "put",
    `${studentsUrl}${studentId}/goals/${goalIndex}/status`,
    { status }
  );
  return response.status;
};

// add evidence for a goal
export const addEvidenceAPI = async (studentId, goalIndex, evidence) => {
  const response = await apiCall(
    "post",
    `${studentsUrl}${studentId}/goals/${goalIndex}/evidence`,
    evidence
  );
  return response.status;
};
