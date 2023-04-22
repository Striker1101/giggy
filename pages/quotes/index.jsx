import DottedHR from "@/comps/DottedHR";
import Icon from "@/comps/Icon";
import React from "react";
import styles from "@/styles/Quotes.module.css";
function index(props) {
  return (
    <div>
      <center
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Icon />
      </center>
      <main className={styles.cover}>
        <form action="" className={styles.form}>
          <h2>Giggy, LLC - Please Complete</h2>
          <DottedHR />
          <label htmlFor="name">
            <h5>Name</h5>
            <div className={styles.input}>
              <div className={styles.invert}>
                <label htmlFor="fname">
                  <h6> First Name</h6>
                  <input type="text" name="fname" />
                </label>
                <label htmlFor="lname">
                  <h6> Last Name</h6>
                  <input type="text" name="lname" id="" />
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="email">
            <h5> Email</h5>
            <input type="email" name="email" id="" />
          </label>
          <label htmlFor="company">
            <h5>Company</h5>
            <input type="text" />
          </label>
          <label htmlFor="about">
            <h5>Tell us about your company</h5>
            <div className={styles.input}>
              <label htmlFor="about company">
                <input type="checkbox" name="" id="" />
                Oil or Oil Service Company
              </label>
              <label htmlFor="about wholesale">
                <input type="checkbox" name="wholesale" id="" />
                Wholesale
              </label>
              <label htmlFor="about tender">
                <input type="checkbox" name="tender" id="" />
                Tender Opertor
              </label>
              <label htmlFor="broker">
                <input type="checkbox" name="broker" id="" />
                Broker
              </label>
            </div>
          </label>
          <label htmlFor="number">
            <h5>Phone Number</h5>
            <div className={styles.input}>
              <div className={styles.invert}>
                <label htmlFor="area_code">
                  <h6>Area Code</h6>
                  <input
                    type="number"
                    maxLength={4}
                    max={4}
                    min={3}
                    minLength={3}
                    id="area_code"
                  />
                </label>
                <label htmlFor="phone number">
                  <h6>Number</h6>
                  <input type="number" name="numer" id="" />
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="address">
            <h5>Address</h5>
            <div className={styles.input}>
              <label htmlFor="street">
                <h6>Street Address</h6>
                <input type="text" name="street" />
              </label>
              <label htmlFor="street2">
                <h6>Street Address Line 2</h6>
                <input type="text" name="street2" />
              </label>
              <div className={styles.invert}>
                <label htmlFor="city">
                  <h6>City</h6>
                  <input type="text" name="city" />
                </label>
                <label htmlFor="state">
                  <h6>State/Province</h6>
                  <input type="text" name="state" />
                </label>
                <div className="location">
                  <label htmlFor="zip">
                    <h6>Postal/Zip Code</h6>
                    <input type="number" name="zip" id="" />
                  </label>
                  <label htmlFor="country">
                    <h6>country</h6>
                    <select name="country" id="">
                      <option value="us">US</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </label>
        </form>
      </main>
    </div>
  );
}

export default index;
