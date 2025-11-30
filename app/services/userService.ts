import router from "next/router";

export async function login(username: string, password: string) {
    const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
    });

    const data = await response.json();

    return data;
}