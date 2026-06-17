import React from "react";
import kiteconnect from "../../../../images/kiteconnect.png";
import googlePlay from "../../../../images/googlePlayBadge.svg";
import appStore from "../../../../images/appstoreBadge.svg";

function Connect() {
  return (
    <section className="connect">
      <div className="container">
        <div className="row" style={{ margin: "180px 0 0 79.333px" }}>
          <div
            className="col-4"
            style={{ margin: "0 10px 0 10px", padding: "40px 0 0 0" }}
          >
            <h3 style={{ padding: "20px 0" }}>Kite Connect API</h3>
            <p style={{ fontWeight: "400" }}>
              Build powerful trading platforms and experiences with our super
              simple HTTP/JSON APIs. If you are a startup, build your investment
              app and showcase it to our clientbase.
            </p>
            <div className="links" style={{ paddingTop: "17px" }}>
              <a className="fs-6" href="/demo" style={{ color: "#387ED1" }}>
                Kite Connect<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-7 text-center"
            style={{ margin: "0 20px 0 61px" }}
          >
            <img
              style={{ width: "90%", marginTop: "-40px" }}
              src={kiteconnect}
              alt="Connect"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;

