import axios from "axios";
import { getToken } from "../lib/localStorage";

const { REACT_APP_API_URL } = process.env;

let result_data = null;

const instance = axios.create({
	baseURL: REACT_APP_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${getToken() ? getToken().token : ""}`,
	},
});

const apiConfig = async (method, request_name, api_path, data, params) => {
	await instance({
		method,
		url: api_path,
		data,
		params,
	})
		.then((res) => {
			if (res.status === 200) result_data = res.data;
			else console.log(`${request_name} error ${res.status}`);
		})
		.catch((err) => alert(`${err}, request ${request_name} error`));

	return result_data;
};

export default apiConfig;
