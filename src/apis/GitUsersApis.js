import axios from "axios";

export const getAllUsers = async () => {
  const { data } = await axios.get(
    "https://api.github.com/users"
  );
  return data;
};