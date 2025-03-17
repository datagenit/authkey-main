import dynamic from "next/dynamic";
import {
  Check2All,
  Meta,
  X,
  Whatsapp,
  Telephone,
  PlusCircleFill,
} from "react-bootstrap-icons";
import WhatsAppIntPriceEstimation from "./WhatsappIntPriceEstimation";
import PricePopup from "./PricePopup";
import WhyChooseAuthkey from "../../../../../components/WhyChooseAuthkey";

const FaqComponents = dynamic(
  () => import("../../../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const data = {
  rows: [
    {
      title: "Is Authkey an official Meta Tech Partner?",
      content: `Yes,  During the onboarding process, you'll seamlessly move from Authkey's panel to Meta's official embedded signup flow to finalize WhatsApp API registration.`,
    },
    {
      title: "How do Authkey’s WhatsApp TSP Plans work?",
      content: (
        <>
          <p>
            Authkey has simple{" "}
            <a href="#whatsAppPrice">WhatsApp pricing plans</a> based on the
            number of conversations you perform.
          </p>
          <ul>
            <li>
              <b>Authkey Charges:</b> We apply a nominal fee per conversation
              for the API service.
            </li>
            <li>
              <b>Meta WhatsApp Charges:</b> These fees are directly invoiced
              through the Meta portal
            </li>
          </ul>
          <p>
            Authkey maintains full transparency by offering charges directly to
            customers without any markup fees.
          </p>
        </>
      ),
    },
    {
      title: "What is my estimated cost for using WhatsApp Business API?",
      content: `You can use Authkey’s Pricing Calculator to get an estimate of your monthly cost for using WhatsApp Business API. 
      To get an estimate for the total per-conversation pricing, <a href="#whatsAppopup">click here</a>.
      `,
    },
    {
      title:
        "How long is my whatsapp business plan valid, and does it renew automatically?",
      content: `Your Authkey account remains active for a lifetime, but the plan expires based on the duration you select as monthly or yearly. If your plan expires with a remaining conversation balance, it will carry to the next plan once you recharge again.
      `,
    },
    {
      title: "Can I use WhatsApp Business API for free?",
      content: `Certainly Yes! With Authkey, you can kickstart your usage of the WhatsApp Business API for free during your trial period.
      `,
    },
    {
      title: "What are free monthly conversations?",
      content: `Once you start with whatsapp business API, the first 1000 conversations per month are free.
      `,
    },
    {
      title: "Is it a Pre-paid Billing or Post-paid at Authkey?",
      content: `All the WhatsApp plan operates on a Pre-paid system. Your account wallet will be credited according to the chosen plan.
      `,
    },
  ],
};

export const metadata = {
  title: "Whatsapp Pricing | Whatsapp API Self-Serving TSP Plans - Authkey",
  description:
    "WhatsApp pricing plans- TSP. Whatsapp API plans as a starter, basic, pro, enterprise, and custom. No Monthly Platform Fee. Start WhatsApp At Zero cost.",
  alternates: {
    canonical: "https://authkey.io/whatsapp-business-api/int/pricing",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const WhatsappIntPricing = () => {
  return (
    <div>
      <section className="hero herowhatsapp whatsappHero">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h1>
                WhatsApp Pricing -{" "}
                <span className="voilet_txtcolor">Self Serving Plans</span>
              </h1>
              <h5 className="mt-3">
                No additional markup charges, no setup fees, and no monthly
                fees.
              </h5>
              <a
                className="btn dark-blur-btn mt-3"
                href="https://console.authkey.io/signup"
              >
                Start 7-Day Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-6 pb-5" id="whatsAppPrice">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Start Sending WhatsApp Messages At No Cost</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-12 mr-auto ml-auto">
                  <div className="text-center containBorderGreen mt-3 px-5 py-5">
                    <h3>Meta WhatsApp Charges</h3>
                    <p>
                      WhatsApp Business API charges per conversation are extra; directly
                      from Meta without any additional markup.
                    </p>
                    <div className="api-buttons mt-4">
                      <a
                        className="btn greenfullbtn"
                        href="https://developers.facebook.com/docs/whatsapp/pricing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Meta size={18} /> Meta Official Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="iconColor my-4 text-center">
            <PlusCircleFill size={30} />
          </div>
          <WhatsAppIntPriceEstimation />

          <div className="mt-4 text-center">
            <a
              className="btn dark-blur-btn btnfull"
              href="https://console.authkey.io/signup"
            >
              <Whatsapp /> Apply For Free WhatsApp Business API
            </a>
          </div>
        </div>
      </section>

      <section id="whatsAppopup">
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 mr-auto ml-auto">
              <div className="smscornerbox text-center py-5">
              <h3>Authkey Platform Charges + Meta WhatsApp Charges</h3>
              <PricePopup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10" id="whatsappPlan">
              <h2 className="text-center">WhatsApp Plan Comparison</h2>
            </div>
            <div className="col-lg-12">
              <table className="table table_left tabwdth whatsappTab mt-4">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Starter</th>
                    <th scope="col">Basic</th>
                    <th scope="col">Standard</th>
                    <th scope="col">Pro</th>
                    <th scope="col">Premium</th>
                    <th scope="col">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="">Pricing</td>
                    <td data-label="Starter">0</td>
                    <td data-label="Basic">$10</td>
                    <td data-label="Standard">$99</td>
                    <td data-label="Pro">$299</td>
                    <td data-label="Premium">$499</td>
                    <td data-label="Enterprise">$999</td>
                  </tr>
                  <tr>
                    <td data-label="">Conversations per month</td>
                    <td data-label="Starter">1000</td>
                    <td data-label="Basic">10000</td>
                    <td data-label="Standard">1 Lac</td>
                    <td data-label="Pro">5 Lac </td>
                    <td data-label="Premium">1 Million</td>
                    <td data-label="Enterprise">3 Million</td>
                  </tr>
                  <tr>
                    <td>Suitable</td>
                    <td data-label="Starter">Trial / Startups</td>
                    <td data-label="Basic">Budget conscious</td>
                    <td data-label="Standard">Well rounded plan</td>
                    <td data-label="Pro">Geared towards Enterprise</td>
                    <td data-label="Premium">Higher-tier plan</td>
                    <td data-label="Enterprise">Top-tier plan</td>
                  </tr>
                  <tr>
                    <td>Message Delivery Rate/minute</td>
                    <td data-label="Starter">1200 Messages/min</td>
                    <td data-label="Basic">1200 Messages/min</td>
                    <td data-label="Standard">1200 Messages/min</td>
                    <td data-label="Pro">1200 Messages/min</td>
                    <td data-label="Premium">1200 Messages/min</td>
                    <td data-label="Enterprise">1200 Messages/min</td>
                  </tr>
                  <tr>
                    <td>Extra conversations</td>
                    <td data-label="Starter">
                      {" "}
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">$0.0014</td>
                    <td data-label="Standard">$0.0012</td>
                    <td data-label="Pro">$0.00096</td>
                    <td data-label="Premium">$0.00072</td>
                    <td data-label="Enterprise">$0.0012</td>
                  </tr>
                  <tr>
                    <td>Contact List</td>
                    <td data-label="Starter">1000</td>
                    <td data-label="Basic">10000</td>
                    <td data-label="Standard">Unlimited</td>
                    <td data-label="Pro">Unlimited</td>
                    <td data-label="Premium">Unlimited</td>
                    <td data-label="Enterprise">Unlimited</td>
                  </tr>
                  <tr>
                    <td>Contact List Management</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="7" className="bglight">
                      MESSAGE TEMPLATES
                    </td>
                  </tr>
                  <tr>
                    <td>Rich media template</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Click to Action links</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Interactive Buttons</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Template with Dynamic values</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="7" className="bglight">
                      Messages
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing Campaign</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Transactional - Automated</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="7" className="bglight">
                      Dashboard
                    </td>
                  </tr>
                  <tr>
                    <td>Customer Account</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Reports and Analytics</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Shared Team Inbox</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Replies to customers</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Multi-agent support</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">1</td>
                    <td data-label="Standard">2</td>
                    <td data-label="Pro">5</td>
                    <td data-label="Premium">10</td>
                    <td data-label="Enterprise">Custom</td>
                  </tr>
                  <tr>
                    <td>Prepaid Recharge System</td>
                    <td data-label="Starter">Free</td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Add and update contacts</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="7" className="bglight">
                      API Integration
                    </td>
                  </tr>
                  <tr>
                    <td>WhatsApp API Integration</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>API Documentation</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Monthly API requests limit</td>
                    <td data-label="Starter">1000</td>
                    <td data-label="Basic">10000</td>
                    <td data-label="Standard">As per balance</td>
                    <td data-label="Pro">Unlimited </td>
                    <td data-label="Premium">Unlimited </td>
                    <td data-label="Enterprise">Unlimited</td>
                  </tr>
                  <tr>
                    <td>Third party integration- Zapier, Pabbly etc</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Response SMS, Voice & Email integration</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="7" className="bglight">
                      SUPPORT
                    </td>
                  </tr>
                  <tr>
                    <td>WhatsApp onboard </td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>API Setup </td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Apply WABA</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Apply Green Tick</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Live chat support</td>
                    <td data-label="Starter">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Google Meet / Zoom support/Telephonic</td>
                    <td data-label="Starter">
                      <span className="text-danger">
                        <X size={30} />
                      </span>
                    </td>
                    <td data-label="Basic">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Standard">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Pro">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Premium">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                    <td data-label="Enterprise">
                      <span className="greentick">
                        <Check2All size={25} />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="greenBack">
        <div className="container pt-5 pb-3">
          <div className="row d-flex">
            <div className="col-lg-12 text-center mb-3">
              <h2>All WhatsApp Plans Include the following features</h2>
            </div>
            <div className="col-lg-4">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <ul className="freeplan greentick">
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    WhatsApp Business API
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Facebook Business Manager ID Assistance
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Green Tick Verification & Assistance
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Account Onboarding Assistance
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Broadcasting & Retargeting Management
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Template Message approval
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Marketing Campaign Scheduler
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <ul className="freeplan greentick">
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Monitoring/ Analytics
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Shared Team Inbox
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Free 1000 conversations/month
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    1200 Messages/min
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Support: Chat, E-mail, WhatsApp, Ticket Raise.
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Priority Customer Support
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Dedicated Account Manager
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Account Onboarding Assistance
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="greenBgs pt-4 pb-3 mb-5">
                <ul className="freeplan greentick">
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    API documentation & Guide
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    On-priority agent call support.
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Template Submission
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Contact Management
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    SMS Integration if required
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Webhooks
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Downloadable Reports
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Integrations
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Smart Audience Segregation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-3">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-12 text-center mb-3">
              <h2>Integrations</h2>
            </div>
          </div>
          <div className="row">
            <div className="pt-2 pb-2 col-xs-6 col-sm-3 col-md-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/integrately.webp"
                alt="Hubspot | Authkey.io"
              />
            </div>
            <div className="pt-2 pb-2 col-xs-6 col-sm-3 col-md-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/zapier.webp"
                alt="Zapier | Authkey.io"
              />
            </div>
            <div className="pt-2 pb-2 col-xs-6 col-sm-3 col-md-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/pabbly.webp"
                alt="Pabbly | Authkey.io"
              />
            </div>
            <div className="pt-2 pb-2 col-xs-6 col-sm-3 col-md-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/integrately.webp"
                alt="Integrately | Authkey.io"
              />
            </div>
            <div className="pt-2 pb-2 col-xs-6 col-sm-3 col-md-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/meetashi.webp"
                alt="Meetanshi | Authkey.io"
              />
            </div>
            <div className="pt-2 pb-2 col-xs-6 col-sm-3 col-md-2 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/kylas.webp"
                alt="Kylas CRM | Authkey.io"
              />
            </div>
          </div>
          <div className="row">
            <p className="text-center mt-4 mb-4 col-md-12">
              Contact us for other required integrations. We will get it done
              for you.
            </p>
            <div className="text-center col-md-12">
              <a
                href="https://authkey.io/products/integration-partners"
                className="btn outline-btn"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor mb-5">
        <div className="container justify-content-center py-5 px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h4>Experiencing Increased Message Volumes!</h4>
              <p>Shall We Schedule a Call? </p>
            </div>
            <div className="col-lg-4 text-center mt-4">
              <a
                className="btn dark-blur-btn"
                href="https://console.authkey.io/signup"
              >
                <Telephone /> Talk To Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqComponents data={data} />

      <section>
        <WhyChooseAuthkey />
      </section>
    </div>
  );
};
export default WhatsappIntPricing;
