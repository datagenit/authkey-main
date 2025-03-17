import dynamic from "next/dynamic";
import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import WhatsAppConversation from "../pricing/WhatsAppConversation";
import Plancollapse from "../pricing/Plancollapse";
import { ArrowRight } from "react-bootstrap-icons";
import WhatsappFeature from "../pricing/WhatsappFeature";
import StarterPlan from "../pricing/StarterPlan";


const FaqComponents = dynamic(
  () => import("../../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const data = {
  rows: [
    {
      title: "Is WhatsApp Business API Free?",
      content: `Yes, Authkey provides a complimentary free WhatsApp Business API plan for startup businesses, allowing them to initiate WhatsApp messages without incurring any expenses.`,
    },
    {
      title: "What is whatsapp pricing?",
      content: `WhatsApp Business API pricing is applied fees associated with messaging interactions on the WhatsApp Business Platform. These fees are determined based on the nature of the conversation initiation, categorized as either User-Initiated or Business-Initiated. Charges are applied accordingly.`,
    },
    {
      title: "What is Whatsapp pricing calculator?",
      content: `WhatsApp Business API Pricing Calculator is a tool that estimates the potential cost for the number of conversations sent using the WhatsApp business platform. Factors affecting the pricing are number of conversations, types-business/user initiated, and  location.`,
    },
    {
      title: "Is WhatsApp API service free or paid?",
      content: `WhatsApp API is a paid service by Meta. But Authkey as a BSP offers you the free plan for the business up to 1000 free conversations per month. Refer to the <b>WhatsApp Business Plans</b>.`,
    },
    {
      title: "What are free monthly conversations?",
      content: `Authkey offers you 1000 free conversations per month. Businesses can start with Authkey’s WhatsApp API at zero cost.`,
    },
    {
      title: "Can I upgrade my pricing plan in the future?",
      content: `Of course, you can change WhatsApp pricing plans at any point of time. As per the need of business scaling.`,
    },
    {
      title: "What is WhatsApp conversational-based pricing?",
      content: `WhatsApp messages are performed in a conversational manner. WhatsApp conversational-based pricing depends on the member who initiates the conversation. The pricing could be User or business initiated. The Business initiated conversations have higher pricing. Refer to <b>WhatsApp business Cost Per Message</b>.`,
    },
  ],
};

export const metadata = {
  title: "Whatsapp Pricing | Free Whatsapp business API Plans",
  description:
    "WhatsApp API pricing. Free Startup, Growth and Custom Premium Plans. Get affordable pricing for whatsapp business api with a zero setup cost at Authkey.",
  alternates: {
    canonical: "https://authkey.io/whatsapp-business-api/pricing",
  },
};

const WhatsappPricing = () => {
  return (
    <div>
      <section className="hero herowhatsapp position-relative">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
           
              <h1>WhatsApp API Pricing Plans by Authkey</h1>

              <p>Choose the Right Pricing Plan for Your Business</p>
            </div>
          </div>
        </div>
      </section>

    <section>
        <Plancollapse />


      </section>

      <section className="greenBack mt-3">
        <WhatsappFeature />
      </section>

      <section>
        <WhatsAppConversation />
      </section>

      <section>
      <StarterPlan />
      </section>

      <FaqComponents data={data} />

      <section className="fixbgColor mt-5">
        <div className="container my-2 px-5 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2>Get started with Whatsapp Business API</h2>
              <p>
                Looking for genuine whatsapp business service provider at
                efficient pricing plans. Authkey will fulfill your whatsapp
                business needs.
              </p>
              <div className="api-buttons mt-4">
                <a
                  className="btn dark-blur-btn"
                  href="https://console.authkey.io/signup"
                >
                  Sign up <ArrowRight></ArrowRight>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <WhyChooseAuthkey />
      </section>
    </div>
  );
};
export default WhatsappPricing;
