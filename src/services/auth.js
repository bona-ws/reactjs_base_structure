import api from "../config";
import { api_constant } from "../constant";

const { method, request_name, api_path } = api_constant.auth.login;

export const loginService = async (email, password) => {
	const result = await api(method, request_name, api_path, { email, password });

	return result;
};
