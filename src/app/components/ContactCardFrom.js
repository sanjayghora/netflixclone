"use client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  weight: ["400", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function ContactCardFrom() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  function handlechange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      //set the staytus based on the response from the api route/

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="usermame"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handlechange}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handlechange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className={mulish.className}
            value={user.phone}
            onChange={handlechange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your name"
            className={mulish.className}
            value={user.message}
            onChange={handlechange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.suceess_msg}>Thank you for your message</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your msg. please try again
          </p>
        )}
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
}
