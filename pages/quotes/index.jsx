import DottedHR from "@/comps/DottedHR";
import Icon from "@/comps/Icon";
import React, { useState } from "react";
import styles from "@/styles/Quotes.module.css";
function Index(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setInputValue("");
  };
  const handleSubmit = (e) => {
    alert("thanks, we would send you our reply ");
    e.preventDefault();
  };
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
        <form onSubmit={handleSubmit} action="" className={styles.form}>
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
            <div className={styles.input}>
              <label htmlFor="email">
                <input type="email" name="email" id="" />
              </label>
            </div>
          </label>
          <label htmlFor="company">
            <h5>Company</h5>
            <div className={styles.input}>
              <label htmlFor="company">
                <input type="company" name="company" id="" />
              </label>
            </div>
          </label>
          <label htmlFor="about">
            <h5>Tell us about your company</h5>
            <div className={styles.checkbox}>
              <label htmlFor="about company">
                <input type="checkbox" name="" id="" />
                <h6>Oil or Oil Service Company</h6>
              </label>
              <label htmlFor="about wholesale">
                <input type="checkbox" name="wholesale" id="" />
                <h6>Wholesale</h6>
              </label>
              <label htmlFor="about tender">
                <input type="checkbox" name="tender" id="" />
                <h6> Tender Opertor</h6>
              </label>
              <label htmlFor="broker">
                <input type="checkbox" name="broker" id="" />
                <h6>Broker</h6>
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
              </div>
              <div className={styles.invert}>
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
          </label>
          <label htmlFor="purchase">
            <h5>Buy or Lease</h5>
            <div className={styles.checkbox}>
              <label htmlFor="buy">
                <input type="checkbox" name="buy" id="" />
                <h6>Buy</h6>
              </label>
              <label htmlFor="lease">
                <input type="checkbox" name="lease" id="" />
                <h6>Lease</h6>
              </label>
            </div>
          </label>
          <label htmlFor="condition">
            <h5>Condition</h5>
            <div className={styles.checkbox}>
              <label htmlFor="new">
                <input type="checkbox" name="new" id="" />
                <h6>New</h6>
              </label>
              <label htmlFor="used">
                <input type="checkbox" name="used" id="" />
                <h6>Used</h6>
              </label>
              <label htmlFor="refurbished">
                <input type="checkbox" name="refurbished" id="" />
                <h6>Refurbished</h6>
              </label>
              <label htmlFor="N/A">
                <input type="checkbox" name="n/a" id="" />
                <h6>N/A</h6>
              </label>
            </div>
          </label>
          <label htmlFor="p/s">
            <h5>Which Product or Service ?</h5>
            <div className={styles.checkbox}>
              <label htmlFor="land_rig">
                <input type="checkbox" name="land_rig" id="" />
                <h6>Land Rig</h6>
              </label>
              <label htmlFor="Jack-up _rig">
                <input type="checkbox" name="jack-up _rig" id="" />
                <h6>Jack-up Rig</h6>
              </label>
              <label htmlFor="Semi-submersible_rig">
                <input type="checkbox" name="semi-submersible_rig" id="" />
                <h6>Semi-submersible Rig</h6>
              </label>
              <label htmlFor="Drill_rig">
                <input type="checkbox" name="drill_rig" id="" />
                <h6>Drill Rig</h6>
              </label>
              <label htmlFor="Mobile_Drilling_rig">
                <input type="checkbox" name="mobile_drilling_rig" id="" />
                <h6>Mobile Drilling Rig</h6>
              </label>
              <label htmlFor="workover_rig">
                <input type="checkbox" name="workover_rig" id="" />
                <h6>Workover Rig</h6>
              </label>
              <label htmlFor="Barge_rig">
                <input type="checkbox" name="barge_rig" id="" />
                <h6>Barge Rig</h6>
              </label>
              <label htmlFor="Drill Rig Parts & Equipment">
                <input type="checkbox" name="drill_equipment" id="" />
                <h6>Drill Rig Parts & Equipment</h6>
              </label>
              <label htmlFor="Offshore Support Vessels">
                <input type="checkbox" name="offshore_support_vessels" id="" />
                <h6>Offshore Support Vessels</h6>
              </label>
              <label htmlFor="oilfield_tanks">
                <input type="checkbox" name="oilfield_tanks" id="" />
                <h6>Oilfield Tanks</h6>
              </label>
              <label htmlFor="Financing">
                <input type="checkbox" name="financing" id="" />
                <h6>Financing</h6>
              </label>
              <div className={styles.invert}>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    disabled={!isChecked}
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="manufacture">
            <h5>Area of Manufacture</h5>
            <div className={styles.checkbox}>
              <label htmlFor="usa_canada">
                <input type="checkbox" name="usa_canada" id="" />
                <h6>USA/CANADA</h6>
              </label>
              <label htmlFor="china_asia">
                <input type="checkbox" name="china_asia" id="" />
                <h6>CHINA/ASIA</h6>
              </label>
              <label htmlFor="europe_middle_ease">
                <input type="checkbox" name="europe_middle_ease" id="" />
                <h6>EUROPE / MIDDLE EAST</h6>
              </label>
              <label htmlFor="n/a">
                <input type="checkbox" name="doesnt_matter" id="" />
                <h6>Doesn&apos;t Matter</h6>
              </label>
            </div>
          </label>
          <label htmlFor="quality">
            <h5>Quality</h5>
            <div className={styles.checkbox}>
              <label htmlFor="oem">
                <input type="checkbox" name="oem" id="" />
                <h6>OEM</h6>
              </label>
              <label htmlFor="oem_licensed">
                <input type="checkbox" name="oem_licensed" id="" />
                <h6> OEM Licensed</h6>
              </label>
              <label htmlFor="api">
                <input type="checkbox" name="api" id="" />
                <h6>API</h6>
              </label>
              <label htmlFor="doesnt  matter qality">
                <input type="checkbox" name="doesnt_matter_qality" id="" />
                <h6>Doesn&apos;t Matter</h6>
              </label>
            </div>
          </label>
          <label htmlFor="quantity">
            <h5>Quantity</h5>
            <div className={styles.input}>
              <label htmlFor="quantity">
                <input defaultValue={0} type="number" name="quantity" id="" />
              </label>
            </div>
          </label>
          <label htmlFor="receive_quote">
            <h5>Time Frame to receive quote</h5>
            <div className={styles.checkbox}>
              <label htmlFor="day">
                <input type="checkbox" name="day" id="" />
                <h6>1 day</h6>
              </label>
              <label htmlFor="week">
                <input type="checkbox" name="week" id="" />
                <h6>1 week</h6>
              </label>
              <label htmlFor="month">
                <input type="checkbox" name="month" id="" />
                <h6>1 month</h6>
              </label>
            </div>
          </label>
          <label htmlFor="receive product">
            <h5>Time Frame to receive product</h5>
            <div className={styles.checkbox}>
              <label htmlFor="less_one_month">
                <input type="checkbox" name="less_one_month" id="" />
                <h6> Less than 1 month </h6>
              </label>
              <label htmlFor="more_one_month">
                <input type="checkbox" name="more_one_month" id="" />
                <h6>More than 1 month</h6>
              </label>
              <label htmlFor="more_three_month">
                <input type="checkbox" name="more_three_month" id="" />
                <h6>More than 3 month</h6>
              </label>
              <label htmlFor="more_six_month">
                <input type="checkbox" name="more_six_month" id="" />
                <h6>More than 6 month</h6>
              </label>
            </div>
          </label>
          <label htmlFor="product_use_location">
            <h5>Where in the World will Product or Service be Used</h5>
            <div className={styles.input}>
              <label htmlFor="use_location">
                <input
                  type="text"
                  name="use_location"
                  placeholder="Write any Location"
                />
              </label>
            </div>
          </label>
          <label htmlFor="info">
            <h5>
              Additional information( Be as complete as possible with product
              names, model numbers, destination, etc.)
            </h5>
            <div className={styles.input}>
              <textarea name="info" id="" cols="30" rows="10"></textarea>
            </div>
          </label>
          <label htmlFor="upload">
            <h5>Upload documents if needed</h5>
            <div className={styles.input}>
              <label htmlFor="upload">
                <input multiple type="file" name="upload" id="" />
              </label>
            </div>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}

export default Index;
