import axios from "axios";

//axios
const obtenerToken = async (bodyToken) => {
  const response = axios
    .post(`http://localhost:7070/API/v1.0/seguridad/token/getToken`, bodyToken)
    .then((r) => r.data);
  return response;
};

//fachada
export const obtenerTokenFachada = async (bodyToken) => {
  return await obtenerToken(bodyToken);
};
