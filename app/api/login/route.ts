import { NextRequest, NextResponse } from "next/server";
import { sessionOptions } from "../auth";
import { getIronSession } from "iron-session";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.username || !body.password) {
            return NextResponse.json(
                { error: "Username and password are required" },
                { status: 400 }
            );
        }

        let response = NextResponse.json({
            success: true
        });

        const session = await getIronSession<any>(request, response, sessionOptions);
        session.user = { id: 123, name: "Erik" };
        await session.save();

        return response;

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}