import axios from "axios";

const API_URL = "http://localhost:3000";

const getUserDetails = async (token: string) => {
  const res = await axios.get(API_URL + "/users/get-user", {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const findUserByEmail = async (token: string | null, email: string) => {
  const res = await axios.post(
    API_URL + "/users/find-user",
    {
      email,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res.data;
};

const sendRequest = async (token: string | null, toId: string) => {
  return await axios.post(
    API_URL + "/users/send-request",
    {
      toId,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export default { getUserDetails, findUserByEmail, sendRequest };
