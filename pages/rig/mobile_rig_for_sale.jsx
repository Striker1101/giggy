import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Rig.module.css";

function Mobile_rig_for_sale(props) {
  const data = {
    hold1: [
      {
        header: "SKYTOP BREWSTER RR-400",
        content:
          " Well Service Unit 42X10 TUBING DRUM w/PARMAC Hydromatic Brake, p/b DETROIT 12V-71 Diesel Eng ALLISON 5860 Trans w/Drop Box, SKYTOP BREWSTER 96H, 210,000# 4-Leg Telescoping Mast, Hydraulically Raised & Scoped w/4-Sheave Crown, Dbl Tubing & Triple Rod Boards, Mtd on SKYTOP BREWSTER 4-Axle Carrier w/Sgl-Man Cab, (4) Hyd Leveling Jacks, Air & Hyd Controls, Utility Hoist, Swing-Out Tong Rack, Floatation Front Tires, 2” STANDPIPE & ROD TRANSFER CYLINDER W/CONTROLS",
        price: "",
        img: "/mobile/img3.jpg",
      },
      {
        header: "Corsair Crane Carrier W3284C",
        content:
          "Series 60 Detroit Diesel, 3180 Allison transmission, 96’- 215,000# mast & 42X12-42X8 Drawworks",
        price: "Price: $375,000, $425,000 complete with tools",
        img: "/mobile/img4.jpg",
      },
      {
        header: "FRANKS 1058-160-DTD-HT",
        content:
          "D/D Well Service Unit p/b DETROIT 8V-71N Diesel Eng, ALLISON CLT-750 Trans. 96’H 180,000# 4-Leg Telescoping Mast(NEW), Hydraulically Raised & Scoped w/4-Sheave Crown, Dbl Tubing & Triple Rod Boards, Adjustable Height Work Platform.Mtd on FRANKS “Rocket” 4-Axle Carrier w/Sgl-Man Cab, (4) Hyd Leveling Jacks, Air & Hyd Controls, Floatation Front Tires.",
        price: "",
        img: "/mobile/img5.jpg",
      },
      {
        header: "HOPPER RTA 750 RIG",
        content:
          "POWER- (2) CAT-3408, TRANSMISSION- (2) 5860 ALLISONMAST- 120’ 450,000#, 48” DRAWWORKS PARMAC HYDROMATIC BRAKE & HYDRAULIC ANCHOR",
        price: "Price: $550,000",
        img: "/mobile/img6.jpg",
      },
      {
        header: "FRANKS 200",
        content:
          "42×10-42×8 D/D Well Service Unit p/b DETROIT 8V-92T Diesel Eng, ALLISON CLBT-4460 Trans. 71’H 150,000# Telescoping Mast, Hydraulically Raised & Scoped w/5-Sheave Crown, Sgl Tubing & Dbl Rod Boards, Adjustable Height Work Platform. Mtd on FRANKS 4-Axle Carrier w/Sgl-Man Cab, (4) Hyd & (2) Manual Leveling Jacks, RAMSEY Hyd Utility Hoist, Air & Hyd Controls, 11R-24.5 Tires",
        price: "",
        img: "/mobile/img7.jpg",
      },
      {
        header: "FRANKS 1287-160-DTD-HT",
        content:
          "/D Well Service Unit p/b DETROIT 8V-71N Diesel Eng, ALLISON CBT-4460-1 Trans.96′ 180,000# Hydraulically Raised & Scoped w/5-Sheave Crown, Dbl Tubing & Triple Rod Boards. Mtd on FRANKS 4-Axle Carrier w/Sgl-Man Cab, (4) Hyd Leveling Jacks, Hyd Utility Hoist, Air & Hyd Controls, Floatation Front Tires ",
        price: "",
        img: "/mobile/img8.jpg",
      },
    ],
    hold2: [
      "/mobile/img10.jpg",
      "/mobile/img11.jpg",
      "/mobile/img12.jpg",
      "/mobile/img13.jpg",
      "/mobile/img14.jpg",
      "/mobile/img15.jpg",
      "/mobile/img16.jpg",
      "/mobile/img17.jpg",
      "/mobile/img18.jpg",
    ],
  };
  return (
    <main className={styles.mfs}>
      <Navigation />
      <DottedHR />
      <h3>Mobile Workover Drilling Rigs for Sale</h3>
      <DottedHR />
      <p>
        OilRigsNow.com is a broker for new and used mobile drilling rigs. We
        have access to a large selection from the USA, Canada, Europe, and
        China. Please send us a RFQ. Let us know if you need a rig that is not
        listed.
      </p>
      <h3>New Mobile Workover/Drilling Rigs</h3>
      <DottedHR />
      <h5>New USA Mobile Workover/Drilling Rigs</h5>
      <h5>1000 HP</h5>
      <h3>1000 HP Trailer Mounted Drilling Rig</h3>
      <DottedHR />
      <p>
        PRICE: Depending on final configuration. Available: 60 days or less.
        ************************************************************
        <h5>1000 HP</h5>
        <h3>1000 HP Carrier Mounted Drilling Rig – USA Made</h3>
        <DottedHR />
        Available: 60 days or less
        ***********************************************************
        <h5>New Chinese Mobile Workover/Drilling Rigs</h5>
        <h5>750 HP</h5>
      </p>
      <div>
        <h3> XJ750 Truck-mounted Workover Rig</h3>
        <DottedHR />
        <img
          src="/mobile/img0.png"
          alt="750 HP truck mounted workover rig"
        />{" "}
        <br />
        Final price depends on rig configurations. Available in 90 days or less.
        ****************************************************************
      </div>
      <div>
        <h3>ZJ40 1000 HP Truck-mounted Drilling Rig</h3>
        <DottedHR />
        <img
          src="/mobile/img1.png"
          alt="750 HP truck mounted workover rig"
        />{" "}
        <img src="/mobile/img2.png" alt="750 HP truck mounted workover rig" />{" "}
        <p>
          Final price depends on rig configurations. Available in 90 days or
          less.
          ************************************************************************************
        </p>
      </div>
      <div></div>
      <div className={styles.holder}>
        {data.hold1.map((item, i) => {
          return (
            <div key={i} className={styles.hold}>
              <img src={item.img} alt="" />
              <div>
                <h3>{item.header}</h3>
                <p>{item.content}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <h3>under Construction - orderNow</h3>
      <div className={styles.imgHolder}>
        {data.hold2.map((item, i) => {
          return (
            <div key={i} className={styles.imgHold}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Mobile_rig_for_sale;
