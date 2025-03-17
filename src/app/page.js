import dynamic from "next/dynamic";
import BrandsItem from "../../components/BrandsItem";
import ReviewItem from "../../components/ReviewItem";
import WhyChooseAuthkey from "../../components/WhyChooseAuthkey";
import HomeBanner from "../../components/HomeBanner";

const FaqComponents = dynamic(
  () => import("../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);


const data = {
  rows: [
    {
      title: "What is Authkey?",
      content: `Authkey is a CPaaS platform providing robust API-based communication solutions. It specializes in SMS, Voice, Email, RCS and WhatsApp APIs, enabling businesses to integrate seamless messaging, customer engagement, and authentication capabilities into their systems. Trusted by thousands, it ensures secure and high-delivery communication channels for businesses of all sizes.`,
    }
   
  ],
};



export default function Home() {
  return (
    <div>

      <div className="hero homebg">
        <div className="container mt-5 mb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 text-center order-last">

            <HomeBanner />
            </div>
            <div className="col-lg-1">
              
            </div>
            <div className="col-lg-6 pt-4 pb-5">
              <h1>Effortlessly Simplified & Powerful  Multi-Channel CPaaS Platform.</h1>
              <p>Cloud Communication APIs seamlessly integrate messaging, voice, email, WhatsApp, and Many more…</p>
              <a
                href="https://console.authkey.io/signup"
                className="btn mt-2"
              >Free 7 days Trial</a>
              <a href='https://calendly.com/princejha8219/authkey-io-demo-or-discussion' className="btn outline-btn mt-2" target="_blank">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>

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

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2>Channels</h2>
              <p>Choose top-tier cloud Comunication channels offered by Authkey preferred globally for customer authentication and engagement.</p>
              <div className="mt-2 mb-5"></div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <a href="/sms-api-service">
                    <div className="d-flex align-items-center channelbox channelsms mb-5">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3>SMS <img src="/img/home/sms-icon.webp" alt='SMS' className="iconic" width="40" height="35"  /></h3>
                          <p>Transform your communication with Authkey's reliable global SMS solution. Enjoy developer-friendly programmable APIs, scalability and send SMS Campagins.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                          <img src='/img/home/sms-api.webp' alt="SMS" className="channelImg float-end" width="230" height="228" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-6">
                  <a href="/voice-api-service">
                    <div className="d-flex align-items-center channelbox channelvoice mb-5">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3>Voice <img src='/img/home/voice-icon.webp' alt='Voice' className="iconic" width="40" height="35" /></h3>
                          <p>Engage more conversations on voice with multiple phone call solutions such as built-in App calling, browser/app click-to-call, IVR, and bulk voice calls using Authkey’s RESTful APIs.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                          <img src='/img/home/voice-api.webp' alt="Voice" className="channelImg float-end"  width="230" height="228"  />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-6">
                  <a href="/email-api-service">
                    <div className="d-flex align-items-center channelbox channelemail mb-5">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3>Email <img src='/img/home/email-icon.webp' alt='Email' className="iconic" width="40" height="29"  /></h3>
                          <p>Execute transactional email for purchase confirmations or shipping updates. Stay compliant from day one with certified options like HIPAA, FedRAMP, GDPR, and ISO.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                          <img src='/img/home/email-api.webp' alt="Email" className="channelImg float-end" width="230" height="228"  />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-6">
                  <a href="/whatsapp-business-api">
                    <div className="d-flex align-items-center channelbox channelwhatsapp mb-5">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3>WhatsApp <img src='/img/home/whatsapp-icon.webp' alt='WhatsApp' className="iconic" width="40" height="32" /></h3>
                          <p>Maximize engagement on WhatsApp, a customer favorite. Seamlessly integrate WhatsApp with Authkey to use it for campaigns, chatbots, and chat with agents.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                          <img src='/img/home/whatsapp-api.webp' alt="WhatsApp" className="channelImg float-end" width="230" height="228" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-6">
                  <a href="/products/rcs-message">
                    <div className="d-flex align-items-center channelbox channelblue mb-5 mbnone">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3>RCS <img src='/img/home/rcs-icon.webp' alt='RCS' className="iconic" width="40" height="40" /></h3>
                          <p>Enrich your messaging experience by creating rich branded;  RCS messages that allow customers through interactive two-way communication, beyond conventional messaging.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                          <img src='/img/home/rcs-api.webp' alt="RCS" className="channelImg float-end"  width="230" height="228"  />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
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
                <h3>Harness over 10 years of experience with the world’s most connected platform</h3>
                <p>With industry-leading expertise, you can deliver superb customer experience through our global network.</p>
                <a href="https://console.authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="linebox"><div className="circle-fill-main  circle-fill-gray"><div className="circle-fill circle-fill-gray"></div></div></div>
              <div className="crdbox px-4 py-4 ">
                <h4><img src='/img/home/campaigns.webp' alt='Campaigns' className="iconic"  width="40" height="40" /> Campaigns</h4>
                <p>Run a targeted campaign for your business audience, sending personalized messages through their favorite channels and language. They can choose to opt in or out, with link-click reports available.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/authentication.webp' alt='Authentication' className="iconic" width="40" height="27" /> Authentication</h4>
                <p>Verify users quickly and efficiently. Provide your users with a fast and simple OTP & 2FA process, supported by a failover solution. Enable OTP login via mobile number or email address.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/conversations.webp' alt='Conversations' className="iconic" width="40" height="31" /> Conversations</h4>
                <p>Forge connections and drive conversions like never before. Enhance your conversion rate with SMS, Voice, email, RCS, and WhatsApp, incorporating images, CTA actions, and more.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/chatbots.webp' alt='Chatbots' className="iconic" width="40" height="38" /> Chatbots</h4>
                <p>Streamline Interactions with WhatsApp Chatbot. Allow the intelligent chatbot to handle and respond to customer intial queries. Expand your business by minimizing human intervention.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/failovers.webp' alt='Failovers' className="iconic" width="40" height="27"  /> Failovers</h4>
                <p>We Make sure your urgent messages never fail. Send Communications through secure channels. API automatically handles switch routes to make sure your message gets delivered successfully.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/startup-friendly.webp' alt='Startup Friendly' className="iconic" width="40" height="41"  /> Startup Friendly</h4>
                <p>Kickstart your communication and authentication needs from the very beginning of your startup with Free credits from Authkey. We empathize with the initial challenges startups face because we've been there ourselves.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/sandbox.webp' alt='Sandbox' className="iconic" width="40" height="40"  /> Sandbox</h4>
                <p>Don't just start; test, build, and deploy in Fully featured virtual space with a sandbox environment. Execute messaging and authentication solutions in isolation without affecting the surrounding production phase.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/easy-integration.webp' alt='Easy Integration' className="iconic" width="40" height="40"  /> Easy Integration</h4>
                <p>Cloud APIs are built keeping developers in mind. This helps Easy understanding and Implementing things with knowledge base API docs and 24X7 Support.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/home/plugins.webp' alt='Plugins' className="iconic" width="40" height="35"  /> Plugins</h4>
                <p>Seamless integrations with multiple e-commerce portals, CRMs, Zapier & more. Incorporate our cloud API capabilities into your business workflow through our trusted integration partners.
                </p>
              </div>
              <div className="crdbox px-4 py-4 mb-6">
                <h4><img src='/img/home/customization.webp' alt='Customization' className="iconic" width="40" height="38" /> Customization</h4>
                <p>Authkey Set to fulfill enterprise needs for customization along the business growth. Solving for customer needs and exceeding expectations to Develop Unique Requirements to meet Happy Customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sectionthird">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-center">Check out what Customers are saying about us</h2>
              <div className="reviewbox mt-5">
                <ReviewItem />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container containBorder mt-5 mb-5 px-5 py-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="fontBg">Get sending with Authkey</div>
              <p>Join over 30,000 customers sending billions of messages across India and the world.</p>
              <a
                href="https://console.authkey.io/signup"
                className="btn dark-blur-btn mt-2"
              >Sign Up</a>
            </div>
            <div className="col-lg-6">
              <a href="https://www.trustpilot.com/review/authkey.io" alt="_blank"><img src='/img/home/Trustpilot.webp' alt="Trustpilot" className="customerlogo" width="179" height="50" /></a>
              <a href="https://crozdesk.com/software/authkey" alt="_blank"><img src='/img/home/crozdesk.webp' alt="Crozdesk" className="customerlogo" width="188" height="50" /></a>
              <a href="https://www.g2.com/products/authkey-authkey-io/reviews#survey-response-9209696" alt="_blank"><img src='/img/home/g2.webp' alt="G2" className="customerlogo" width="49" height="50" /></a>
            </div>
          </div>
        </div>
      </section>
      <FaqComponents data={data} />

      <WhyChooseAuthkey />

    </div>
  );
}
