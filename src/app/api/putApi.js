import { validPayload } from "../util/validation.js";

const post = async (payload) => {
  validPayload();
  try {
    const response = await fetch("http://localhost:9000/createCount", {
      method: "POST",
	    headers:{
		    "Content-Type": "application/json",
	    },
	    body: JSON.stringify(payload),
    });

    const data = await response.json();
console.log("fetch APi post call response: " , data);
  } catch (e) {
    console.error("Error fetching data:  ", e);
  }
};

const postApi = {
  post,
};
export default postApi;
