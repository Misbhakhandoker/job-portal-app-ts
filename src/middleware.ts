import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/auth";
  const allowedRoutes = ["/", "/onboard", "/jobs", "/blog"];

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token !== "") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && token === "") {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }

  if (token !== "" && allowedRoutes.includes(path)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/", "/onboard", "/jobs", "/blog"],
};
