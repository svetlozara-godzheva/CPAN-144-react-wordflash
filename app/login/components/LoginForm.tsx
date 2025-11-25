"use client"
import router from "next/router";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const signIn = async () => {

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ username: username, password: password }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.log(data.error || "Login failed")
                return;
            }
            router.push("/");

        } catch (err) {
            console.error("Login error:", err);
        }
    };
    return (
        <div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">Username</label>
                <input type="text" id="loginName" className="form-control" value={username} onChange={x => setUsername(x.target.value)} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" className="form-control" value={password} onChange={x => setPassword(x.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={x => signIn()}>Sign in</button>
        </div>
    );
}