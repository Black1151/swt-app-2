import axios from "axios";

const server = "192.168.0.56";
const port = "3333";

const apiCall = async (method, url, data) => {
  try {
    const response = await axios({ method, url, data });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllStudentsAPI = async () => {
  const response = await apiCall(
    "get",
    `http://${server}:${port}/api/students`
  );
  console.log("response", response.data);
  return response.data;
};

export const addStudentAPI = async (student) => {
  const response = await apiCall(
    "post",
    `http://${server}:${port}/api/students`,
    student
  );
  return response.status;
};

export const updateBehaviorScoreAPI = async (studentId, behaviorScore) => {
  const response = await apiCall(
    "put",
    `http://${server}:${port}/api/students/${studentId}/behavior_score`,
    { behavior_score: behaviorScore }
  );
  return response.status;
};

export const addGoalAPI = async (studentId, goal) => {
  const response = await apiCall(
    "post",
    `http://${server}:${port}/api/students/${studentId}/goals`,
    goal
  );
  return response.status;
};

export const updateGoalStatusAPI = async (studentId, goalIndex, status) => {
  const response = await apiCall(
    "put",
    `http://${server}:${port}/api/students/${studentId}/goals/${goalIndex}/status`,
    { status }
  );
  return response.status;
};

export const addEvidenceAPI = async (studentId, goalIndex, evidence) => {
  const response = await apiCall(
    "post",
    `http://${server}:${port}/api/students/${studentId}/goals/${goalIndex}/evidence`,
    evidence
  );
  return response.status;
};
