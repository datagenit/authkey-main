
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import SignupComponent from "../../../components/SignupComponent";
export const metadata = {
  title: "Integration | Authkey.io",
  description:
    "Authkey integrations to connect apps like Pabbly, Zapier automation, Hubspot, Kylas, and 100 more for automating messages on their cloud platform to boost your business sales.",
  alternates: {
    canonical: "https://authkey.io/integrations",
  },
};
const Integration = () => {
  return (
    <div>
      <section className="hero homebg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 txtcenter">
              <h1>Connect with Authkey</h1>
              <p className="lead">
                Integrate our messaging capabilities into Your Business
                Workflow. Kickstart No Code integration on CRM, E-commerce Platforms and
                Automation Channels.
              </p>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-1">Sign up</button>
              </a>
            </div>
            <div className="col-lg-6 my-4">
              <img
                className="img-fluid imgfull"
                src="/img/integrately/integrations.png"
                alt="Integrations"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Authkey API Integrations</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-lg-4 mb-3">
                <a href="https://authkey.io/integrations/shopify">
                  <div className="d-flex flex-column align-items-center">
                    <div className="gray_box shadowlgs text-center">
                      <div className="pt-2 pb-2 text-center">
                        <img
                          className="img-fluid imgfull"
                          src="/img/whatsapp/shopify.png"
                          alt="Shopifiy | Authkey.io"
                        />
                      </div>
                      <p className="text-dark mt-2">
                      Automate your Shopify store by connecting with authkey for customer communication with WhatsApp chatbots and SMS.
                      </p>
                     
                    </div>
                  </div>
                </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <a href="https://authkey.io/integrations/zapier">
                <div className="d-flex flex-column align-items-center">
                  <div className="gray_box shadowlgs text-center">
                    <div className="pt-2 pb-2 text-center">
                      <img
                        className="img-fluid imgfull"
                        src="/img/whatsapp/zapier.webp"
                        alt="Zapier | Authkey.io"
                      />
                    </div>
                    <p className="text-dark mt-2">
                      Zapier lets you connect Authkey with thousands of the most
                      popular apps. Connect your apps and automate workflows.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="https://authkey.io/integrations/pabbly-connect">
                <div className="d-flex flex-column align-items-center">
                  <div className="gray_box shadowlgs text-center">
                      <div className="pt-4 pb-2 text-center">
                      <img
                        className="img-fluid imgfull"
                        src="/img/whatsapp/pabbly.webp"
                        alt="Pabbly | Authkey.io"
                      />
                    </div>
                    <p className="text-dark mt-2">
                      Connect AuthKey with more than 1,000+ apps at Pabbly
                      Connect.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <a href="https://authkey.io/integrations/integrately">
              <div className="d-flex flex-column align-items-center">
                <div className="gray_box shadowlgs text-center">
                  <div className="pt-2 pb-2 text-center">
                    <img
                      className="img-fluid imgfull"
                      src="/img/whatsapp/integrately.webp"
                      alt="Integrately | Authkey.io"
                    />
                  </div>
                  <p className="text-dark mt-2">
                    Authkey Integrations For Non-Techies at Integrately.
                    Automation as <br />
                    <br />
                    <span className="badge badge-secondary mt-4">
                      When X happens do Y, then do Z
                    </span>
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="https://authkey.io/integrations/magento-by-meetanshi">
              <div className="d-flex flex-column align-items-center">
                <div className="gray_box shadowlgs text-center">
                  <div className="pt-4 pb-2 text-center">
                    <img
                      className="img-fluid imgfull"
                      src="/img/whatsapp/meetashi.webp"
                      alt="Meetanshi | Authkey.io"
                    />
                  </div>

                  <p className="text-dark mt-2">
                    Connect Authkey at Magento 2 SMS Notification{" "}
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="https://authkey.io/integrations/kylas">
              <div className="d-flex flex-column align-items-center">
                <div className="gray_box shadowlgs text-center">
                  <div className="pt-4 pb-2 text-center">
                    <img
                      className="img-fluid imgfull"
                      src="/img/whatsapp/kylas.webp"
                      alt="Kylas CRM | Authkey.io"
                    />
                  </div>

                  <p className="text-dark mt-2">
                    Connect Authkey with Kylas CRM to automate messaging for
                    sales operations and more.
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Powerful Channels We Serve API Connections for</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3 col-lg-2">
              <a href="https://authkey.io/sms-api-service">
                <div className="circluar_box channelsms">
                  <div className="pt-3 pb-0">
                    <img
                      src="/img/home/sms-icon.webp"
                      alt="SMS"
                      className="iconic"
                    />
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">SMS</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-lg-2">
              <a href="https://authkey.io/voice-api-service">
                <div className="circluar_box channelvoice">
                  <div className="pt-3 pb-0">
                    <img
                      src="/img/home/voice-icon.webp"
                      alt="Voice"
                      className="iconic"
                    />
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Voice</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-lg-2">
              <a href="https://authkey.io/email-api-service">
                <div className="circluar_box channelemail">
                  <div className="pt-3 pb-0">
                    <img
                      src="/img/home/email-icon.webp"
                      alt="Email"
                      className="iconic"
                    />
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Email</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-lg-2">
              <a href="https://authkey.io/whatsapp-business-api">
                <div className="circluar_box channelwhatsapp ">
                  <div className="pt-3 pb-0">
                    <img
                      src="/img/home/whatsapp-icon.webp"
                      alt="WhatsApp"
                      className="iconic"
                    />
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">WhatsApp</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-lg-2">
              <a href="https://authkey.io/products/rcs-message">
                <div className="circluar_box channelblue">
                  <div className="pt-3 pb-0">
                    <img
                      src="/img/home/rcs-icon.webp"
                      alt="RCS"
                      className="iconic"
                    />
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">RCS</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-3">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h2>
                {" "}
                Get Started with Authkey Platform
              </h2>
              <p className="my-4">
                Start your Trial demo worth a credit of Rs.2500. Apply for
                WhatsApp Business API for FREE.
              </p>
              <a href="https://console.authkey.io/signup">
                <button className="home-button btn-signup mt-2 mb-5">
                  Start your Trial Demo
                </button>
              </a>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <SignupComponent />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />
      <section className="bg-sectionthird">
        <div className="container-fluid pt-5 pb-5">

          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="brandtxt text-center">Trusted By Brands</div>
              <BrandsItem />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
