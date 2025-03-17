import SmsApiSendSms from "../../../components/SmsApiSendSms";
import SmsApiSendSmsSms from "../../../components/SmsApiSendSmsSms";
import LeftApiMenu from "../../../components/LeftApiMenu";
export const metadata = {
  title: "SMS API documentation | SMS API integration guide | Authkey.io",
  description:
    "SMS API documentation for Sending SMS OTPs, Notifications or time-based messages. Sample SMS API code for PHP, ruby, ASP, .NET, Java or any other language. Integrate SMS API in minutes.",
  alternates: {
    canonical: "https://authkey.io/sms-api-docs",
  },
};
const SmsApiDocs = () => {
  return (
    <div>
      <section className="hero bg-section-secondary">
        <div className="container mt-4">
          <div className="row row-grid">
            <div className="col-md-3 text-left">
              <LeftApiMenu />
            </div>
            <div className="col-lg-9 m-0 api-doc bg-white p-3 mb-5 shadow mb-0 text-left">
              <h3 id="emailApi">SMS API Documentation</h3>

              <div className="api-docs">
                <h4 className="main_innerheading mt-4">Base URL</h4>
                <p>
                  Authkey.io's GET APIs are exclusively served over HTTPS. This
                  ensures that all data transmitted between your application and
                  Authkey.io's servers is encrypted and protected.
                </p>
                <a
                  className="mt-2 d-block"
                  href="/sample-code-for-sending-sms-in-php"
                >
                  Sample API Codes
                </a>
                <a className="mt-2 d-block" href="/sms-api-docs">
                  SMS API Documentation
                </a>
                <h4 className="my-4" id="sms_api_baseurl">
                  Base SMS API URL:
                </h4>
                <p>
                  Sending SMS using Authkey APIs is a breeze and lightning fast.
                  You can simply pass the message body, message sender, mobile
                  number & authkey in the API request to send sms instantly.
                </p>
                <h4 className="mt-5">For Sending SMS in India </h4>
                <p className=" mt-2 mb-0">
                  *For Users in India, <strong>due to DLT rules</strong>, you
                  can setup your Principle <strong>Entity id </strong> &{" "}
                  <strong> DLT Template id </strong> in the authkey portal by
                  uploading DLT template CSV file or entering the DLT details
                  one-by-one in the DLT Setup menu. Alternately, you can skip
                  the DLT Setup and directly pass the entity & template ids in
                  the API request itself:
                </p>

                <h4 className="mt-5">SMS API with message template</h4>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&sms=
                  <span className="paivariable">Hello, your OTP is 1234</span>
                  &sender=
                  <span className="paivariable">SENDERID</span>&pe_id=
                  <span className="paivariable">ENTITY_ID</span>&template_id=
                  <span className="paivariable">DLT_TEMPLATE_ID</span>
                </code>

                <p className=" mt-2 text-danger mb-0">
                  *Note : If message content is Unicode kindly add parameter{" "}
                  <span
                    style={{
                      background: "#3f3966",
                      padding: "2px 10px",
                      fontSize: "12px",
                    }}
                    className="paivariable"
                  >
                    &is_unicode=1
                  </span>
                </p>

                <h4 className="mt-5">SMS Templates: </h4>

                <p className=" mt-2 mb-0">
                  You can also{" "}
                  <a href="/dashboard/sms-template-list">create templates</a> in
                  the authkey portal and use the <strong>template id </strong>in
                  the API request. Templates are necessary when you need dynamic
                  contents in your message text. For example, to send an OTP
                  message, you can create a template as below:
                </p>
                <p>
                  Dear <strong> {`{#name#}`} </strong>, your otp is{" "}
                  <strong> {`{#otp#}`} </strong> Authkey automatically adds your
                  template dynamic values as API parameters and you can use them
                  to change the content delivered to each recepient.
                </p>

                <p className=" mt-2 mb-0">
                  Example usage for above template, assuming template id
                  generated is 1001
                </p>

                <h4 className="mt-5">SMS API with SID</h4>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&sid=
                  <span className="paivariable">1001</span>&name=
                  <span className="paivariable">Twinkle</span>&otp=
                  <span className="paivariable">1234</span>
                </code>
                <p>
                  {" "}
                  Here, <strong> 'name' </strong> and <strong>'otp'</strong>{" "}
                  parameters are auto-added to the API and their values shall be
                  replaced in the template body {`{...}`}
                </p>

                <p className=" mt-2 mb-0">
                  You can also create Voice and Email templates and use them in
                  the above API for parallel or fallback usages.{" "}
                </p>

                <h4 className="mt-5">Parallel Usage: </h4>

                <p className="mb-0">
                  If you wish to send both <strong> voice call</strong> and{" "}
                  <strong>sms message </strong> to the recepientmobile, you can
                  do that using below API:
                </p>

                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&sms=
                  <span className="paivariable">Hello, your OTP is 1234</span>
                  &sender=
                  <span className="paivariable">SENDERID</span>&voice=
                  <span className="paivariable">Hello, your otp is 1234</span>
                </code>

                <p className="mt-2 text-danger mb-0">
                  *Note : If message content is Unicode kindly add parameter{" "}
                  <span
                    style={{
                      background: "#3f3966",
                      padding: "2px 10px",
                      fontSize: "12px",
                    }}
                    className="paivariable"
                  >
                    &is_unicode=1
                  </span>
                </p>

                <h4 className="mt-5">Use Fallback: </h4>
                <p className=" mb-0">
                  If you wish to trigger fallback only if sms delivery fails,
                  you can do that by using below API:
                </p>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&sms=
                  <span className="paivariable">Hello, your OTP is 1234</span>
                  &sender=
                  <span className="paivariable">SENDERID</span>&fb1voice=
                  <span className="paivariable">Hello, your otp is 1234</span>
                </code>

                <p className=" mt-2 text-danger mb-0">
                  *Note : If message content is Unicode kindly add parameter{" "}
                  <span
                    style={{
                      background: "#3f3966",
                      padding: "2px 10px",
                      fontSize: "12px",
                    }}
                    className="paivariable"
                  >
                    &is_unicode=1
                  </span>
                </p>

                <h4 className="mt-5">
                  Send SMS in Other Country (International):{" "}
                </h4>

                <h4 className="my-4 text-muted">
                  <b>Example Usage:</b>
                </h4>

                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&sms=
                  <span className="paivariable">Hello, your OTP is 1234</span>
                  &sender=
                  <span className="paivariable">SENDERID</span>
                </code>

                <h5 className="my-4 text-muted">
                  <b>Events:</b>
                </h5>

                <p className=" mt-2 mb-3">
                  {" "}
                  Events are combinations of templates which you can create on
                  the Authkey portal. Event definitions will include parallel
                  sendings, fallback channels and setting up of requiredness of
                  dynamic parameters in the chosen templates. Once created, you
                  will have an event-id, which can be used to trigger the event
                  using below API:
                </p>

                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&eid=
                  <span className="paivariable">EventId</span>
                </code>

                <p className=" mt-2 mb-0">
                  Event APIs are generally shorter than all other APIs and can
                  include parallel as well as fallback mechanisms on all the
                  three channels.
                </p>

                <p className=" mt-2 mb-0">
                  All the dynamic content of the templates in an event shall be
                  added automatically as API parameters and can be used to
                  replace the dynamic values.
                </p>

                <p className=" mt-2 text-danger mb-0">
                  *Multiple templates with same dynamic values will be
                  considered a single value.
                </p>
                <p className=" mt-2 mb-0">
                  While creating an event, you will get an option to choose
                  which dynamic values are mandatory in the API request.
                </p>

                <h5 className="my-4 text-muted">
                  {" "}
                  For example if you have 3 templates, one each for sms, voice
                  and email as below:{" "}
                </h5>

                <p className=" mt-2 mb-0">
                  <strong>SMS:</strong> Dear <strong>{`{#name#}`}</strong> ,
                  your otp is <strong>{`{#otp#}`}</strong>
                </p>
                <p className=" mt-2 mb-0">
                  <strong>Voice:</strong> Thank you for showing interest, your
                  otp is <strong> {`{#otp#}`}</strong>
                </p>

                <h4 className="my-4 text-muted">
                  {" "}
                  <strong>Email</strong>:
                </h4>
                <ul>
                  <li>
                    <strong>Subject</strong>: OTP from{" "}
                    <strong>{`{#company#}`}</strong>
                  </li>
                  <li>
                    <strong>Body</strong>: Dear <strong>{`{#name#}`}</strong>,
                    Thanks for choosing us. Your OTP is{" "}
                    <strong>{`{#otp#}`}</strong>.
                  </li>
                </ul>

                <p className=" mt-2 mb-2">
                  If we create an event using above three templates, the dynamic
                  values shall be: name, otp & company Corresponding API request
                  shall be:{" "}
                </p>

                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>&email=
                  <span className="paivariable">RecepientEmail</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&eid=
                  <span className="paivariable">EventId</span>&name=
                  <span className="paivariable">Ashish</span>&otp=
                  <span className="paivariable">1234</span>&company=
                  <span className="paivariable">Datagen</span>
                </code>

                <h4 id="get_sms_api" className="mt-5 main_innerheading">
                  GET SMS API
                </h4>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=
                  <span className="paivariable">CountryCode</span>&sms=
                  <span className="paivariable">Hello, your OTP is 1234</span>
                  &sender=
                  <span className="paivariable">SENDERID</span>&pe_id=
                  <span className="paivariable">ENTITY_ID</span>&template_id=
                  <span className="paivariable">DLT_TEMPLATE_ID</span>
                </code>
                <h4 className="mt-5">Query Params</h4>
                <table className="table table_api">
                  <tbody>
                    <tr>
                      <td>authkey</td>
                      <td>AUTHKEY</td>
                    </tr>
                    <tr>
                      <td>mobile</td>
                      <td>RecepientMobile</td>
                    </tr>
                    <tr>
                      <td>country_code</td>
                      <td>CountryCode</td>
                    </tr>
                    <tr>
                      <td>sms</td>
                      <td>Hello, your OTP is 1234</td>
                    </tr>
                    <tr>
                      <td>sender</td>
                      <td>SENDERID</td>
                    </tr>
                    <tr>
                      <td>pe_id</td>
                      <td>ENTITY_ID</td>
                    </tr>
                    <tr>
                      <td>template_id</td>
                      <td>DLT_TEMPLATE_ID</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="mt-5">Sample Code</h4>
                <SmsApiSendSms />

                <h3 id="post_sms_api" className="mt-2 main_innerheading">
                  POST SMS API
                </h3>
                <h3 id="post_sendsms_sid" className="mt-5 main_innerheading">
                  POST sendSMS-SID
                </h3>
                <code>https://console.authkey.io/restapi/requestjson.php</code>
                <p>send sms using sms template id created on authkey</p>
                <h3 className="mt-5">Request Headers</h3>
                <table className="table table_api">
                  <tbody>
                    <tr>
                      <td>Content-Type</td>
                      <td>application/json</td>
                    </tr>
                    <tr>
                      <td>Authorization</td>
                      <td>
                        Basic {` <Api_Key>`}
                        <br />= Your authkey portal authkey
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="mt-5">
                  Body <span className="graytext"> raw</span>
                </h3>
                <pre>
                  {`{
    "country_code": "91",
    "mobile": "xxxxx",
    "sid": "**"
}`}
                </pre>
                <h3 className="mt-5">Sample Code</h3>
                <SmsApiSendSms />

                <h3 id="post_sendsms_sms" className="mt-2 main_innerheading">
                  POST sendSMS-SMS
                </h3>
                <code>https://console.authkey.io/restapi/requestjson.php</code>
                <p>
                  send sms using full content that you want to send . content
                  should be approved on dlt platform
                </p>

                <h3 className="mt-5">Request Headers</h3>
                <table className="table table_api">
                  <tbody>
                    <tr>
                      <td>Content-Type</td>
                      <td>application/json</td>
                    </tr>
                    <tr>
                      <td>Authorization</td>
                      <td>
                        Basic {` <Api_Key>`}
                        <br /> = Your authkey portal authkey
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="mt-5">
                  Body <span className="graytext"> raw</span>
                </h3>
                <pre>
                  {`{
    "country_code": "91",
    "mobile": "xxxxx",
    "sid": "**"
 }`}
                </pre>
                <h3 className="mt-5">Sample Code</h3>
                <SmsApiSendSmsSms />
                <br />
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

export default SmsApiDocs;
