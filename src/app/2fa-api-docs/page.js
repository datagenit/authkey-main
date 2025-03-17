import LeftApiMenu from "../../../components/LeftApiMenu";

export const metadata = {
  title: "2FA API document | two factor authentication developer doc",
  description:
    "2FA API documentation for developers to implement 2fa verification through otp (via SMS, Voice & Email). Send OTP and LogID verification APIs are used. Learn more about 2fa docs.",
  alternates: {
    canonical: "https://authkey.io/2fa-api-docs",
  },
};
const FaApiDocs = () => {
  return (
    <div>
      <section className="hero bg-section-secondary">
        <div className="container mt-4">
          <div className="row row-grid">
            <div className="col-md-3 text-left">
              <LeftApiMenu />
            </div>
            <div className="col-lg-9 m-0 api-doc bg-white p-3 mb-5 shadow mb-0 text-left">
              <h2 id="emailApi">Getting Started With 2FA API</h2>

              <div className="api-docs">
                <p className=" mt-2 mb-0">
                  Authkey uses reliable and robust messaging services through
                  REST API requests. Our entire suite meets enterprise quality
                  benchmarks for seamless 2FA verification implementation.
                </p>

                <h3 className="mt-4 mb-2">
                  Implemented Two factor Authentication Logic
                </h3>
                <ul>
                  <li>Rest Messaging API to deliver the secure OTP.</li>
                  <li>Received OTP & response LogID verification API.</li>
                </ul>
                <h3
                  className="mt-5 main_innerheading"
                  id="messaging_api_sending_otp"
                >
                  Rest Messaging API: Sending OTP
                </h3>

                <h3 className="mt-4 mb-0">2FA Messaging API URL:</h3>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=<span className="paivariable">CountryCode</span>
                  &sid=<span className="paivariable">1234</span>
                </code>

                <p className=" mt-2 mb-0">
                  <b>Parameters:</b>
                </p>
                <p className=" mt-2 mb-0">
                  <b>AUTHKEY:</b> account auth key.{" "}
                  <a href="https://authkey.io/faq/89/find-auth-key-in-your-account">
                    Find.
                  </a>
                </p>
                <p className=" mt-2 mb-0">
                  <b>RecepientMobile:</b> Mobile number at which otp will
                  deliver.
                </p>
                <p className=" mt-2 mb-0">
                  <b>CountryCode:</b> For india 91.
                </p>
                <p className=" mt-2 mb-0">
                  <b>SID:</b> Template message SID{" "}
                  <a href="https://authkey.io/faq/98/find-sid">Find.</a>
                </p>

                <h3 className="mt-5 mb-4">Message template for the 2fa OTP</h3>
                <p className=" mt-2 mb-0">
                  The message template must have a variable{" "}
                  <span className="preinline">
                    <b>{`{#2fa#}`}</b>
                  </span>
                </p>
                <p className=" mt-2 mb-0">
                  <b>Note:</b> A system generated OTP will be passed in a
                  variable field.
                </p>
                <p className=" mt-4 mb-0">
                  <b> Example:</b>
                </p>
                <p className=" mt-2 mb-2">
                  "Your one time otp is{" "}
                  <span className="preinline">
                    <b>{`{#2fa#} `}</b>
                  </span>
                  . Please do not share code with anyone."
                </p>
                <h3
                  className="mt-5 main_innerheading"
                  id="otp_response_logid_verification"
                >
                  Implementing Received OTP & response LogID verification
                </h3>
                <p className=" mt-0 mb-0">
                  When an above-mentioned 2fa messaging api is triggered, a
                  response logID is generated. LogID is a response corresponding
                  to a unique OTP session id.
                </p>
                <p className=" mt-4 mb-0">
                  <b>Sample response:</b>
                </p>
                <pre>
                  {`
                                        {
                                            "LogID": "28bf7375bb54540ba03a4eb873d4da44", 
                                            "Message": "Submitted Successfully"
                                        }
                                    `}
                </pre>
                <code>
                  https://console.authkey.io/restapi/2fa_verify.php?authkey=
                  <span className="paivariable">AUTHKEY</span>&channel=
                  <span className="paivariable">SMS/VOICE/EMAIL</span>&otp=
                  <span className="paivariable">
                    OTP VALUE ENTERED BY CUSTOMER
                  </span>
                  &logid=
                  <span className="paivariable">
                    LogID GENERATED ON REQUEST API
                  </span>
                </code>
                <p className=" mt-2 mb-0">
                  <b>Parameters:</b>
                </p>
                <p className=" mt-2 mb-0">
                  <b>AUTH KEY:</b> account AUTH KEY
                </p>
                <p className=" mt-2 mb-0">
                  <b>SMS/VOICE/EMAIL:</b> preferred channel
                </p>
                <p className=" mt-2 mb-0">
                  <b>OTP VALUE ENTERED BY CUSTOMER:</b> Received OTP code
                </p>
                <p className=" mt-2 mb-0">
                  <b>LogID GENERATED ON REQUEST API:</b> response logID
                </p>
                <h3 className="mt-5 mb-0">Verification API response:</h3>
                <pre>
                  {`
                                        {
                                            "status":true,
                                            "message":"Valid OTP"
                                        }
                                    `}
                </pre>
                <p className=" mt-2 mb-0">
                  If the response obtained from our API indicates "Valid OTP,"
                  you may update the user's status as verified in your database.
                  Otherwise, please prompt the user to resend OTP.
                </p>
                <h3 className="mt-5 mb-3">
                  <a href="https://authkey.io/faq/95/how-to-test-two-factor-authentication-api">
                    How to use the 2FA API?
                  </a>
                </h3>
                <p className=" mt-2 mb-5">
                  Feel free to reach us at hello@authkey.io for assistance.
                </p>
              </div>

              <div className="text-center">
                <a
                  className="btn btn-sm btn-primary"
                  href="https://console.authkey.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Getting Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaApiDocs;
