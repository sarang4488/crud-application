import axios from "axios";

export async function addStudent(data) {
  const response = await axios.post(
    "http://localhost:3001/api/addStudent",
    data
  );
  //const data = await response.json();
  console.log(response);
  return response;
}

export async function fetchStudents() {
  const response = await axios.get("http://localhost:3001/api/fetchStudents");
  //const data = await response.json();
  console.log(response);

  return response;
}

export async function deleteStudent(data) {
  const response = await axios.post(
    "http://localhost:3001/api/deleteStudent",
    data
  );
  //const data = await response.json();
  console.log(response);

  return response;
}

export async function editStudentRequest(data) {
  const response = await axios.post(
    "http://localhost:3001/api/editStudentRequest",
    data
  );
  console.log(response);
  return response;
}
