import Head from 'next/head';

import styles from '../styles/Signup.module.css';
import React, { useState } from 'react';
// import Image from 'next/image'
import Script from 'next/script'

export default function Home() {

    const [email, setEmail] = useState("");

    return (
        <div className={styles.container}>
            <Head>
                <title>Sign Up | Zuri Chat</title>
                <link rel="icon" href="/zurichatlogo.svg" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>
            </Head>
            <div className={`container text-center m-auto`}>
                <div className={`pt-5 px-3 mt-5`}>
                    <span><img src="/zurichatlogo.svg" alt="logo" /><p className={`d-inline p-2`}>Zuri chat</p></span>
                    <h2 className={` pt-2`}>Sign in to Zuri Chat</h2>
                    <p className={styles.subtext}>Enter your email to sign In</p>
                    <div className={`my-3`}>
                        <button className={`${styles.button_outline} m-0 col-12 col-md-6 px-2 px-md-5 py-2 btn btn-outline-dark`}><img className={`text-align-center px-2`} src="/googleicon.svg" alt="google icon" />Sign in with Google</button>
                    </div>
                    <div className={`my-3`}>
                        <button className={`${styles.button_outline} m-0 col-12 col-md-6 btn px-2 px-md-5 py-2 btn-outline-primary`}><img className={`text-align-center px-2`} src="/facebookicon.svg" alt="google icon" />Sign in with Facebook</button>
                    </div>
                    <div className={`d-flex`}>
                        <div className={`col-12 col-md-6 m-auto mt-5`}>
                            <p className={`mb-0 text-start ${styles.email_subheading}`}>Or sign up with Email</p>
                        </div>
                    </div>
                    <div className={`d-flex ${styles.email_input}`}>
                        <div className={`mb-3 col-12 col-md-6 m-auto`}>
                            <input type="email" className={`py-2 form-control`} value={email} onChange={(e) => {
                                console.log(e.target.value)
                                setEmail(e.target.value)}} placeholder="aristotle@gmail.com" />
                        </div>
                    </div>

                    <div>
                        <button className={` ${styles.button} btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2 btn-primary`}>Sign In</button>
                    </div>
                    <span className={``}>Don't have an account? <a className={styles.link} href="/signup">Create an account</a></span>
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></Script>
        </div>
    );
}
