import axios from "axios";

axios.defaults.baseURL = "https://66d60d84f5859a7042683cdf.mockapi.io";

export function get_customers() {
    const data = axios.get(`/Customer`);
    return data;
}
