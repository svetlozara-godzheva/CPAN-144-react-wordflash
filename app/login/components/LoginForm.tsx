import Link from "next/link";
import React from "react";

export default function LoginForm() {
    return (
        <form>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">Username</label>
                <input type="email" id="loginName" className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" className="form-control" />
            </div>
            <Link className="btn btn-primary btn-block mb-4" href="/">
                Sign in
            </Link>
            {/* <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button> */}
        </form>
    );
}