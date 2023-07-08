import styles from "@/app/styles/common.module.css";
import Image from "next/image";

export default async function page({ params }) {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "92f1f9e7d4mshe98026431f3dae2p1e3e76jsnbd0a8c722e68",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={main_data.logoImage.url}
            alt={main_data.title}
            width={250}
            height={200}
          />
        </div>
        <div>
          <h2>Netflix \<span> {main_data.type} </span></h2>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </>
  );
}
