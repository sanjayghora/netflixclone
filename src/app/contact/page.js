import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "@/app/contact/contact.module.css";
import ContactCardFrom from "../components/ContactCardFrom";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Details</h1>
        <ContactCard />

        <section className={styles.contact_section} >
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <ContactCardFrom />
          </section>
        
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29672.294440624308!2d87.49025576576574!3d21.623489431417706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ccd46c454a84d%3A0xd166b9687aa01c59!2sDigha%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1688746133805!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
}
