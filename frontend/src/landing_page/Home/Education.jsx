import React from "react";
import education from "../../../../images/education.svg";

function Education() {
  return (
    <section className="education" style={{ paddingBottom: "120px" }}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={education} alt="Education" style={{ width: "74%" }} />
          </div>

          <div className="col-6">
            <div className="edu-head">
              <h2 className="mb-4">Free and open market education</h2>
              <div className="edu-text">
                <p className="mb-3" style={{ marginTop: "16px" }}>
                  Varsity, the largest online stock market education book in the
                  world covering everything from the basics to advanced trading.
                </p>
                <a className="fs-6" href="/">
                  Varsity{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ fontSize: "14px" }}
                  ></i>
                </a>

                <p className="mb-3" style={{ marginTop: "30px" }}>
                  TradingQ&A, the most active trading and investment community
                  in India for all your market related queries.
                </p>
                <a className="fs-6" href="/">
                  TradingQ&A{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ fontSize: "14px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
