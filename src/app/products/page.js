import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";

export const metadata = {
  title: "Seamless communication at your fingertips | Authkey.io ",
  description:
    "Authkey.io’s complete range of products across messaging, voice & email & verification. Learn more!",
  alternates: {
    canonical: "https://authkey.io/products",
  },
};
const Products = () => {
  return (
    <div>
      <div className="hero homebg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1>Every day, seamless communication at your fingertips</h1>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-4">Sign up</button>
              </a>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src="img/products/product-banner.png"
                className="img-fluid"
                alt="Customer Engagement"
              />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="justify-content-center mt-5">
            <div className="mb-5 mt-5 justify-content-center text-center">
              <div className="col-lg-12">
                <h2 className="">
                  Reach your customers with effective campaigns
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="d-flex align-items-center channelbox channelsms mb-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>
                        Messaging campaigns{" "}
                        <img
                          src="/img/home/sms-icon.png"
                          alt="SMS"
                          className="iconic"
                        />
                      </h3>
                      <p>
                        {" "}
                        Personalized SMS campaigns that are well-received by
                        customers. Our exceptional messaging service empowers
                        businesses to engage with their clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
                <div className="d-flex align-items-center channelbox channelvoice mb-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>
                        Voice Broadcast{" "}
                        <img
                          src="/img/home/voice-icon.png"
                          alt="Voice"
                          className="iconic"
                        />
                      </h3>
                      <p>
                        {" "}
                        Send instant voice call campaigns to a list of phone
                        numbers with ease, receiving a comprehensive report that
                        shows the outcome of each call as soon as it's sent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
                <div className="d-flex align-items-center channelbox channelemail mb-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>
                        Email Marketing{" "}
                        <img
                          src="/img/home/email-icon.png"
                          alt="Email"
                          className="iconic"
                        />
                      </h3>
                      <p>
                        Send emails to both current and prospective clients with
                        the objective of enhancing brand recognition,
                        encouraging interaction, cultivating potential
                        customers, or opening promotions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
                <div className="d-flex align-items-center channelbox channelwhatsapp mb-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>
                        WhatsApp{" "}
                        <img
                          src="/img/home/whatsapp-icon.png"
                          alt="WhatsApp"
                          className="iconic"
                        />
                      </h3>
                      <p>
                        Enhance your customers' online storeboard experience in
                        WhatsApp messages. Send interactive messages that
                        incorporate media elements and interactive buttons to
                        promote products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="mt-4"> Conversation APIs that customer prefers</h2>
              <div className="mt-2"></div>
              <p className="text-muted my-4">
                Simplify customer interactions with a unified omnichannel API
                and connect with customers through personalized conversations on
                their preferred channels.
              </p>

              <p>
                We matter your goal, be it developing effortless marketing
                automation workflows, delivering exceptional customer service,
                or constructing a chatbot, our robust API is capable of
                accomplishing all these tasks and more!
              </p>

              <p>
                Moreover, it seamlessly integrates with your current solutions.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                className="img-fluid"
                alt="Programmable SMS API"
                src="img/products/conversion-api.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row mb-5 mt-5 justify-content-center text-center">
            <div className="col-lg-12">
              <h2 className="">
                Knock on any mobile phone with our powerful APIs
              </h2>
              <div className="mt-2"></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-2">
                    <img
                      src="/img/home/sms-icon.png"
                      alt="SMS"
                      className="iconic"
                    />
                  </div>

                  <h4 className="">SMS</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    SMS REST API. Use this API to send automated SMS, and
                    channel messages, track delivery status and more.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-2">
                    <img
                      src="/img/home/voice-icon.png"
                      alt="Voice"
                      className="iconic"
                    />
                  </div>
                  <h4 className="">Voice</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    Integrate outbound voice calls into your web or mobile
                    application with Programmable Voice. Use our Voice API.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-2">
                    <img
                      src="/img/home/email-icon.png"
                      alt="Email"
                      className="iconic"
                    />
                  </div>
                  <h4 className="">Email</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    Incorporating email functionality into your current
                    applications is a breeze with our REST API and detailed
                    documentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-2">
                    <img
                      src="/img/home/whatsapp-icon.png"
                      alt="WhatsApp"
                      className="iconic"
                    />
                  </div>
                  <h4 className="">Whatsapp</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    WhatsApp business API enables chatbot functionality and
                    facilitates the sending of messages, media, and marketing
                    campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row mb-5 mt-5 justify-content-center text-center">
            <div className="col-lg-9">
              <h2 className="">
                Engage with customers on the platforms of their choice.
              </h2>
              <div className="mt-2"></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <h4 className="">Authkey.io</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    An omnichannel API platform specifically created to offer
                    high-capacity messaging, voice call, and email services. It
                    provides a failover solution for transactional routes,
                    ensuring that messages are delivered even if one route
                    fails.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <h4 className="">Buzzdial.io</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    Cloud-based telephony platform caters to all business
                    communication requirements, offering features like voice
                    broadcasting, toll-free numbers, number masking, missed
                    calls, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="">
                <div className="pb-3">
                  <h4 className="">Datagen</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    Datagen platform is highly rated for its user-friendly
                    SMS-related services and has satisfied over 100,000
                    customers. The advanced SMS functionality directly
                    integrates with a range of platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-lg-6">
        <div className="container">
          <div className="row mb-5 mt-5 justify-content-center text-center">
            <div className="col-lg-6">
              <h2 className="">
                Play Safe, Feel Secure with our Verification APIs
              </h2>
              <div className="border_bar"></div>
              <div className="mt-2"></div>
            </div>
          </div>
          <div className="row text-center justify-content-center mt-5">
            <div className="col-md-3">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-5">
                    <img
                      src="img/products/icons6.png"
                      className="img-fluid"
                      alt="sms APi Services authkey"
                    />
                  </div>

                  <h4 className=""> SMS verification API</h4>
                  <p className="text-muted mb-0">
                    The Authkey SMS Verify API offers a comprehensive,
                    passwordless authentication solution that seamlessly
                    validates users at scale across SMS and their preferred
                    communication channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-5">
                    <img
                      src="img/products/icons7.png"
                      className="img-fluid"
                      alt="sms APi Services authkey"
                    />
                  </div>
                  <h4 className="">Voice call Authentication</h4>
                  <p className="text-muted mb-0">
                    With the Voice Call Authentication factor, just like SMS,
                    users can verify their identity by receiving a one-time
                    passcode delivered via a voice call to their designated
                    phone number.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-5">
                    <img
                      src="img/products/icons8.png"
                      className="img-fluid"
                      alt="sms APi Services authkey"
                    />
                  </div>
                  <h4 className="">Flash Call verification</h4>
                  <p className="text-muted mb-0">
                    Flash calling, in which users' profiles are verified via a
                    missed call, is an emerging form of user authentication.
                    Flash calling authentication leverages mobile voice networks
                    to authenticate
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-5">
                    <img
                      src="img/products/icons9.png"
                      className="img-fluid"
                      alt="sms APi Services authkey"
                    />
                  </div>
                  <h4 className="">Email Verification</h4>
                  <p className="text-muted mb-0">
                    Checks the syntax, format, domain name, and mailbox
                    existence of an email address to determine if it is accurate
                    and active. Verifies whether an email address is valid and
                    deliverable or not.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-5">
                    <img
                      src="img/products/icons10.png"
                      className="img-fluid"
                      alt="sms APi Services authkey"
                    />
                  </div>
                  <h4 className="">Two factor authentication</h4>
                  <p className="text-muted mb-0">
                    The 2FA API provides a seamless authentication experience
                    with fallback options and expedited delivery routes. By
                    adding an extra layer of security to your account greatly
                    mitigate the risk of unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <div className="pt-4 pb-5">
                    <img
                      src="img/products/icons11.png"
                      className="img-fluid"
                      alt="sms APi Services authkey"
                    />
                  </div>
                  <h4 className=""> COD verification</h4>
                  <p className="text-muted mb-0">
                    The COD verification API allows businesses to authenticate
                    orders before finalizing the delivery. This API typically
                    checks the number verification to ensure that the order is
                    legitimate and reduce the risk of fraud or non-payment.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="">
                {" "}
                Get started with Authkey. Only pay for the messages, voice, &
                email you send. No extra pricing commitments.
              </h2>

              <div className="border_bar"></div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="buletpoint">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <a href="https://console.authkey.io/signup">
                      {" "}
                      <button className="button-link btn-block">
                        Speak with an expert.
                      </button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />
    </div>
  );
};

export default Products;
