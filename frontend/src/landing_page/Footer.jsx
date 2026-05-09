import React from "react";
import navLogo from "../../../images/logo.svg";

const footerLinkStyle = {
  display: "block",
  marginBottom: "14px",
};

function Footer() {
  return (
    <section className="footer" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container border-top" style={{ padding: "50px 0" }}>
        <div className="row" style={{ padding: " 0 75px" }}>
          <div className="col">
            <img
              src={navLogo}
              alt="Logo"
              style={{ width: "300px", paddingBottom: "1.8rem" }}
            />
            <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
            <p> All rights reserved.</p>
          </div>
          <div className="col" style={{ marginLeft: "20px" }}>
            <p className="fs-5">Account</p>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Open demat account
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Minor demat account
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              NRI demat account
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              HUF demat account
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Commodity
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Dematerialisation
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Fund Transfer
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              MTF
            </a>
          </div>
          <div className="col ">
            <p className="fs-5">Support</p>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Contact us
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              How to file a complaint?
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Status of your complaints
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Bulletin
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Circular
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Support portal
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Z-Connect blog
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Downloads
            </a>
          </div>
          <div className="col">
            <p className="fs-5">Company</p>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              About
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Philosophy
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Press & media
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Careers
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Zerodha Cares (CSR)
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Zerodha.tech
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Open source
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Referral program
            </a>
          </div>
          <div className="col">
            <p className="fs-5">Quick Links</p>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Upcoming IPOs
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Brokerage charges
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Market holidays
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Economic calendar
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Calculators
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Markets
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Sectors
            </a>
            <a href="#" className="footer-link" style={footerLinkStyle}>
              Gift Nifty
            </a>
          </div>

          <div className="zero-info mt-5" style={{ fontSize: "10.4px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>
              , for DP related to{" "}
              <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure
              you carefully read the Risk Disclosure Document as prescribed by
              SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on{" "}
              <a
                href="https://www.sebi.gov.in/sebiweb/otherwidgets/RegistrationPortal.jsp"
                target="_blank"
                rel="noopener noreferrer"
              >
                SEBI SCORES
              </a>
              : Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances
            </p>

            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Smart Online Dispute Resolution
              </a>{" "}
              | <a href="#">Grievances Redressal Mechanism</a>
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE.{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                NSE broker factsheet
              </a>
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                create a ticket here
              </a>
              .
            </p>

            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>

            <p>
              Fixed deposit products offered on this platform are third-party
              products (TPP) and are not Exchange traded products. These are
              offered through Blostem Fintech Private Limited. Zerodha Broking
              Limited (SEBI Registration No.: INZ000031633) is acting solely as
              a distributor for these products. Any disputes arising with
              respect to such distribution activity will not have access to SEBI
              SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
              Arbitration mechanism. Fixed deposits are regulated by the Reserve
              Bank of India (RBI).
            </p>

            <div
              className="homeEnd"
              style={{
                marginTop: "20px",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                NSE
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                BSE
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                MCX
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Policies & procedures
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Disclosure
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                For inverstor's attention
              </a>{" "}
              <a
                href="#"
                style={{ marginRight: "20px", fontSize: "12px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Investor charter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
