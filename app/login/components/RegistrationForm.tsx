import React from "react";

export default function RegistrationForm() {
    return (
        <form>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerUsername">Username</label>
                <input type="text" id="registerUsername" className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPassword">Password</label>
                <input type="password" id="registerPassword" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
        </form>
    );
}