import axios from "axios";

//methods axios
const consultEstudent = async (cedula, token) => {
  const headers = {
    "Authorization": "Bearer " + token,
  };
  const data = axios
    .get(`http://localhost:7020/API/v1.0/Servicio/estudiantes/${cedula}`, {
      headers: headers,
    })
    .then((r) => r.data);
  // console.log("consultando el estudiante")
  return data;
};

const guardarEstudiante = async (body, token) => {
  const headers = {
    "Authorization": "Bearer " + token,
  };
  axios
    .post(`http://localhost:7020/API/v1.0/Servicio/estudiantes`, body, {
      headers: headers,
    })
    .then((r) => r.data);
  // console.log("guardando estudiante");
};

//fachadas with exports
export const consultEstudentFachada = async (cedula, token) => {
  return await consultEstudent(cedula, token);
};

export const guardarEstudianteFachada = async (body, token) => {
  return await guardarEstudiante(body, token);
};
