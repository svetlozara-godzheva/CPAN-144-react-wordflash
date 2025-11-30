import { login } from "@/app/services/userService";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {

    const [username, setUsername] = useState("");
    const [usernameError, setNameError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const router = useRouter();

    const register = async (e: React.FormEvent) => {
        e.preventDefault();

        let isFormValid = true;
        if (!username) {
            setNameError("You should enter your username");
            isFormValid = false;
        } else {
            setNameError("");
        }

        if (password.length < 6) {
            setPasswordError("Your password should be at least 6 characters");
            isFormValid = false;
        } else {
            setPasswordError("");
        }

        if (isFormValid) {
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ username: username, password: password }),
            });

            if (response.ok) {
                const loginResponse = await login(username, password);
                if (loginResponse.success) {
                    router.push("/");
                } else {
                    setNameError(loginResponse.error);
                }
            } else {
                const errorResponse = await response.json();
                setNameError(errorResponse.error);
            }
        }
    };

    return (
        <form>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerUsername">Username</label>
                <input type="text" id="registerUsername" className="form-control"
                    value={username} onChange={(x) => setUsername(x.currentTarget.value)} />
                <span className="error" id="username-error">{usernameError}</span>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPassword">Password</label>
                <input type="password" id="registerPassword" className="form-control"
                    value={password} onChange={(x) => setPassword(x.currentTarget.value)} />
                <span className="error" id="password-error">{passwordError}</span>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={register}>Register</button>
        </form>
    );
}