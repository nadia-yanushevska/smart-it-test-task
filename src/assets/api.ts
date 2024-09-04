import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export function get_customers() {
    const data = axios.get(`/users`);
    return data;
}
