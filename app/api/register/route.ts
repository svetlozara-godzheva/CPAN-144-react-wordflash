import { NextRequest, NextResponse } from "next/server";
import { sessionOptions } from "../auth";
import { getIronSession } from "iron-session";
import USERS from "../auth";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.username || !body.password) {
            return NextResponse.json(
                { error: "Username and password are required" },
                { status: 400 }
            );
        }

        if (USERS[body.username]) {
            return NextResponse.json(
                { error: "Username already exists" },
                { status: 400 }
            );
        }

        USERS[body.username] = {
            username: body.username,
            password: body.password
        };

        console.log(USERS);

        let response = NextResponse.json({
            success: true
        });

        return response;

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}