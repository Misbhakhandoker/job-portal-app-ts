import connectToDB from "@/database/config";
import { CandidateSchema } from "@/lib/validations/onboard";
import Profile from "@/models/ProfileSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    // const {
    //   userId,
    //   role,
    //   email,
    //   isPremiumUser,
    //   memberShipType,
    //   memberShipStartDate,
    //   memberShipEndDate,
    // } = body;
    const result = CandidateSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input",
          error: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    const {
      name,
      skills,
      college,
      currentCompany,
      collegeLocation,
      currentJobLocation,
      currentSalary,
      graduatedYear,
      noticePeriod,
      totalExperience,
      previousCompanies,
      linkedinProfile,
      githubProfile,
    } = result.data;

    await Profile.create({
      ...body,
      candidateInfo: {
        name,
        skills,
        college,
        currentCompany,
        collegeLocation,
        currentJobLocation,
        currentSalary,
        graduatedYear,
        noticePeriod,
        totalExperience,
        previousCompanies,
        linkedinProfile,
        githubProfile,
      },
    });
    return NextResponse.json(
      { success: true, message: "Candidate create successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Candidate error", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
