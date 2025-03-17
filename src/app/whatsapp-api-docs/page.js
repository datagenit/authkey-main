import LeftApiMenu from "../../../components/LeftApiMenu";
const hostname = "authkey.io";
export const metadata = {
  title:
    "WhatsApp API documentation | WhatsApp API integration guide | Authkey.io",
  description:
    "WhatsApp API documentation for Sending WhatsApp OTPs, Notifications or time-based messages. Sample WhatsApp API code for PHP, ruby, ASP, .NET, Java or any other language. Integrate WhatsApp API in minutes.",
    alternates: {
      canonical: "https://authkey.io/whatsapp-api-docs",
    },
};

const WhatsAppApiDocs = () => {
  return (
    <div>
      <section className="hero bg-section-secondary">
        <div className="container mt-4">
          <div className="row row-grid">
            <div className="col-md-3 text-left">
              <LeftApiMenu />
            </div>
            <div className="col-lg-9 m-0 api-doc bg-white p-3 mb-5 shadow mb-0 text-left">
              <h2 id="emailApi">WhatsApp API Documentation</h2>
              <div className="api-docs">
                <p className="mt-2 mb-0">
                  Sending WhatsApp using {hostname} APIs is a breeze and
                  lightning fast. Simply pass the message body, mobile number &{" "}
                  {hostname} in the API request to send WhatsApp Message
                  instantly.
                </p>
                <h3 className="mt-5">WhatsApp Templates:</h3>
                <p className="mt-2 mb-0">
                  You can also{" "}
                  <a href="/dashboard/whatsapp-template-list">
                    create templates
                  </a>{" "}
                  in the {hostname} portal and use the{" "}
                  <strong>template ID (wid)</strong> in the API request.
                  Templates are necessary in case of dynamic content present in
                  the message. For example, in order to send an OTP message, you
                  can create a template as below:
                </p>
                <p>
                  Dear <strong>{`{#name#}`}</strong>, your otp is{" "}
                  <strong>{`{#otp#}`}</strong> {hostname} automatically adds the
                  dynamic values of the Template as API Parameters which can be
                  used to change the content delivered to each recipient.
                </p>
                <p className="mt-2 mb-0">
                  Example usage for above template, assuming{" "}
                  <strong>WhatsApp Template id (wid)</strong> generated as 101
                  is as follows:
                </p>
                <code>
                  https://console.authkey.io/request? authkey=
                  <span className="paivariable">{hostname}</span>
                  &mobile=<span className="paivariable">RecepientMobile</span>
                  &country_code=<span className="paivariable">CountryCode</span>
                  &wid=<span className="paivariable">101</span>
                  &name=<span className="paivariable">Twinkle</span>
                  &otp=<span className="paivariable">1234</span>
                </code>
                <p>
                  Here, <strong>'name'</strong> and <strong>'otp'</strong>{" "}
                  parameters are auto-added to the API and their values shall be
                  replaced in the template body {`{...}`}
                </p>
                <h3 className="mt-5">Authkey Balance:</h3>
                <p>
                  To fetch your authkey balance just pass your{" "}
                  <strong>{`{#authkey#}`}</strong> as parameter, You can find{" "}
                  <strong>{`{#authkey#}`}</strong> into your My Account {`>`}{" "}
                  Profile.
                </p>
                <code>
                  https://console.authkey.io/restapi/getbalance.php?authkey=
                  <span className="paivariable">authkey</span>
                </code>
                <h2 className="my-5 text-muted">
                  <b>
                    GET API To Send Media Document/Image/Video Template with
                    variable
                  </b>
                </h2>
                <h3 className="mt-5">API using GET Request [Multimedia]:</h3>
                <code>
                  https://console.authkey.io/restapi/request.php? authkey=
                  <span className="paivariable">XXXXXX</span>
                  &mobile=<span className="paivariable">XXXXXXXXXX</span>
                  &country_code=<span className="paivariable">91</span>
                  &wid=<span className="paivariable">templateid</span>
                  &template_type=<span className="paivariable">media</span>
                  &headerFileName=
                  <span className="paivariable">BillDetails</span>
                  &HeaderData=
                  <span className="paivariable">https://abc.pdf</span>
                </code>
                <h3 className="mt-5">API using POST Request:</h3>
                <code>https://console.authkey.io/restapi/requestjson.php</code>
                <h5 className="mt-5 mb-4">Headers:</h5>
                <div className="mt-2 mb-0 ml-5">
                  <b>Authorization:</b> Basic{" "}
                  <pre className="preinline">{`<Your Authkey>`}</pre>
                </div>
                <div className="mt-2 mb-0 ml-5">
                  <b>Content-Type:</b> application/json
                </div>
                <h5 className="mt-5">Body:</h5>
                <pre>
                  <code>{`
                  {
                    "country_code": "XX",
                    "mobile": "XXXXXXXXXX",
                    "wid": "xxxx",
                    "type": "text",
                    "bodyValues": {"var1":"xxxx","var2":"xxxx"},
                    "headerValues": {
                      "headerFileName": "xyz",
                      "headerData":  "https://abc.pdf"
                    }
                  }
                `}</code>
                </pre>
                <h5 className="mt-5">Parameters:</h5>
                <div>
                  <pre className="preinline">{`<Your authkey>`}</pre> = Your
                  authkey portal authkey
                </div>
                <p>country_code = xx</p>
                <p>mobile = Mobile Number</p>
                <p>wid = WhatsApp Template ID</p>
                <p>type = text/media</p>
                <p>bodyValues = pass the variables as "var1":"value"</p>
                <p>headerFileName = Header Name</p>
                <p>headerData = file full url</p>
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
export default WhatsAppApiDocs;
