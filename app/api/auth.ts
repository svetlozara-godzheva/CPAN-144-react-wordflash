import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
    cookieName: "session",
    password: "very-strong-not-hardcoded-password",
    cookieOptions: {
        secure: true,
    }
};