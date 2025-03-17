import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import {
  CheckCircle
} from "react-bootstrap-icons";
import BrandsItem from "../../../../components/BrandsItem";
import dynamic from "next/dynamic";

const FaqComponents = dynamic(
  () => import("../../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);
export const metadata = {
  title: "Transactional SMS | Transactional Messaging API",
  description:
    "Integrate developer-friendly SMS API. Send transactional SMS, OTPs, and bulk messages seamlessly worldwide.Authkey makes global messaging easy! Try now!",
  alternates: {
    canonical: "https://authkey.io/bulk-sms-service-provider/transactional-sms",
  },
};

const data = {
  rows: [
    {
      title: "What is a transactional SMS service?",
      content: `
      
      A transactional SMS service is a messaging service that enables businesses and organizations to send automated, real-time SMS messages to their customers or clients for transactional purposes. These messages are typically triggered by specific events or actions, such as a user registering for a service or making a purchase.
      
          `,
    },
    {
      title:
        " How is a transactional SMS service different from a promotional SMS service?",
      content: `
     
      While both transactional and promotional SMS services involve sending messages to customers, they serve different purposes. Transactional SMS messages are typically triggered by a specific action or event, and are designed to provide important information related to a transaction, such as order confirmations, delivery updates, or appointment reminders. 
      
      Promotional SMS messages, on the other hand, are designed to promote/market a product or service, and may be sent to a wider audience.
      Transactional SMS routes are faster and are time based messages. These messages can also be delivered on both DND and non DND numbers whereas promotional SMS are not delivered on DND numbers.  
      
              `,
    },
    {
      title: "What are some common use cases for transactional SMS services?",

      content: `
      Transactional SMS services are commonly used by businesses and organizations in a variety of industries, including e-commerce, banking, healthcare, logistics, and education. Some common use cases include order confirmations, shipping notifications, appointment reminders, and OTP (One-Time Password) verification codes, Banking message, etc.`,
    },
    {
      title: "What are some benefits of using a transactional SMS service?",
      content: `
      
Using a transactional SMS service can offer several benefits to businesses and organizations, including improved customer engagement, reduced communication costs, increased operational efficiency, and compliance with local regulations and guidelines.

      `,
    },
    {
      title: "Is it possible to automate responses with WhatsApp Business API?",
      content: (
        <p>
          Yes, it is possible to automate responses with WhatsApp Business API.
          Businesses can use chatbots or automated messaging systems to provide
          quick and efficient responses to customer inquiries and support
          requests.
        </p>
      ),
    },
    {
      title: "How can I get started with a transactional SMS service?",
      content: `
      
To get started with a transactional SMS service, you can reach out to us and discuss your needs and plan. You can simply need to sign up for an account and integrate(SMS API) the service with your existing systems or applications. Authkey will offer free SMS credit  to test message sending. You can begin sending transactional SMS messages to your customers or clients.
`,
    },
  ],
};


const TransactionalSMS = () => {
  return (
    <div>
      <section className="hero homebg">
        <div className="container my-3">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1>
                <img src="/img/home/sms-icon.webp" alt='SMS' className="iconic" /> Transactional SMS API
              </h1>
              <h5>
                Send automated messages through transactional SMS API for
                instant alert, appointment, banking, and OTP messaging.
              </h5>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-3 mb-4">Sign up</button>
              </a>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/img/transactional-sms.png"
                alt="sms Transactional"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sectionthird">
        <div className="container-fluid pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <h4 className="text-center">Trusted By Brands</h4>
              <BrandsItem />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container py-5">
          <div className="container justify-content-center">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2>Automate transactional SMS at every event</h2>
                <p>
                  Transactional SMS API let you send critical OTP,
                  notifications & updates to your users worldwide.You can
                  strengthen business relationships by bringing on engaging text
                  message experiences at every event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-11 channelbox channelsms px-4 py-4">
              <h2 className="text-center">
                The Transactional SMS API allows you to send text messages
                globally.
              </h2>
              <div className="buletpoint mt-5">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-sm-6">
                    <ul className="freeplan">
                      <li><span><CheckCircle /></span>Alerts and notifications</li>
                      <li><span><CheckCircle /></span>Appointments</li>
                      <li><span><CheckCircle /></span>Billing and payments</li>
                      <li><span><CheckCircle /></span>Business communications</li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <ul className="freeplan">
                      <li><span><CheckCircle /></span>Banking SMS</li>
                      <li><span><CheckCircle /></span>Customer campaigns</li>
                      <li><span><CheckCircle /></span>Order Confirmations</li>
                      <li><span><CheckCircle /></span>Staff rostering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center">
                What do you get with a transactional SMS route?
              </h2>
              <div className="table-responsive bgWhite mt-3">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong> Number type </strong>
                      </td>
                      <td>DND and Non DND Allowed</td>
                      <td>
                        Transactional SMS are deliverable <br /> on both DND
                        and Non DND numbers.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Developer API </strong>
                      </td>
                      <td>API Document available</td>
                      <td>
                        API available in multiple programming <br /> languages
                        with document support.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Sender ID</strong>
                      </td>
                      <td>6 Alpha Character Sender</td>
                      <td>
                        Transactional SMS delivers with sender <br /> ID like
                        DOMINO, Airtel, etc.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>SMS Gateway</strong>
                      </td>
                      <td>
                        Transactional Routes are regular for <br /> 24x7. No
                        time band.
                      </td>
                      <td>
                        Transactional routes are faster as well as not timely{" "}
                        <br />
                        restricted. SMS will be delivered at every action of
                        the event.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Set up cost</strong>
                      </td>
                      <td>Pay as you Go.</td>
                      <td>
                        No hidden charges, No setup charge. No API integration{" "}
                        <br />
                        charge, Just Pay for what you send.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="">Send time based messages with Transactional SMS  API</h2>
              <p>
                Utilize our REST API to send transactional SMS. Integration is
                simple and seamless, so you can focus on delivering a top-notch
                user experience while keeping your platform secure.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-5 mb-5">
              <div className="smscornerbox">
                <h5>Business: Alert and Notification</h5>
                <p>
                  Send transactional SMS for alerts, appointment, remainder,
                  event notification, bank update, payment confirmations and
                  more through simple REST API integration.
                </p>
                <p>
                  Make your CRM capable of sending SMS messages by integrating
                  authkey’s API. Your customers can receive timely updates and
                  helpful reminders by using SMS APIs.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="smscornerbox">
                <h5>Secure Messaging: OTP and 2FA</h5>
                <p>
                  Experience lightning-fast delivery of One-Time Passwords (OTP)
                  with unparalleled security measures in place. Our API enables
                  you to send SMS OTPs to verify and prevent fraudulent logins.
                </p>
                <p>
                  Protect your web application or mobile app with our 2FA APIs
                  that can be easily configured to meet your needs. Our SMS API
                  offers two-factor authentication through both voice and text
                  messaging, providing an added layer of security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="py-6 pynone px-4 sticky-top">
                <h3>Features</h3>
                <p> What makes Authkey a trusted Transactional Bulk SMS service
                  provider? Use Transactional messaging API and its programmable
                  features to enable automated sending through integrated
                  software, CRM or application for business workflow.</p>
                <a href="https://console.authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>

            <div className="col-lg-6">

              <div className="linebox">
                <div className="circle-fill-main circle-fill-yellow">
                  <div className="circle-fill">
                  </div>
                </div>
              </div>

              <div className="crdbox px-4 mt-5 pb-4">
                <h4><img
                  src="/img/translational-sms2.png"
                  className="img-fluid"
                  alt="Illustration" width="35" height="35"
                />  Free API Integration</h4>
                <p>Integrate Transactional Messaging API into your application to automate sending messages on action of event occurrence. Developers can integrate SMS API into applications to enable SMS functionality and communication with users.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4> <img
                  src="/img/translational-sms5.png"
                  className="img-fluid"
                  alt="Illustration" width="35" height="35"
                /> Failover solution</h4>
                <p>
                  Failover solution for the time based sending like OTP and
                  2FA secure code. Fallback algorithms utilise the SMS, Voice
                  and Emails channels simultaneously. If text OTP failed,
                  automated voice delivery with TTS.
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img
                  src="/img/translational-sms3.png"
                  className="img-fluid"
                  alt="Illustration" width="35" height="35"
                /> Send-Get Reports</h4>
                <p>
                  Get instant delivery, latency and failed reports with error
                  code that makes it easy to resolve scenarios. You can also
                  get delivery reports on your application by report
                  API/webhooks.
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img
                  src="/img/translational-sms1.png"
                  className="img-fluid"
                  alt="Illustration" width="35" height="35"
                /> Desired Templates</h4>
                <p>
                  Send SMS with a business name registered sender ID.
                  Pre-approved templates available for OTP and business use
                  cases. Template design assistance with an experienced team.
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img
                  src="/img/translational-sms4.png"
                  className="img-fluid"
                  alt="Illustration" width="35" height="35"
                /> 24x7 Uptime service</h4>
                <p>
                  You can send or automate transactional SMS at any time.
                  There is no government restriction, can be sent and be
                  available to your customers 24x7.
                </p>
              </div>

              <div className="crdbox px-4 py-4 mb-4">
                <h4><img
                  src="/img/translational-sms6.png"
                  className="img-fluid"
                  alt="Illustration" width="35" height="35"
                /> DND Allowed</h4>
                <p>
                  Send messages to DND and Non DND numbers with transactional
                  SMS service. This route is most useful for OTPs and
                  important notifications, alerts, payment confirmations that
                  aren't promotional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="yellowback">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-11 smscornerbox smscornerheight text-center">
              <h3 className="text-center">
                Feature-rich Transactional SMS API for Developers
              </h3>
              <p className="mt-2">
                Automatically send bulk SMS from any website, CRM, or software.
                You can rely on our robust routing engine to ensure your
                messages are delivered at the time they are expected, regardless
                of the technical conditions. Transactional SMS API available in
                multi programming languages like PHP, Python, JAVA, C#, cURL,
                Powershell, Node.js, Go, Javascript, Ruby and Swift. Start with
                an SMS API in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5 justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-11 text-center">
              <h2>Check out Sample Codes for SMS API</h2>
              <p>
                Use sms verification api for Cash on Delivery Order Confirmation.
                The robust multichannel high volume API build to trigger OTPs &
                verifications.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <code>
                <button className="copy-clip">Copy</button>
                <pre style={{ color: "#fff" }}>
                  {`
<?php
$curl = curl_init();
curl_setopt_array($curl, array(
CURLOPT_URL => "https://api.authkey.io/request?authkey=AUTHKEY&
mobile=RecepientMobile&country_code=CountryCode
&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",

} `}
                </pre>
              </code>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <ul className="freeplan">
                  <li><span><CheckCircle /></span>
                    Multichannel transactional API can send SMS, voice and email
                    simultaneously.
                  </li>
                  <li><span><CheckCircle /></span>
                    Trusted by more than 10k developers for its functionality,
                    security and scalability.
                  </li>
                  <li><span><CheckCircle /></span>
                    No cost for API integration. It's free. Only pay for the
                    message credit you do.
                  </li>
                  <li><span><CheckCircle /></span>
                    Check your real time report analytics and webhook API,
                    delivery report(error code also if failed), contact
                    management, schedule messages, balance info and more in the
                    dashboard.
                  </li>
                  <li><span><CheckCircle /></span>
                    A right team for the right use case like API integration,
                    template approval, customer support and more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container py-5 justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-11 smscornerbox py-5 text-center">
              <h2>
                Check out Sample Codes for SMS API
              </h2>
              <p>
                Use sms verification api for Cash on Delivery Order Confirmation.
                The robust multichannel high volume API build to trigger OTPs &
                verifications.
              </p>

              <div className="api-buttons m-4">
                <a className="btn dark-blur-btn" href="/api-docs">
                  See Decumention
                </a>
                <a
                  className="btn outline-btn"
                  href="https://console.authkey.io/signup"
                >
                  Try for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="pt-5">
        <FaqComponents data={data} />
      </section>

      <WhyChooseAuthkey />
    </div>
  );
};

export default TransactionalSMS;
