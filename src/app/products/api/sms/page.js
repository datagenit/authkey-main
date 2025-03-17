import WhyChooseAuthkey from "../../../../../components/WhyChooseAuthkey";
import SampleCode from "../../../../../components/SmsSampleCode";

export const metadata = {
  title: "SMS API for Text Messaging | Authkey.io",
  description:
    "SMS API to automate text messaging. Start sending SMS through your application by a simple API integration. Use our SMS API Documentation. Get Started Now",
  alternates: {
    canonical: "https://authkey.io/products/api/sms",
  },
};
const ProductApiSms = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1>
                SMS <span> API Build </span>
                Scalable Messaging Solutions
              </h1>
              <p>
                SMS Gateway API. The Messaging API code empowers you to
                effortlessly incorporate robust messaging features into
                enterprise applications.
              </p>
              <a
                href="https://console.authkey.io/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn mt-4">Sign up</button>
              </a>
            </div>
            <div className="col-md-6 my-4">
              <img
                alt="Send messaging"
                src="/img/smspage/sms-api-build.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="">
                Trusted By{" "}
                <span style={{ background: "#fdc236", padding: 4 + "px" }}>
                  10000+
                </span>{" "}
                Developers
              </h2>
              <div className="mt-2">
                <p className="lead lh-180">
                  Integrate a Developer-Friendly free SMS API in minutes of
                  time!
                </p>
              </div>
              <div className="border_bar"></div>
              <p className="text-muted mt-2">
                Send SMS API is designed to be effortlessly accessible for
                developers. Supporting all major programming languages,
                including{" "}
                <a href="/sample-code-for-sending-sms-in-php">
                  PHP, .NET, C#, Java, Python, and Ruby
                </a>
                , getting started with text message api is as simple as opening
                a webpage at a URL. Experience seamless integration and start
                sending text messages with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="slice slice-lg pt-lg-3 pb-lg-4 pb-0 ">
        <div className="container">
          <div className="row mb-5 mt-4 justify-content-center text-center">
            <div className="col-lg-12">
              <h2 className="">
                {" "}
                Seamless Scaling: Global Solutions through SMS API integration
              </h2>
              <div className="border_bar"></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <img
                className="img-fluid"
                alt="Seamless Scaling"
                src="/img/smspage/seamless-scale.png"
              />
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="pb-3">
                  <h4 className="">
                    Seamlessly Send Transactional SMS, Voice, Email, and
                    WhatsApp Messages with One API.
                  </h4>
                  <ul className="mt-4 mb-4">
                    <li>
                      Expand business reach across 200+ countries with
                      confidence, thanks to localized senders, compliance tools,
                      and adherence to global guidelines. Send one or millions
                      of messages.
                    </li>
                    <li>
                      Effortlessly manage compliance, deliverability, replies,
                      and more through Authkey's programmable software.
                    </li>
                    <li>
                      Stay informed with real-time analytics to monitor message
                      delivery and engagement, allowing you to troubleshoot
                      effectively.
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    Experience the business SMS API solution, all in one place.{" "}
                    <strong>
                      <a
                        href="https://console.authkey.io/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get started
                      </a>
                    </strong>{" "}
                    with the Programmable Messaging API today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slice slice-lg pt-lg-6 pb-lg-6 pb-0">
        <div className="container ">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className=""> Integration Ways to Send SMS API</h2>
              <div className="border_bar"></div>
              <p className="mt-4">
                Integrate our comprehensive{" "}
                <strong>
                  SMS API options, including SMS SMPP, multichannel API, and
                  one-time password or two factor authentication (2FA)
                </strong>{" "}
                solutions. Authkey’s API easily composes any business
                applications or software, empowering you with robust text
                messaging capabilities.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-8">
              <div className="buletpoint">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <a href="/sms-api-service">
                      <button className="button-link btn-block">
                        SMS API Integration
                      </button>
                    </a>
                  </div>
                  <div className="col-md-4 mb-3">
                    <button className="button-link btn-block">
                      SMPP Connectivity
                    </button>
                  </div>
                  <div className="col-md-4 mb-3">
                    <a href="/sms-otp">
                      <button className="button-link btn-block">
                        One time password & 2FA
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-secondary">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="">Few Lines of API Code</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 mb-5">
              <div>
                <SampleCode />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ background: "#f9fafa" }}
        className="slice slice-lg pt-lg-5 pb-lg-5 pb-0 "
      >
        <div className="container integrate-fullbox">
          <div className="row mb-3 mt-3 justify-content-center text-center">
            <div className="col-lg-10">
              <h2 className=""> Need Help! Quick integrate with SMS API</h2>
              <div className="border_bar"></div>
              <div className="mt-2"></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="">
                <div className="pb-3 justify-content-center text-center">
                  <p className="text-muted mb-0">
                    Use the above provided code snippet to effortlessly
                    incorporate our SMS API into your existing software, CRM
                    application, or website, using the programming language you
                    are already familiar with.
                  </p>{" "}
                  <a href="/sms-api-docs">
                    <button className="btn dark-blur-btn mt-4">
                      Read SMS Docs
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slice slice-lg pt-lg-5 pb-lg-4 pb-0 ">
        <div className="container ">
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className=""> Why Authkey.io?</h2>
              <div className="border_bar"></div>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-12">
              <div className="buletpoint">
                <div className="row">
                  <div className="col-md-3">
                    <strong>Achieve Global Reach</strong>
                    <p>
                      Board our intelligent routing gateway to deliver SMS
                      messages to hundreds, thousands, or even millions of
                      customers worldwide.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <strong>Quick Start APIs</strong>
                    <p>
                      Developer guides, pre-built integrations, and SDKs, you
                      can move from concept to execution in a matter of minutes.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <strong>Real-Time Insights</strong>
                    <p>
                      SMS messages with API, network-level deliverability
                      metrics, providing you with valuable and up-to-date
                      information.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <strong>Globally Compliant</strong>
                    <p>
                      Ensure Data Privacy and Compliance: We prioritize
                      protecting customer data privacy, such as GDPR, HIPAA,
                      10DLC, and CCPA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row mb-5 mt-2 mb-5 justify-content-center text-center">
            <div
              className="col-lg-7"
              style={{
                background: "rgb(249, 250, 250)",
                border: "1px dashed #eaecf3",
                borderRadius: ".7em",
                padding: 20 + "px",
              }}
            >
              <h2 className="mb-4">
                {" "}
                Ready to Send{" "}
                <span style={{ background: "#fdc236", padding: 4 + "px" }}>
                  SMS
                </span>
              </h2>
              <a
                href="https://console.authkey.io/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-content-center"
              >
                <button className="btn outline-btn mb-2">Talk To Expert</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />
    </div>
  );
};

export default ProductApiSms;
