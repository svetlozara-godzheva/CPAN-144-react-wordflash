'use client';
import { Button, Modal } from 'react-bootstrap';
import React, { useEffect } from "react";
import styles from "./styles.module.css"
import Link from 'next/link';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

export default function Login() {
    return (
        <div className="container mb-5 mt-5 px-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className={styles.loginForm}>
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link nav-link-primary active" id="tab-login" data-bs-toggle="tab" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link nav-link-primary" id="tab-register" data-bs-toggle="tab" href="#pills-register" role="tab"
                                    aria-controls="pills-register" aria-selected="false">Register</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <LoginForm />
                            </div>
                            <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <RegistrationForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>

    );
}
