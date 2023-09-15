import { api_url } from "../contants";

export const api = async (route, method, body) => {
  const response = await fetch(`${api_url}/api/${route}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
};
