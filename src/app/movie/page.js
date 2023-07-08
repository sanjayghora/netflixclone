import React from "react";
import Link from "next/link";
import styles from "@/app/styles/common.module.css"
import MoviCard from "../components/MoviCard";

export default async function Movie() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "92f1f9e7d4mshe98026431f3dae2p1e3e76jsnbd0a8c722e68",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(data);
  // console.log(main_data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
          {main_data.map((curEle) => {
            return <MoviCard key={curEle.id} {...curEle} />;
          })}
          </div>
        </div>
      </section>
    </>
  );
}
