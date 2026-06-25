import React from "react";
import console from "../../../../images/console.png";
import googlePlay from "../../../../images/googlePlayBadge.svg";
import appStore from "../../../../images/appstoreBadge.svg";

function Console() {
  return (
    <section className="console">
      <div className="container">
        <div className="row" style={{ marginLeft: "79.333px" }}>
          <div
            className="col-4"
            style={{ margin: "0 10px 0 10px", padding: "130px 0 0 0" }}
          >
            <h3 style={{ padding: "20px 0" }}>Console</h3>
            <p style={{ fontWeight: "400" }}>
              The central dashboard for your Zerodha account. Gain insights into
              your trades and with in-depth reports and visualisations.
            </p>
            <div className="links" style={{ paddingTop: "17px" }}>
              <a className="fs-6" href="/demo" style={{ color: "#387ED1" }}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-7 text-center"
            style={{ margin: "0 20px 0 30px" }}
          >
            <img
              style={{ width: "90%", marginTop: "-40px" }}
              src={console}
              alt="Console"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Console;
