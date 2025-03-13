import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Middleware function to check for access_token in cookies and token in query
export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;
  if (accessToken) {
    // If access_token exists in cookies, proceed with the request
    return NextResponse.next();
  } else if (pathname === "/") {
    // If no access_token in cookies, check for token in query params
    const token = searchParams.get("token");

    if (token) {
      // If token exists in query params, redirect to "/"
      request.cookies.set("access_token", token);
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      // If neither access_token nor token exists, redirect to "/login"
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Proceed with the request for non-root routes
  return NextResponse.next();
}

// // Optional: Limit middleware to the root route
// export const config = {
//   matcher: "/",
// };
