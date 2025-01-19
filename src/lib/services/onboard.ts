import axios from "axios";
import {
  CandidateInput,
  RecruiterInputFormValues,
} from "../validations/onboard";

export async function candidateUser(data: CandidateInput) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/candidate",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("CandidateUser request failed", error);
    throw error;
  }
}

export async function recruiterUser(data: RecruiterInputFormValues) {
  console.log(data, "recruiterUser");
  try {
    const response = await axios.post(
      "http://localhost:3000/api/recruiter",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("recruiter response: ", response);

    return response.data;
  } catch (error) {
    console.error("RecruiterUser request failed", error);
    throw error;
  }
}
