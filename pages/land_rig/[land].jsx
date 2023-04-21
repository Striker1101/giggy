import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Land_Rig.module.css";
const data = [
  {
    id: "1000",
    name: "1000 hp Drilling Rigs",
    case: "Used 1000 HP – Available Now",
    price:
      "PRICE: Negotiable Available: Now, Location: USA Also available for lease.",
    spec: [],
    note: "",
  },
  {
    id: "1200",
    name: "1200 hp",
    case: "",
    price:
      "PRICE: Asking US$ 3.0 million, negotiable. Also available for lease. Contact for details.",
    spec: [
      "Ingersoll Rand (2013) Fast Moving Rig, 1200 Hp",
      "Refurbished: 2015",
      "Certification/Inspection Date: 10-28-15  Cat. 4F",
      "Drilling Depth: 15,000 ft.",
    ],
    note: "",
  },
  {
    id: "1300",
    name: "1300 horsepower drilling rigs",
    case: "Made in Texas USA – 1300 HP Land Drilling Rig",
    price: "Price to be determined. Rig can be ready in about 60 days.",
    spec: [
      "1300 HP Heavy Duty Single Drum Drawworks. Nominal Drilling Depth: up to 14,000 ft.",
    ],
    note: "Note: Used 2010 version of this rig available. Price approximately US$ 2.0 million plus shipping.",
  },
  {
    id: "1500",
    name: "1500 HP drilling rigs",
    case: "2010 American Directional 1500 HP Hydraulic Land Rig",
    price: "",
    spec: [],
    note: "1500 HP Inventory constantly changing. Please complete RFQ for information. We can get American, European and Chines made rigs for sale or lease.",
  },
  {
    id: "2000",
    name: "2000 horsepower drilling rigs",
    case: "Used National Oilwell E-2000 Land Rig Package",
    price: "PRICE: To be determined.",
    spec: [
      "eady for rig up and 3rd party inspection. Some Key parameters as below:",
      "Nominal drilling depth 7000m(23000ft) (4-1/2″ DP)",
      "Rig rated max. static load capacity 4,500kN with 12 lines",
      "3900kN with 10 lines, 3000kN with 8 lines",
      "Maximum DP weight 2,200kN",
      "Maximum fast line pull force 485kN",
      "Rated input power of drawworks 2×800kW",
      "Drawworks shifts 4+4R shift, stepless speed regulation",
      "Rotary table ZP375, 37 1/2″ (952 mm) opening, DC motor drive 1+1R shift, stepless speed regulating.",
      "Lines strung 12 (6×7) lines",
      "OD of drill line 1-1/2″ (Ø38mm)",
      "OD of the block sheave Ø1524mm",
      "Internal diameter of swivel stem: 75mm(3″)",
      "Mud pumps 1600HP (F-1600)",
      "The mast “K” shape, 45.5m(150ft) clear height. Capacity of set back board: 7000m(23000ft) (4-1/2″DP), 4 stands of 10″ DC and 6 stands of 8″ DC.",
      "Substructure Sling shot type",
      "Drill floor height of 10.5m(35ft). Clear height of 8.92m(29ft).",
      "Power transmission type AC-SCR-DC control",
      "Engine Generators model CAT 3512BDITA/ SR4B",
      "Auxiliary generator model & volt CAT C15, 292kW 400V",
      "DC motors:",
      "Drawworks motors 2 ×800kW",
      "Mud pump motors 2×800kW for each",
      "Rotary table motor 1×800kW",
      "Auto-driller motor 1×45kW",
      "Number of SCR 6,1 ea for the mud pumps, 2 for the drawworks, 1 for the rotary table.",
    ],
    note: "",
  },
  {
    id: "3000",
    name: "3000 horsepower drilling rigs",
    case: "Made in China 3000 HP Used (2010) 3000 HP Land Rig Complete",
    note: "Our Made in China made land drilling rigs use USA components for the major systems and are API certified. Rigs can normally be completed in 30-90 days.",
    spec: [
      "Nominal drilling depth 9,000 m with 114mm 4 1/2inch DP",
      "Rig rated max. static load capacity 14 lines 6750kN",
      "Maximum DP weight 3100KN",
      "Maximum fast line pull 550KN",
      "Rated input power of drawworks 4×700kW",
      "The mast front opening, modular type",
      "Substructure double deck moving offshore platform type",
      "Height of Drill floor 11.5m",
      "Power transmission type AC-VFD-AC control",
      "Mud pumps 2200HP F2200HL",
      "Engine Generators model CAT 3512BDITA/ SR4B",
      "Auxiliary generator model ab and volt CAT3406DITA, 292kW 380V",
    ],
    price:
      "PRICE: Approximately $25 million plus shipping. Final price to be determined.",
  },
];

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { land: item.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const land = data.find((item) => item.id === params.land);

  return { props: { data: land } };
}

function Id({ data }) {
  const { name, spec, price } = data;

  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>{name}</h3>
      <DottedHR />
      {data.case === "" ? (
        ""
      ) : (
        <>
          <h3>{data.case}</h3>
          <DottedHR />
        </>
      )}
      <div>
        {spec.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <p>{price}</p>
      <a style={{ color: "blue" }} href={`/land_rig/${getNextSlug(data.id)}`}>
        Next: {getName(data.id)}
      </a>
    </main>
  );
}

function getNextSlug(currentSlug) {
  const currentIndex = data.findIndex((item) => item.id === currentSlug);
  const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

  return data[nextIndex].id;
}
function getName(currentSlug) {
  const currentIndex = data.findIndex((item) => item.id === currentSlug);
  const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

  return data[nextIndex].name;
}

export default Id;
