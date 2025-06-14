// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { auth } from "./auth";

import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/interviews"];

export default async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("authjs.session-token")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !sessionToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}
