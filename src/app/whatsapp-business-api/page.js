
import dynamic from "next/dynamic";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { Check2All } from "react-bootstrap-icons";
import WhatsappThought from "../../../components/WhatsappThought";
import Slider from "../../../components/slider";


const FaqComponents = dynamic(
  () => import("../../../components/FaqComponents"),
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
      content: `To get started, sign up for an account on Authkey, follow the integration guide for WhatsApp, and configure your settings to start sending messages. Read more: <a href="https://blog.authkey.io/apply-for-the-free-whatsapp-business-api/" target="_blank">Apply for the free WhatsApp Business API</a>`,
    },
    {
      title: "Do I need a WhatsApp Business Account to use Authkey’s service?",
      content: `Yes, you need a WhatsApp Business Account to use our WhatsApp services. We provide guidance on how to set this up if you don’t already have one. Read more: <a href="https://blog.authkey.io/verify-facebook-business-manager-account/" target="_blank">Verify your Facebook Business manager account.</a>`,
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
    canonical: "https://authkey.io/whatsapp-business-api",
  }
};

const WhatsAppBusinessAPI = () => {
  return (
    <div>
      <section className="hero herowhatsapp">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 pt-3 pb-4">
              <h1>
                WhatsApp Business API: Automate interactions and Marketing
              </h1>
              <p>
                Engage over 2 billion users globally with WhatsApp API by
                Authkey. Automate interactions, boost sales and enhance customer
                engagement with seamless, data-driven communication on their
                favorite platform.
              </p>
              <div className="api-buttons apinbtns WhatsUpBtn mt-4">
                <a
                  className="btn greenfullbtn"
                  href="https://console.authkey.io/signup"
                >
                  Get Free WhatsApp Business API
                </a>
                <a
                  href="https://calendly.com/princejha8219/authkey-io-demo-or-discussion"
                  className="btn outline-btn"
                  target="_blank"
                >
                  Book a Demo
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/whatsapp-image.png"
                alt="Communicate WhatsApp Business API | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sectionthird">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox channelwhatsapp whitebox py-3 px-3">
                <h2>2.5X</h2>
                <h5>Conversions vs Email</h5>
                <p>
                  WhatsApp outperforms email in terms of conversions by 2.5x
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox channelsms whitebox py-3 px-3">
                <h2>98%</h2>
                <h5>Average open rate</h5>
                <p>On average, WhatsApp achieve a 75% open rate</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox channelvoice whitebox py-3 px-3">
                <h2>2 Billion</h2>
                <h5>Monthly active users</h5>
                <p>Reach 2B people on the world's most used chat app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h2 className="mb-3 text-center">
            Don’t let these challenges hold you back.
          </h2>
          <div className="row">
            <div className="col-md-6 text-center mt-3">
              <WhatsappThought />
              <a
                href="https://console.authkey.io/signup"
                className="btn btn-primary mt-2 mb-4"
              >
                Apply For Free WhatsApp Business API
              </a>
            </div>
            <div className="col-md-6 mt-3">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/struggling.png"
                alt="Apply WhatsApp API"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container containBordergreen whatsappBox3 whatsappSpace borderMobnone mt-5 mb-5 py-3">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h3 className="mb-2">
                Looking for a WhatsApp Business Platform?
              </h3>
              <p>Create, Send, and Track WhatsApp Campaign effortlessly.</p>
              <a
                href="https://console.authkey.io/signup"
                className="btn greenfullbtn mt-2 mb-2"
              >
                Set up WhatsApp Business Account
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img src="/img/whatsapp/whatsapp-campaign.png" alt="WhatsApp Campaign" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last">
              <img
                src="/img/whatsapp/whatsapp-business-api.png" alt="WhatsApp Business API"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">WhatsApp Business API</h3>
              <p>
                Connect your business with customers using our WhatsApp Business
                API, which integrates smoothly with multiple platforms.
                Authkey’s user-friendly interface ensures quick setup, perfect
                for non-tech marketers.
              </p>
              <p>
                Easily create your WhatsApp Business Account (WABA) through our
                embedded signup process and manage message templates without any
                coding. Start sending WhatsApp messages immediately and
                streamline your business communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h3 className="mb-2">WhatsApp Marketing Campaigns</h3>

              <p>
                Boost your business with effective WhatsApp marketing campaigns
                designed to convert. Engage your audience by sending promotions,
                special offers, and back-in-stock alerts.
              </p>
              <ul className="freeplan greentick">
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Automate campaigns based on specific customer actions.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Recover lost sales by sending reminders for abandoned carts.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Encourage repeat purchases with timely re-buy notifications.
                </li>
              </ul>
              <p>
                With Authkey’s WhatsApp marketing solutions, you can create
                personalized, high-converting campaigns that drive engagement
                and sales.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/img/whatsapp/WhatsApp-Marketing-Campaigns.png"
                className="img-fluid" alt="WhatsApp Marketing Campaigns"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last">
              <img
                src="/img/whatsapp/deliver-notifications-alert.png"
                className="img-fluid" alt="Deliver notifications & Alerts"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">Deliver notifications & Alerts</h3>
              <p>
                Automate business software with our WhatsApp Business API,
                designed to deliver timely notifications and alerts directly to
                your customers.
              </p>
              <ul className="freeplan greentick">
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Order and Booking Confirmations: Instantly inform customers
                  about their order and booking status.{" "}
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Appointment Reminders: Reduce no-shows with automated
                  appointment alerts.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Delivery Updates: Keep customers updated with real-time
                  delivery tracking.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Promotional Alerts: Send promotions, offers, and back-in-stock
                  notifications.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Security Alerts: Ensure customer safety with timely security
                  notifications.
                </li>
              </ul>
              <p>
                Experience real-time communication that boosts customer
                satisfaction and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h3 className="mb-2">Whatsapp Catalogue</h3>
              <p>
                Transform your e-commerce experience with Authkey’s WhatsApp
                Catalog. Easily showcase products and services on your WhatsApp
                Business Profile with engaging images, price tags, and features.
              </p>
              <ul className="freeplan greentick">
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Virtual Storefront: Allow customers to browse and shop without
                  visiting a physical store.{" "}
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>
                  Seamless Shopping: Customers can view your catalog roll, send
                  cart messages, and complete purchases directly from the app.
                </li>
              </ul>
              <p>
                Boost sales and conversions with a streamlined, interactive
                shopping experience using Authkey’s WhatsApp Catalog.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/img/whatsapp/whatsapp-catalogue.png"
                className="img-fluid" alt="Whatsapp Catalogue"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last">
              <img src="/img/whatsapp/one-to-onechat.png" className="img-fluid" alt="1:1 Chat" />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">1:1 Chat</h3>
              <p>
                Efficiently manage and respond to incoming chats from bulk
                campaigns, chatbots, or customer-initiated. With our WhatsApp
                Business API, you can:
              </p>
              <ul className="freeplan greentick">
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Receive & Reply: Seamlessly handle routine queries.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Boost Efficiency: Deliver exceptional one-on-one customer
                  interactions.
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Reduce Costs: Cut down response time and operational expenses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h3 className="mb-2">
                Setup Customer Support with a WhatsApp chatbot
              </h3>
              <p>
                Authkey’s chatbots allow businesses to automate the most common
                customer queries and hand them over to a human agent when needed
                on WhatsApp. Customers can choose between multiple types of
                inquiries to ensure an appropriate agent is always assigned to
                them.
              </p>
              <ul className="freeplan greentick">
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  24/7 support
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Quick response times
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>{" "}
                  Improved team efficiency
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>
                  Greater customer satisfaction
                </li>
                <li>
                  <span>
                    <Check2All />
                  </span>
                  Higher conversion rates
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="/img/whatsapp/whatsapp-chatbot.png" className="img-fluid" alt="WhatsApp chatbot" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last">
              <img src="/img/whatsapp/optin-out.png" className="img-fluid" alt="WhatsApp Opt-In" />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">WhatsApp Opt-In/Out Control</h3>
              <p>
                Avoid sending random messages by giving recipients the option to
                opt in or out.
              </p>
              <p>
                Ensure compliance by rolling out messages only to customers who
                want to receive them. Authkey’s software engages in business
                conversations solely with customers who have given explicit
                consent, initiating chats only after obtaining permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5">
          <div className="row d-flex align-items-center text-center">
            <div className="col-md-12">
              <div className="containBordergreen channelgreen whatsappSpace py-5">
                <h3 className="mb-2">Authkey’s WhatsApp Pricing</h3>
                <p>
                  The WhatsApp integration is free. Then, it’s conversation-based
                  pricing. You only pay for what you send, no setup or licensing
                  fees. Prices depend on the recipient’s country. Simple and
                  transparent!
                </p>
                <div className="api-buttons apinbtns WhatsUpBtn mt-4">
                  <a className="btn greenfullbtn" href="https://authkey.io/whatsapp-business-api/pricing">BSP Price</a>
                  <a href="https://authkey.io/whatsapp-business-api/int/pricing" className="btn outline-btn">TSP Price</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fixbgColor">
        <div className="container-fluid pt-5 pb-5 my-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2>Use Case</h2>
            </div>
          </div>
          <div className="row">
            <Slider />
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row d-flex align-items-center">
            <div className="col-md-12">
              <div className="containBordergreen whatsappBox3 channelgreen whatsappSpace mb-5 py-5">
                <h3 className="mb-2">
                  Connect with Your Customers on their Favourite WhatsApp.
                </h3>
                <p>
                  With over 2 billion users across 180 countries, WhatsApp
                  Business allows you to connect with customers on a platform they
                  already use and trust.
                </p>
                <a
                  href="https://console.authkey.io/signup"
                  className="btn greenfullbtn mt-2"
                >
                  Start WhatsApp Onboarding
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqComponents data={data} />

      <WhyChooseAuthkey />
    </div>
  );
};
export default WhatsAppBusinessAPI;
