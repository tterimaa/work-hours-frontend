import axios from "axios";

const API_URL = "http://localhost:3000";

const getUserDetails = async (token: any) => {
    const res = await axios.get(API_URL + "/users/get-user", {
        headers: {
            "Authorization": token
        }
    })
    return res.data;
}

export default { getUserDetails };