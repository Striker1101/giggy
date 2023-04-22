import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Nav.module.css";
function Icon(props) {
  return (
    <Link href={"/"} className={styles.image}>
      <Image
        style={{
          layout: "fill",
          objectFit: "cover",
          objectPosition: "center",
          margin: "0",
        }}
        src="/icon.svg"
        alt="icon"
        height={150}
        width={55}
      />
      <h1>GIG</h1>
    </Link>
  );
}

export default Icon;
