import React from "react";
import ceo from "../../../../images/nithinKamath.jpg";
import cfo from "../../../../images/Nikhil.jpg";
import cto from "../../../../images/Kailash.jpg";
import coo from "../../../../images/Venu.jpg";
import director from "../../../../images/Seema.jpg";
import coe from "../../../../images/Karthik.jpg";
import director_strategy from "../../../../images/Austin.jpg";

function Team() {
  return (
    <section
      className="Team"
      style={{ padding: "90px 0", margin: "0 150px", color: "#424242" }}
    >
      <div className="flex-container">
        <div className="mini-container" style={{ margin: "0 100px" }}>
          <div className="row text-center" style={{ margin: "40px 0 100px 0" }}>
            <h1 className="fs-4 text-center" style={{ marginBottom: "20px" }}>
              People
            </h1>

            <div
              className="col-5 text-center"
              style={{ padding: "40px 10px", marginRight: "" }}
            >
              <img
                src={ceo}
                alt="CEO"
                style={{
                  width: "82%",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
              <h5>Nithin Kamanth</h5>
              <p style={{ margin: "15px 0" }}>Founder, CEO</p>
            </div>
            <div
              className=" col-7 "
              style={{ fontSize: "18px", padding: "40px 0" }}
            >
              <p style={{ margin: "0 0 16px 0" }}>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p style={{ margin: "16px 0 16px 0" }}>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p style={{ margin: "16px 0 16px 0" }}>
                Playing basketball is his zen.
              </p>
              <p style={{ margin: "16px 0 16px 0" }}>
                Connect on{" "}
                <a
                  href="https://www.zerodha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#387ed1",
                    fontSize: "17px",
                  }}
                >
                  Homepage
                </a>{" "}
                /{" "}
                <a
                  href="https://www.linkedin.com/in/nithinkamath"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#387ed1",
                    fontSize: "17px",
                  }}
                >
                  LinkedIn
                </a>{" "}
                /{" "}
                <a
                  href="https://x.com/Nithin0dha"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#387ed1",
                    fontSize: "17px",
                  }}
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4 text-center">
            <img
              src={cfo}
              alt="CFO"
              style={{
                width: "67%",
                borderRadius: "50%",
                padding: "20px 0",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <h5>Nikhil Kamanth</h5>
            <p style={{ margin: "15px 0" }}>Co-Founder, CFO</p>
          </div>
          <div className="col-4 text-center">
            <img
              src={cto}
              alt="CTO"
              style={{
                width: "67%",
                borderRadius: "50%",
                padding: "20px 0",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <h5>Dr. Kailash Nadh</h5>
            <p style={{ margin: "15px 0" }}>CTO</p>
          </div>
          <div className="col-4 text-center">
            <img
              src={coo}
              alt="C0O"
              style={{
                width: "67%",
                borderRadius: "50%",
                padding: "20px 0",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <h5>Venu Madhav</h5>
            <p style={{ margin: "15px 0" }}>COO</p>
          </div>
          <div className="col-4 text-center">
            <img
              src={director}
              alt="Director"
              style={{
                width: "67%",
                borderRadius: "50%",
                padding: "20px 0",
                display: "block",
                margin: "20px auto 20px auto",
              }}
            />
            <h5>Seema Patil</h5>
            <p style={{ margin: "15px 0" }}>Director</p>
          </div>
          <div className="col-4 text-center">
            <img
              src={coe}
              alt="Chief of Education"
              style={{
                width: "67%",
                borderRadius: "50%",
                padding: "20px 0",
                display: "block",
                margin: "20px auto 20px auto",
              }}
            />
            <h5>Kartik Rangappa</h5>
            <p style={{ margin: "15px 0" }}>Chief of Education</p>
          </div>
          <div className="col-4 text-center">
            <img
              src={director_strategy}
              alt="Director Strategy"
              style={{
                width: "67%",
                borderRadius: "50%",
                padding: "20px 0",
                display: "block",
                margin: "20px auto 20px auto",
              }}
            />
            <h5>Austin Prakash</h5>
            <p style={{ margin: "15px 0" }}>Director Strategy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
