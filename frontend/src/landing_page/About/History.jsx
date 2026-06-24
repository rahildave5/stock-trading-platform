import React from "react";

function History() {
  return (
    <section
      className="History"
      style={{ padding: "95px 0 0 0", margin: "0 290px", color: "#424242" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-6 align-self-center">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a
                style={{
                  color: "#387ed1",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                href="https://www.rainmatter.com/"
              >
                Rainmatter
              </a>{" "}
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a
                style={{
                  color: "#387ed1",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                href="https://www.zerodha.com/blog/"
              >
                blog
              </a>{" "}
              or see what the media is{" "}
              <a
                style={{
                  color: "#387ed1",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a
                style={{
                  color: "#387ed1",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                href="https://www.zerodha.com/philosophy/"
              >
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
