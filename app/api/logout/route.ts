import { NextRequest, NextResponse } from "next/server";
import { sessionOptions } from "../auth";
import { getIronSession } from "iron-session";


export async function GET(request: NextRequest) {
    try {
        var response = NextResponse.json({ success: true });

        if (request.cookies.has("session")) {
            const session = await getIronSession<any>(request, response, sessionOptions);
            if (session.user) {
                session.destroy();
            }
        }

        return response;

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}