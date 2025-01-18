import axios from "axios";
import { JobInput } from "../validations/job";



export async function jobPost(data:JobInput) {
    try {
        const response = await axios.post("http://localhost:3000/api/jobs", data, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return response.data;
    } catch (error) {
        console.error("Login request failed:", error);
        throw error;
    }
}