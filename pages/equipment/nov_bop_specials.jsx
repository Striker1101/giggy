import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Equipment.module.css";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    img: "/equipment/img0.png",
    content:
      "SBOP Assembly;07-05M,BOLTED,STD;S (05M);X F (05M);0;T-20,CREP 2,COATING-EVERSLICK;API RG;TAPER $55,500./EACH ",
  },
  {
    img: "/equipment/img1.png",
    content:
      "SBOP Assembly;11-03M,BOLTED,STD;S (03M);X F (03M);1 13/16” -10M SO;T20,CREP 3,COATING-EVERSLICK;API RG;SQ $75,900.",
  },
  {
    img: "/equipment/img2.png",
    content:
      "SBOP Assembly;13-05M,BOLTED,STD;S (05M);X F (05M);0;T-20,CREP 2,COATING-EVERSLICK;API RG;No Load Shoulder $137,500.",
  },
  {
    img: "/equipment/img3.png",
    content:
      "SBOP Assembly;21-02M,BOLTED,STD;S (02M);X F (02M);0;T-20,CREP 3,COATING-EVERSLICK;API RG;SQ $179,900.",
  },
  {
    img: "/equipment/img4.png",
    content:
      "SBOP Assembly;21-02M,BOLTED,STD;S (02M);X F (02M);0;T-20,CREP 3,COATING-EVERSLICK;API RG;SQ $179,988.",
  },
  {
    img: "/equipment/img5.png",
    content:
      "SBOP Assembly;30-01M,BOLTED,STD;S (02M);X F (02M);0;T-20,CREP 2,COATING-EVERSLICK;API RG;TAPER $399,620.",
  },
  {
    img: "/equipment/img6.png",
    content:
      "SBOP Assembly;18-10M,WEDGE,SL;S (10M);X F (10M);(1)3-15M SO;T-20,CREP 3,COATING-EVERSLICK;API RG;SQ $375,000.",
  },
  {
    img: "/equipment/img7.png",
    content:
      "SBOP Assembly;18-10M,WEDGE,SL;S (10M);X F (10M);(1)3-15M SO;T-20,CREP 3,COATING-EVERSLICK;API RG;SQ $375,000.",
  },
  {
    img: "/equipment/img8.png",
    content:
      "SBOP Assembly;18-10M,WEDGE,STD;S (10M);X F (10M);(1)3-15M SO;T20,CREP 3,COATING-EVERSLICK;API RG;SQ $485,,000.",
  },
  {
    img: "/equipment/img9.png",
    content:
      "SBOP Assembly;18-10M,WEDGE,SL;S (10M);X F (15M);1 13/16” -15M SO;T20,CREP 5,COATING-EVERSLICK;API RG;SQ $499,500.",
  },
  {
    img: "/equipment/img10.png",
    content:
      "Body, BOP;BOP ASSY- 13-5M, SGL, LXT;Stud x Flange;Studded x 3-1/8 x 5M;Assembly;SST;No CREP;Standard $215,000.",
  },
  {
    img: "/equipment/img11.png",
    content:
      "WLY;ASSEMBLY~DOUBLE RAM 6012 BOP 7;-1/16 15K~STD & LBSTB BONNETS, FLG TOP X FLG BTM, $165,000.",
  },
  {
    img: "/equipment/img12.png",
    content:
      "PCG Engineering_EDM Use Only;BOP ASSY,13-5M, LXT, DBL,SXF (4)3-5M SO,SST,T-20,;Blow Out Preventers $317,900",
  },
  {
    img: "/equipment/img13.png",
    content:
      "ASSEMBLY~SINGLE RAM 6012 BOP 13-5/8 15K~STANDARD BONNETS FLG TOP X FLG BTM (2) 4.06 15K FLG OUTLETS W/BLIND FLGS, API Monagrammed NEW $319,369.",
  },
  {
    img: "/equipment/img14.png",
    content:
      "BOP Assembly; BOP ASSY- 13-5M, DBL, LXT;Flange x Flange;Flanged x 4-1/16 x 5M;SST;Crep 0;Standard;T,20 $354,900.",
  },
  {
    img: "/equipment/img15.png",
    content:
      "BOP Assembly;BOP ASSY- 18-15M, DBL, NXTM;Flange x Flange;Studded x 3-1/16 x 15M;CRA;Crep 7;Standard;T,20 $985,000",
  },
  {
    img: "/equipment/img16.png",
    content:
      "BOP Assembly;BOP ASSY- 18-15M, DBL, NXTM;Flange x Flange;Studded x 3-1/16 x 15M;CRA;Crep 7;Standard;T,20 $970,000.",
  },
  {
    img: "/equipment/img17.png",
    content:
      "BOP Assembly;BOP ASSY- 18-15M, TRP, NXTM;Stud x Flange;Flanged x 3-1/16 x 15M;CRA;Crep 7;Standard;T,20 $1,300,000. ",
  },
  {
    img: "/equipment/img18.png",
    content:
      "PCG Engineering_EDM Use Only;BOP ASSY, 18-15M, TRP, NXTM SXF, (6)3-15M SO;Blow Out Preventers;BOP ASSY, 18-15M, TRP, NXT $1,350,000.00",
  },
  {
    img: "/equipment/img19.png",
    content:
      "BOP Assembly; BOP ASSY- 18-15M, TRP, NXT;Stud x Flange;Studded x 3-1/16 x 15M;CRA;Crep 7;Reversible;T,20x $1.65M",
  },
  {
    img: "/equipment/img20.png",
    content:
      "BOP Assembly; BOP ASSY- 18-15M, TRP, NXT;Stud x Flange;Studded x 3-1/16 15M;CRA;Crep 7;Standard;T,20 $1.75M",
  },
];
function Nov_bop_specials(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>NOV BOP Specials</h3>
      <DottedHR />
      <h3>4 TH QTR 2018 NEW NOV SURPLUS BOP PARTS WORLDWIDE - WARRANTY</h3>
      <DottedHR />
      <div className={styles.content}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.item}>
              <Image width={200} height={200} src={item.img} alt="img" />
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
      <center>
        <h6>
          Giggy, LLC <br />
          Houston, TX
          <br />
          713-570-6450
          <br />
          info@Giggy.com
          <br />
          <Link href={"/quotes"} style={{ color: "blue" }}>
            Request for Quote
          </Link>
          <br />
        </h6>
      </center>
    </main>
  );
}

export default Nov_bop_specials;
