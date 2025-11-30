"use client"
import router from "next/router";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { login } from "@/app/services/userService";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [usernameError, setNameError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const router = useRouter();

    const signIn = async () => {

        let isFormValid = true;

        if (!username) {
            setNameError("Username is required");
            isFormValid = false;
        } else {
            setNameError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            isFormValid = false;
        } else {
            setPasswordError("");
        }

        if (isFormValid) {
            try {
                const data = await login(username, password);

                if (!data.success) {
                    setNameError(data.error);
                    return;
                }
                router.push("/");

            } catch (err) {
                console.error("Login error:", err);
            }
        }
    }

    return (
        <div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">Username</label>
                <input type="text" id="loginName" className="form-control" value={username} onChange={x => setUsername(x.target.value)} />
                <span className="error" id="username-error">{usernameError}</span>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" className="form-control" value={password} onChange={x => setPassword(x.target.value)} />
                <span className="error" id="password-error">{passwordError}</span>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={x => signIn()}>Sign in</button>
        </div>
    );
}