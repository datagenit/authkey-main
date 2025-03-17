import dynamic from "next/dynamic";
import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import { Check2All, ArrowRight } from 'react-bootstrap-icons';

const FaqComponents = dynamic(
  () => import("../../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const data = {
  rows: [
    {
      title: "What is Authkey’s WhatsApp service?",
      content: `Authkey’s WhatsApp service allows businesses to send and receive messages via WhatsApp API, enabling efficient and reliable communication with customers.`,
    },
    {
      title: "How can I integrate WhatsApp with my business using Authkey?",
      content: `You can integrate WhatsApp with your business by using our Authkey’s WhatsApp API. Detailed documentation and support are provided to help you with the integration process.`,
    },
    {
      title: "What features are available with Authkey’s WhatsApp service?",
      content: `Our WhatsApp service includes features such as message automation, customer support, notifications, multimedia messaging, and two-way communication.`,
    },
    {
      title: "Can I send multimedia messages using Authkey’s WhatsApp service?",
      content: `Yes, you can send images, videos, documents, and voice messages using our WhatsApp service.`,
    },
    {
      title: "Is it possible to automate messages on WhatsApp with Authkey?",
      content: `Yes, you can automate messages such as order confirmations, shipping updates, appointment reminders, and more using our platform.`,
    },
    {
      title: "How do I get started with Authkey for WhatsApp?",
      content: `To get started, sign up for an account on Authkey, follow the integration guide for WhatsApp, and configure your settings to start sending messages. Read more: <a href="https://authkey.io/blogs/apply-for-the-free-whatsapp-business-api/" target="_blank">Apply for the free WhatsApp Business API</a>`,
    },
    {
      title: "Do I need a WhatsApp Business Account to use Authkey’s service?",
      content: `Yes, you need a WhatsApp Business Account to use our WhatsApp services. We provide guidance on how to set this up if you don’t already have one. Read more: <a href="https://authkey.io/blogs/verify-facebook-business-manager-account/" target="_blank">Verify your Facebook Business manager account.</a>`,
    },
    {
      title: "What are the pricing plans for Authkey’s WhatsApp service?",
      content: `Authkey offers the simplified pricing with no monthly fixed charges. It follows the prepaid wallet system- Pay As You Go. Visit our pricing page for detailed information on the different plans available.`,
    },
    {
      title: "Is there a free trial available for Authkey’s WhatsApp service?",
      content: `Yes, we offer a free trial so you can test our WhatsApp services before committing to a paid plan.`,
    },
    {
      title: "How secure is Authkey’s WhatsApp service?",
      content: `Security is our top priority. Our service uses end-to-end encryption to ensure that your messages are secure and compliant with data protection regulations.`,
    },
    {
      title:
        "What kind of support is available for integrating and using Authkey’s WhatsApp service?",
      content: `We offer comprehensive support including documentation, tutorials, and a dedicated ticket system refers to support team to assist you with any questions or issues.`,
    },
    {
      title: "How can I contact customer support?",
      content: `You can contact our customer support team through email, or by submitting a support ticket via our website.`,
    },
    {
      title: "Can I use Authkey’s WhatsApp service for bulk messaging?",
      content: `Yes, our service supports bulk/broadcast campaign messaging, allowing you to send messages to large groups of customers efficiently.`,
    },
    {
      title: "Can I customize the message templates for WhatsApp?",
      content: `Yes, you can create and customize message templates to suit your business needs and ensure consistent communication.`,
    },
    {
      title: "Is it possible to track the performance of my WhatsApp messages?",
      content: `Yes, we provide analytics and reporting tools to help you track the performance of your WhatsApp messages and campaigns.`,
    },
    {
      title: "What should I do if my messages are not being delivered?",
      content: `If your messages are not being delivered, check your account status, message templates, network connectivity and prepaid balance. You can also contact our support team for further assistance.`,
    },
    {
      title: "How do I handle errors or issues with the API integration?",
      content: `Refer to our API documentation for common error codes and troubleshooting tips. If the issue persists, reach out to our technical support team.`,
    },
  ],
};

export const metadata = {
  title: "Get WhatsApp Business API for FREE| Apply now",
  description:
    "Get the Official WhatsApp Business API for Free. Initiate your sandbox testing for free. Easily apply for the WhatsApp API for free with Authkey.",
  alternates: {
    canonical: "https://authkey.io/whatsapp-business-api/whatsapp",
  },
  robots: {
    index: false,
    follow: false,
  },
};
const Whatsapp = () => {

  return (
    <div>
      <section className="hero herowhatsapp">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 pt-3 pb-4">
              <h1><img src="/img/home/whatsapp-icon.png" alt="WhatsApp" /> Connect, Engage and Grow <span className="green_txtcolor">WhatsApp Business</span> APIs for Seamless Customer Communication.</h1>
              <div className="api-buttons apinbtns WhatsUpBtn mt-4">
                <a className="btn greenfullbtn" href="https://console.authkey.io/signup">Create Free Account</a>
                <a href='https://calendly.com/princejha8219/authkey-io-demo-or-discussion' className="btn outline-btn" target="_blank">Book a Demo</a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 text-center">
              <img className="img-fluid imgfull" src="/img/whatsapp/whatsapp-image.png" alt="Communicate WhatsApp Business API | Authkey.io" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container pt-5 pb-0">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2>Features</h2>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container pt-5">
          <div className="row justify-content-center relativebox">
            <div className="linebox">
              <div className="circle-fill-main circle-fill-green">
                <div className="circle-fill circle-fill-green">
                </div>
              </div>
            </div>

            <div className="row d-flex align-items-center">
              <div className="col-lg-6 order-last">
                <img className="img-fluid imgfull" src="/img/whatsapp/communication-api.png" alt="Communication APIs | Authkey.io" />
              </div>
              <div className="col-lg-6">
                <div className="ml-5">
                  <h3 className="mb-2">WhatsApp APIs</h3>
                  <p className="mb-4">Reach, Interact and Repeat with Customers. Simple APIs Designed for High Volume Traffic on Serverless Module for real-time customer engagement and conversations.</p>
                  <a href="https://console.authkey.io/signup" className="btn greenfullbtn mt-2 mb-4">Start Now for FREE!</a>
                </div>
              </div>
            </div>

            <div className="row d-flex align-items-center py-5">
              <div className="col-lg-6">
                <div className="mr-5">
                  <h3 className="mb-2">WhatsApp Marketing</h3>
                  <p className="mb-4">Deliver targeted Marketing Campaigns seamlessly while respecting preferences that customers love to read and Respond to.</p>
                  <a href="https://authkey.io/whatsapp-business-api/marketing" className="btn outline-btn mb-4">WhatsApp Business Marketing</a>
                  <a href='https://console.authkey.io/signup' className="btn greenfullbtn ml-0">Get Started WhatsApp Marketing</a>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid imgfull mt-2" src="/img/whatsapp/whatsApp-campaign.webp" alt="WhatsApp Campaign | Authkey.io" />
              </div>
            </div>

            <div className="row d-flex align-items-center py-5">
              <div className="col-lg-6 order-last">
                <img className="img-fluid imgfull" src="/img/whatsapp/one-to-one-chat.png" alt="1:1 Chat | Authkey.io" />
              </div>
              <div className="col-lg-6">
                <div className="ml-5">
                  <h3 className="mb-2">1:1 Chat</h3>
                  <p className="mb-4">Receive & Reply. Efficiently handle routine queries with WhatsApp Business API, delivering exceptional 1:1 customer chat while reducing response time and operational costs.</p>
                  <a href="https://console.authkey.io/signup" className="btn greenfullbtn mt-2 mb-4">Get Free WhatsApp Business API</a>
                </div>
              </div>
            </div>

            <div className="row d-flex align-items-center pt-5 pb-5">
              <div className="col-lg-6">
                <div className="mr-5">
                  <h3 className="mb-2">ChatBot</h3>
                  <p className="mb-4">Don’t Let your Customers Wait Set up triggers, automate replies and design bot structure with ease. Utilize versatile message templates for seamless user interactions and effective sales pipelines. Customize standard flows for real-time notifications, auto-replies, etc.</p>
                  <a href="https://console.authkey.io/signup" className="btn greenfullbtn mb-4">Start for Free</a>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid imgfull mt-2" src="/img/whatsapp/bot.png" alt="Bot | Authkey.io" />
              </div>
            </div>

            <div className="row d-flex align-items-center pt-5 pb-5">
              <div className="col-lg-6 order-last">
                <img className="img-fluid imgfull" src="/img/whatsapp/optinout.png" alt=">Otp In Out | Authkey.io" />
              </div>
              <div className="col-lg-6">
                <div className="ml-5">
                  <h3 className="mb-2">Opt In - Out</h3>
                  <p className="mb-4">WhatsApp opt-in/out control, ensuring roll out the customers that don't want to receive messages. Engage in Business conversations with customers only with their consent. Ongoing conversations are initiated only after customers have explicitly consented to chat.</p>
                </div>
              </div>
            </div>

            <div className="row d-flex align-items-center pt-5 pb-5">
              <div className="col-lg-6">
                <div className="mr-5">
                  <h3 className="mb-2">Global Reach</h3>
                  <p>Anywhere, Anytime & Any prospect.</p>
                  <p className="mb-4">Drive audience engagement, boost sales and enhance customer support on a platform that has 2.2 billion users and an impressive 98% open rate worldwide.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid imgfull mt-2" src="/img/whatsapp/global-reach.webp" alt="Global Reach | Authkey.io" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container pt-5 pb-5 pmb0">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              < h2>Choose, How You Want to Connect</h2>
            </div>
          </div>

          <div className="row d-flex align-items-center mt-4">
            <div className="col-md-5 mb-4">
              <div className="smscornerbox">
                <h5>Technical Service Provider (TSP)</h5>
                <p>Authkey serves as a middleware, linking the WhatsApp Business API with Meta's services. Onboarding takes place through Meta's WhatsApp Business platform, where you'll gain access to a WhatsApp Business Account managed by you. Meta handles WhatsApp billing through credit card transactions, while Authkey manages charges for other platform services.</p>
              </div>
            </div>

            <div className="col-md-2">
              <span className="firstCircleline1"></span>
              <span className="firstCircleline2"></span>
              <div className="midCircle">
                <img src="/img/home/whatsapp-icon.png" alt='WhatsApp' className="iconic" />
              </div>
              <div className="midCircleAnimate"></div>
              <span className="firstCircleline3"></span>
              <span className="firstCircleline4"></span>
            </div>

            <div className="col-md-5 mb-4">
              <div className="smscornerbox">
                <h5>Business Service Provider (BSP)</h5>
                <p>Authkey will create a WhatsApp Account on Meta on your Behalf, providing direct access to the WhatsApp API.  Onboarding seamlessly takes place within the Authkey panel. You'll get a WhatsApp Business Account managed by Authkey on Meta's platform. Billing and payments are hassle-free, eliminating the need for credit cards, with simplified Authkey’s platform-based pricing.</p>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-lg-12 text-center mt-2">
              <a href="#" className="btn dark-blur-btn mt-2"> Explore TSP vs BSP </a>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 text-center">
              <h2>Onboarding</h2>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h6 className="mt-4 mb-4">Start the quick onboarding process for the WhatsApp Business API, instant approval within 10 minutes.*:</h6>
              <ul className="freeplan greentick">
                <li><span><Check2All /></span><p>Login into Meta business (<a href="https://authkey.io/waba/">Click here</a>) using the existing credentials of the Facebook business page.</p></li>
                <li><span><Check2All /></span><p>Enter your Legal Business Details and verify your WhatsApp Business Number.</p></li>
                <li><span><Check2All /></span><p>You will have successfully applied for the WhatsApp Business API. Your application will undergo review.</p></li>
              </ul>
              <p className="mt-4"><a href="https://authkey.io/blogs/apply-for-the-free-whatsapp-business-api/" className="btn outline-btn">How to Apply for Free WhatsApp Business API? <span className="greenicon"><ArrowRight size={15} /></span></a></p>
              <p className="mt-4"><a href="https://console.authkey.io/signup" className="btn greenfullbtn">Apply for free WhatsApp API </a></p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid imgfull" src="/img/whatsapp/onboarding.png" alt="Onboarding | Authkey.io" />
            </div>
          </div>
        </div>
      </section>

      <section className="greenBack">
        <div className="container pt-5 pb-3">
          <div className="row d-flex align-items-center mb-4">
            <div className="col-lg-12 text-center">
              <h2 clasName="text-center">Authkey As a Platform</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 text-center">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <img className="img-fluid" src="/img/whatsapp/channel.webp" alt="Channels | Authkey.io" />
                <h5 className="mt-4">Channels</h5>
                <p>Deliver across multiple channels; SMS, voice calls, emails, RCS and WhatsApp API.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 text-center">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <img className="img-fluid" src="/img/whatsapp/latency.webp" alt="Latency | Authkey.io" />
                <h5 className="mt-4">Latency</h5>
                <p>Transperency on delivery time & Live Latency updates for your sent messages.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 text-center">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <img className="img-fluid" src="/img/whatsapp/fallback.webp" alt="Fallback | Authkey.io" />
                <h5 className="mt-4">Fallback</h5>
                <p>Ensures uninterrupted delivery; automates alternative channels.</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 text-center">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <img className="img-fluid" src="/img/whatsapp/sandbox.webp" alt="Sandbox | Authkey.io" />
                <h5 className="mt-4">Sandbox</h5>
                <p>Reliable delivery testing in a controlled environment for every selected API.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mb-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Integration Partners</h2>
              <p>Integrate your workflow to Fling your business ahead.</p>
            </div>
          </div>
          <div className="row">
            <div className="pt-2 pb-3 col-sm-4 col-md-2 text-center">
              <img className="img-fluid" src="/img/whatsapp/hubspot.webp" alt="Hubspot | Authkey.io" />
            </div>
            <div className="pt-2 pb-3 col-sm-4 col-md-2 text-center">
              <img className="img-fluid" src="/img/whatsapp/zapier.webp" alt="Zapier | Authkey.io" />
            </div>
            <div className="pt-2 pb-3 col-sm-4 col-md-2 text-center">
              <img className="img-fluid" src="/img/whatsapp/pabbly.webp" alt="Pabbly | Authkey.io" />
            </div>
            <div className="pt-2 pb-3 col-sm-4 col-md-2 text-center">
              <img className="img-fluid" src="/img/whatsapp/integrately.webp" alt="Integrately | Authkey.io" />
            </div>
            <div className="pt-2 pb-3 col-sm-4 col-md-2 text-center">
              <img className="img-fluid" src="/img/whatsapp/integrately.webp" alt="Meetanshi | Authkey.io" />
            </div>
            <div className="pt-2 pb-3 col-sm-4 col-md-2 text-center">
              <img className="img-fluid" src="/img/whatsapp/kylas.webp" alt="Kylas CRM | Authkey.io" />
            </div>
          </div>
        </div>
      </section>


      <FaqComponents data={data} />

      <WhyChooseAuthkey />
    </div>
  );
}
export default Whatsapp;


