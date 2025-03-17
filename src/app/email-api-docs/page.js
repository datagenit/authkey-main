import LeftApiMenu from "../../../components/LeftApiMenu";

export const metadata = {
  title: "Best Email API Solution Built for Developers, Email Validation Services | AuthKey.io",
  description: "Authkey Email API solutions Built for Developers. Emails gives you an easy way to automate your sending based on user actions in your app or web.",
  alternates: {
    canonical: "https://authkey.io/email-api-docs",
  },
};

const EmailApiDocs = () => {
  return (
    <div>
      <section className="hero bg-section-secondary">
        <div className="container mt-4">
          <div className="row row-grid">
            <div className="col-md-3 text-left">
              <LeftApiMenu />
            </div>
            <div className="col-lg-9 m-0 api-doc bg-white p-3 mb-5 shadow mb-0 text-left">
              <h2 id="emailApi">Email API</h2>

              <div className="api-docs">
                <p className=" mt-2 mb-0">
                  Send Email using Authkey APIs and be assured to reach the
                  inbox of your recepient everytime.
                </p>

                <a
                  className="mt-2 d-block"
                  href="/sample-code-for-sending-email-in-php"
                >
                  Sample Code For Sending Email
                </a>

                <h2 className="my-4 text-muted"> Email Templates: </h2>
                <p className=" mt-2 mb-0">
                  You can create email templates in the authkey portal and use
                  the template id in the API request. Templates can hold dynamic
                  values in the email body and email subject. For example, to
                  send an OTP message, you can create a template as below:
                </p>
                <p>
                  {" "}
                  Dear <strong> {`{#name#}`} </strong>, your otp is{" "}
                  <strong> {`{#otp#}`} </strong> Authkey automatically adds your
                  template dynamic values as API parameters and you can use them
                  to change the content delivered to each recepient.
                </p>

                <p className=" mt-2 mb-0">
                  Example usage for above template, assuming template id
                  generated is 1001
                </p>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&email=
                  <span className="paivariable">RecepientEmail</span>&mid=
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
                  You can also create SMS and Voice templates and use them in
                  the above API for parallel or fallback usages.{" "}
                </p>

                <h2 className="my-4 text-muted"> Events: </h2>

                <p className=" mt-2 mb-0">
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
                  <span className="paivariable">AUTHKEY</span>&email=
                  <span className="paivariable">RecepientEmail</span>&msisdn=
                  <span className="paivariable">RecepientMobile</span>
                  &country_code=<span className="paivariable">CountryCode</span>
                  &eid=<span className="paivariable">EventId</span>
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

                <h2 className="my-4 text-muted">
                  {" "}
                  For example if you have 3 templates, one each for sms, voice
                  and email as below:{" "}
                </h2>

                <p className=" mt-2 mb-0">
                  SMS: Dear <strong>{`{#name#}`}</strong> , your otp is{" "}
                  <strong>{`{#otp#}`}</strong>
                </p>
                <p className=" mt-2 mb-0">
                  Voice: Thank you for showing interest, your otp is{" "}
                  <strong> {`{#otp#}`}</strong>
                </p>

                <h2 className="my-4 text-muted">
                  {" "}
                  <strong>Email</strong>:
                </h2>
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

                <p className=" mt-2 mb-0">
                  If we create an event using above three templates, the dynamic
                  values shall be: name, otp & company Corresponding API request
                  shall be:{" "}
                </p>
                <code>
                  https://api.authkey.io/request?authkey=
                  <span className="paivariable">AUTHKEY</span>&mobile=
                  <span className="paivariable">RecepientMobile</span>&email=
                  <span className="paivariable">RecepientEmail</span>
                  &country_code=<span className="paivariable">CountryCode</span>
                  &eid=<span className="paivariable">EventId</span>&name=
                  <span className="paivariable">Ashish</span>&otp=
                  <span className="paivariable">1234</span>&company=
                  <span className="paivariable">Datagen</span>
                </code>
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

export default EmailApiDocs;
