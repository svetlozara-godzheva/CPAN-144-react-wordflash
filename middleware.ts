import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sessionOptions } from "./app/api/auth";
import { getIronSession } from "iron-session";

export async function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;
    const session = await getIronSession<any>(request, new Response(), sessionOptions);
    console.log(session.user);
    // Redirect to login if accessing protected route without session
    if (pathname != "/login" && !session.user) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    // Redirect to dashboard if accessing login with active session
    if (pathname === "/login" && session.user) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
};