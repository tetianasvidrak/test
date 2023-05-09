import axios from "axios";

axios.defaults.baseURL = "https://6457b9631a4c152cf988cc49.mockapi.io/";

export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};
