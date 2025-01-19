import connectToDB from "@/database/config";
import { RecruiterSchema } from "@/lib/validations/onboard";
import Profile from "@/models/ProfileSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    console.log("Incoming request body:", body);
    // const { userId, role, email, isPremiumUser } = body;
    const result = RecruiterSchema.safeParse(body);
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
    const { name, companyName, companyRole } = result.data;
    console.log("Parsed data:", { name, companyName, companyRole });

    const profile = await Profile.create({
     
     ...body,
      recruiterInfo: { name, companyName, companyRole },
      // userId,
      // role,
      // email,
      // isPremiumUser,
      // memberShipType,
      // memberShipStartDate,
      // memberShipEndDate,
    });
    console.log("profile create", profile);

    return NextResponse.json(
      { success: true, message: "Recruiter create successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Recruiter error", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
