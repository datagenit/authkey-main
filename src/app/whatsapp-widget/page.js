import dynamic from "next/dynamic";
import WhatsappChatbot from "./WhatsappChatbot";
import "../../css/widget.css";


const FaqComponents = dynamic(
  () => import("../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const data = {
  rows: [
    {
      title: "What is a WhatsApp Widget? ",
      content: `WhatsApp Widget is a button attached to the bottom corner of the web page that directs users to initiate chat with your business on WhatsApp. It is a quickest and easiest way for website visitors to contact businesses for their queries without leaving website.`,
    },
    {
      title: "Is the WhatsApp Widget free to use?",
      content: `Yes, Authkey’s WhatsApp Widget is free to use. If you include the premium features like whatsapp business API and additional features- you need to subscribe to WhatsApp pricing plans. You can also start free WhatsApp Business Account that Includes Onboarding, API Access & Sandbox testing( 50 credits/day).`,
    },
    {
      title: "How do I add a WhatsApp Widget to my website?",
      content: (
        <>
          <p>Adding Authkey's WhatsApp Widget to your website is a simple and easy process. Follow the given steps.</p>
          <ul>
            <li>Sign up for a user account at Authkey.</li>
            <li>Go to the WhatsApp Widget section in the left sidebar. Fill in all the required fields, such as your WhatsApp number, widget position, first message, and color to match your website’s style.
            </li>
            <li>Copy the generated code and paste it just before the {`</body>`} tag on the desired page of your website.
            </li>
          </ul>

        </>
      )
    },
    {
      title: "Can I customize the WhatsApp Widget to match my brand?",
      content: `Yes, you can customize the color, size, and position of the WhatsApp Widget to match with your brand's look and feel.`,
    },
    {
      title: " Can I automate responses with the Authkey’s WhatsApp Widget?",
      content: `Yes, you can set up automated response messages and other features, such as a chatbot, to handle common customer inquiries. You can access all the WhatsApp Business API features with Authkey’s WhatsApp Widget.`,
    },
    {
      title: " How quickly can I set up the WhatsApp Widget on my website?",
      content: (
        <>
          <p>Authkey’s WhatsApp Widget takes just 5 minutes to set up. Simply enter your WhatsApp (or WhatsApp Business API number), personalised the Widget for the position (left or right), first message, color, and business logo. Then, copy and paste the code into your website pages just above the {`</body>`} tag.</p>
        </>
      )
    },
    {
      title: "Will adding a WhatsApp Widget affect my website's loading speed?",
      content: `Authkey has well crafted the WhatsApp Widget code to have no impact on website loading speed. Its is lightweight and fully optimised one line that follow the best practises for integration.`,
    },
    {
      title: " What happens when a visitor clicks on the WhatsApp Widget?",
      content: `When a visitor clicks on the WhatsApp Widget, it either opens a chat window in the WhatsApp app (on mobile devices) or a web based WhatsApp interface where visitor can send a message to start a conversation.`,
    },

  ],
};


export const metadata = {
  title: "Free WhatsApp Widget | WhatsApp Chat Button for your website",
  description:
    "Create and integrate a free WhatsApp Widget on your website with customizable color and position to match your brand. Set up in just 5 minutes with Authkey’s WhatsApp Widget.",
  alternates: {
    canonical: "https://authkey.io/whatsapp-business-api/whatsapp-widget",
  },
};

const WhatsappWidget = () => {
  return (
    <div>
      <section className="hero herowhatsapp">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 pt-3 pb-4">
              <h1>Add a Free WhatsApp Chat Widget for your Website.</h1>
              <p>
                Facilitate real-time communication with website visitors and
                efficiently resolve queries using the WhatsApp Chat Widget.
              </p>
              <div className="api-buttons apinbtns WhatsUpBtn mt-4">
                <a
                  className="btn greenfullbtn"
                  href="https://console.authkey.io/signup"
                >
                  Get Free WhatsApp Widget
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
            <div className="col-lg-6 mt-4 mb-4 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/whatsapp-widget.png"
                alt="WhatsApp Chat Widget | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2>Create WhatsApp Live Chat Widgets</h2>
              <div className="mb-4"></div>
              <p>
                Create a beautiful WhatsApp Live Chat Widget and add it to your
                website for free using our simple WhatsApp button generator.
              </p>
            </div>
            <div className="col-md-12 mt-md-4">
              <WhatsappChatbot />
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <div className="smscornerbox">
                <h3>Why Business Should add WhatsApp Widget to website?</h3>
                <div className="mb-4"></div>
                <p>It's an interactive feature that can be added to a website or app, allowing visitors to initiate a WhatsApp conversation directly from the Web page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container pt-6">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="pt-6 pb-2 pynone px-4 sticky-top">
                <h3>Key Features of a WhatsApp Widget</h3>
                <a href="https://console.authkey.io/signup" className="btn btn-primary mt-4"> Talk to Expert</a>
              </div>
            </div>

            <div className="col-lg-6">

              <div className="linebox">
                <div className="circle-fill-main circle-fill-green">
                  <div className="circle-fill circle-fill-green">
                  </div>
                </div>
              </div>

              <div className="crdbox px-4 mt-5 pb-4">
                <h4><img src="/img/whatsapp/quickway.png" alt='Quickest way to message' className="iconic" />  Quickest way to message</h4>
                <p>It provides a seamless way for website visitors to start a conversation with a business on WhatsApp without needing to leave the site or manually enter a phone number.
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/whatsapp/widget-customization.png" alt='Widget Customization' className="iconic" /> Widget Customization</h4>
                <p>Authkey’s WhatsApp Widgets can be customized to match the branding of the website, including color, text, placement, and size.
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/whatsapp/automated-greeting.png" alt='Automated Greetings' className="iconic" /> Automated Greetings</h4>
                <p>Some Widgets offer the capability to automatically send a greeting message when a user initiates a chat, making the experience more engaging and responsive.
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/whatsapp/availability-status.png" alt='Availability Status' className="iconic" /> Availability Status</h4>
                <p>Widgets can display the business's availability status, indicating when the team is online and ready to respond</p>
              </div>

              <div className="crdbox px-4 py-4 mb-5">
                <h4><img src="/img/whatsapp/lead-generation.png" alt='Lead Generation' className="iconic" /> Lead Generation and Customer Support</h4>
                <p>By enabling direct communication, WhatsApp Widgets help businesses generate leads, provide customer support, answer questions, and resolve issues in real time</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="greenBack mb-5">
        <div className="container pt-5 pb-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              < h2>Benefits of Using a WhatsApp Widget</h2>
            </div>
          </div>

          <div className="row d-flex align-items-center mt-4">
            <div className="col-md-4 mb-4">
              <div className="greenBgcolor m-height">
                <img src="/img/whatsapp/customer-experience.png" alt='Improved Customer Engagement' className="iconic" />
                <h5>Improved Customer Engagement</h5>
                <p>Allows businesses to interact with customers instantly and personally, which can enhance customer satisfaction and loyalty.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="greenBgcolor m-height">
                <img src="/img/whatsapp/cost-effective.png" alt='Increased Conversions' className="iconic" />
                <h5>Increased Conversions</h5>
                <p>By providing an easy and familiar way to contact a business, Widgets can help convert website visitors into customers.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="greenBgcolor m-height">
                <img src="/img/whatsapp/global.png" alt='Increased Conversions' className="iconic" />
                <h5>Accessibility and Convenience</h5>
                <p>WhatsApp is widely used globally, and having a Widget makes it convenient for customers to reach out using a platform they are already familiar with.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqComponents data={data} />

    </div>
  );
};
export default WhatsappWidget;
