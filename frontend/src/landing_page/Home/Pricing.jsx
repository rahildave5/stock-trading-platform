import React from "react";
import pricing from "../../../../images/pricing-eq.svg";
import pricing1 from "../../../../images/pricingEquity.svg";
import pricing2 from "../../../../images/pricing20.svg";

function Pricing() {
  return (
    <section
      className="pricing"
      style={{ paddingBottom: "120px", paddingTop: "100px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="mb-3" style={{ color: "#000" }}>
              Unbeatable pricing
            </h2>
            <p className="mb-4">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a className="fs-6" href="/">
              See pricing{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
          </div>

          <div className="col-7 mt-4">
            <div className="pricing-box">
              <img src={pricing} alt="pricing" style={{ height: "100px" }} />
              <p style={{ marginLeft: "-25px" }}>Free account opening</p>
            </div>
            <div className="pricing-box">
              <img src={pricing1} alt="pricing" style={{ height: "100px" }} />
              <p style={{ marginLeft: "-35px", width: "133.87px" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="pricing-box">
              <img src={pricing2} alt="pricing" style={{ height: "100px" }} />
              <p style={{ marginLeft: "-15px", width: "58.92px" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
