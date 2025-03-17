import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import WhatsAppIntPriceEstimation from "../int/pricing/WhatsappIntPriceEstimation";
import { Check2All } from "react-bootstrap-icons";

export const metadata = {
  title: "Compare Authkey's BSP vs TSP | WhatsApp Pricing Plans",
  description:
    "Learn about Authkey's BSP and TSP WhatsApp pricing plans. Understand the differences in features and pricing to select the best plan for your needs.",
  alternates: {
    canonical: "https://authkey.io/whatsapp-business-api/TSP-vs-BSP",
  },
};

const whatsapp = () => {
  return (
    <div>
      <section className="hero herowhatsapp">
        <div className="container">
          <div className="row d-flex align-items-center text-center">
            <div className="col-lg-11  mr-auto ml-auto py-5">
              <h1>
                Authkey’s BSP and TSP Pricing plans for WhatsApp API
              </h1>

              <p>Authkey is an official Technical Service Provider (TSP) for the WhatsApp Business API. It has introduced TSP pricing plans that facilitate connections between customers and Meta for WhatsApp API services.
              </p>
              <p>Additionally, Authkey offers its Business Solution Provider (BSP) pricing plan. Learn more about the TSP and BSP pricing plans in the following section.</p>
              <div className="api-buttons apinbtns WhatsUpBtn mt-4">
                <a className="btn btn-primary" href="https://Authkey.io/whatsapp-business-api/pricing">BSP Price</a>
                <a href="https://Authkey.io/whatsapp-business-api/int/pricing" className="btn btn-lg outline-btn">TSP Price</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-5 pb-2">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 text-center mb-2">
              <h2>BSP and TSP Pricing Plans</h2>
            </div>
            <div className="col-md-12 whatsapp_priceindia">
              <table className="table table_left tabwdth whatsappTab">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">TSP Pricing Plan</th>
                    <th scope="col">BSP Pricing Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Feature">Role</td>
                    <td data-label="TSP Pricing Plan">Technical Service Provider (TSP)</td>
                    <td data-label="BSP Pricing Plan">Authkey’s BSP Plan</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">Function</td>
                    <td data-label="TSP Pricing Plan">Provides technical infrastructure (interface) and support for integrating the WhatsApp Business API with Meta's platform. </td>
                    <td data-label="BSP Pricing Plan">Manages the entire WhatsApp Business Account on behalf of the client, including setup, management, and billing.</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">Onboarding</td>
                    <td data-label="TSP Pricing Plan">Directly with Meta, supported by Authkey.</td>
                    <td data-label="BSP Pricing Plan">Seamless onboarding within the Authkey panel.</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">WABA management</td>
                    <td data-label="TSP Pricing Plan">Managed by the client, with technical support from Authkey.</td>
                    <td data-label="BSP Pricing Plan">Fully managed by Authkey.</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">Billing</td>
                    <td data-label="TSP Pricing Plan">Handled by Meta, with charges billed via credit card transactions Plus Authkey fee.</td>
                    <td data-label="BSP Pricing Plan">Simplified billing through Authkey's prepaid-based pricing. No credit card is required.</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">Customization</td>
                    <td data-label="TSP Pricing Plan">Technical support and integration assistance.</td>
                    <td data-label="BSP Pricing Plan">Customizable service packages and additional features.</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">Payment Structure</td>
                    <td data-label="TSP Pricing Plan">Charges are based on Meta's pricing for API usage.</td>
                    <td data-label="BSP Pricing Plan">Transparent, platform-based pricing with no hidden fees.</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">Support</td>
                    <td data-label="TSP Pricing Plan">Technical support for integration issues.</td>
                    <td data-label="BSP Pricing Plan">Comprehensive support, including account setup and maintenance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container py-5">
          <h2 className="text-center">
            TSP Pricing Plans
          </h2>
          <div className="row">
            <div className="col-md-12 text-center">
              <WhatsAppIntPriceEstimation />
              <a href="https://Authkey.io/whatsapp-business-api/int/pricing" className="btn greenfullbtn btnTSP mt-4">TSP Pricing Plans</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="py-6 pynone px-4 sticky-top">
                <h3 className="mb-2">Authkey as a TSP for WhatsApp Business API</h3>
                <p>
                  Authkey is an official technical service provider TSP of META that simplifies the integration and management of the WhatsApp Business API for businesses of all sizes. Here’s how Authkey facilitates this process:
                </p>
                <a href="https://console.Authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="linebox"><div className="circle-fill-main  circle-fill-gray"><div className="circle-fill circle-fill-gray"></div></div></div>
              <div className="crdbox px-4 py-4 ">
                <h4><img src='/img/whatsapp/whatsapp_account.png' alt='Middleware Functionality' className="iconic" /> Middleware Functionality:</h4>
                <p>Authkey serves as the middleware, seamlessly connecting your business to Meta's services via the WhatsApp Business API. This connection is vital for ensuring that your messages are delivered efficiently to your customers.</p>

              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/whatsapp/cpanel.png' alt='Onboarding Process' className="iconic" /> Onboarding Process:</h4>
                <p>The embedded onboarding process with Authkey is simple and user-friendly. It begins with Meta's Facebook business manager and leads to a WhatsApp Business Account (WABA). This account is managed by you, providing complete control over your business communications on WhatsApp.</p>
              </div>
              <div className="crdbox px-4 py-4 pb-5">
                <h4><img src='/img/whatsapp/bill.png' alt='Billing and Charges' className="iconic" />  Billing and Charges:</h4>
                <p>The financial aspects of using the WhatsApp Business API are handled by both Meta and Authkey. Meta manages the billing for WhatsApp conversations via credit card transactions. On the other hand, Authkey charges for platform services per message, which may include message templates, advanced analytics, and other value-added features that enhance your communication strategy.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container py-5">
          <div className="row d-flex align-items-center">

            <div className="col-md-12 text-center">
              <h2 className="mb-2">Why Choose Authkey as Your TSP?</h2>
              <p>Choosing Authkey as your Technical Service Provider comes with several benefits:</p>
              <div className="row mt-4">
                <div className="col-md-4 mb-4">
                  <div className="smscornerbox">
                    <h5>Expertise:</h5>
                    <p>Authkey specializes in CPaaS (Communication Platform as a Service) solutions, ensuring that you receive expert support and guidance throughout the integration process.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="smscornerbox">
                    <h5>Seamless Integration:</h5>
                    <p>The middleware provided by Authkey ensures a smooth connection between your business systems and Meta's services, allowing for efficient message delivery and management.</p>

                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="smscornerbox">
                    <h5>Comprehensive Services:</h5>
                    <p>Authkey offers a range of additional services, including multi-channel messaging support (SMS, voice, email), detailed analytics, and live customer support.</p>
                  </div>
                </div>

              </div>
              <p>The process requires a reliable Technical Service Provider like Authkey, which offers the necessary middleware and support to connect your business with Meta's services. By managing the onboarding process, handling billing, and providing additional services, Authkey ensures that your experience with the WhatsApp Business API is efficient, secure, and cost-effective.
              </p>
              <p>If you're looking to leverage the power of the WhatsApp Business API, consider partnering with Authkey as your TSP. With a robust platform and expert support, Authkey can help you unlock new opportunities for customer engagement and business growth.</p>

            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 mb-4">
              <h2>BSP Pricing Plans</h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4 mb-4">
              <div className="whatsappInBox whatsappBox1 channelyellow pricehgt">
                <div className="whatsappCircle">
                  <img src="/img/price/startup.png" alt="Startup Plan" />
                </div>
                <div className="whatsappIntTitle text-center">Startup Plan</div>
                <div className="whatsappPrice text-center bordernone">
                  Zero cost
                </div>
                <p className="mb-4">Zero Fee | No setup Cost</p>
                <p>
                  All startups are welcome to board Authkey’s WhatsApp Business
                  messaging at
                </p>
                <ul className="freeplan greentick">
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    WhatsApp Business account setup
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Send whatsapp message from api
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Marketing Campaigns
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="whatsappInBox whatsappBox2 channelorange pricehgt">
                <div className="whatsappCircle">
                  <img src="/img/price/basic.png" alt="Startup Plan" />
                </div>
                <div className="whatsappIntTitle text-center">Basic</div>
                <div className="whatsappPrice text-center mb-3 bordernone">
                  Rs. 999 / month
                </div>
                <div className="pricebg text-center mb-4 whitext">
                  Rs.9999 Annually
                </div>
                <p className="mb-3 whitext">The plan includes the setup fee</p>
                <ul className="freeplan greentick">
                  <li className=" whitext">
                    <span>
                      <Check2All />
                    </span>
                    Live Chat Dashboard
                  </li>
                  <li className=" whitext">
                    <span>
                      <Check2All />
                    </span>
                    Webhooks
                  </li>
                  <li className=" whitext">
                    <span>
                      <Check2All />
                    </span>
                    Dedicated Account manager
                  </li>
                  <li className=" whitext">
                    <span>
                      <Check2All />
                    </span>
                    1200 Messages / Minute
                  </li>
                  <li className=" whitext">
                    <span>
                      <Check2All />
                    </span>
                    IP whitelisting
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mb-4 text-center">
              <div className="whatsappInBox whatsappBox3 channelgreen pricehgt">
                <div className="whatsappCircle">
                  <img src="/img/price/enterprise.png" alt="Startup Plan" />
                </div>
                <div className="whatsappIntTitle text-center">
                  Enterprise Plan
                </div>
                <div className="price_txt text-center mt-4 mb-4">
                  <span className="green_pricetxt">Custom</span>
                </div>
                <p className="mb-4">
                  Let's discuss business needs. We will plan to fulfill at best
                </p>
                <ul className="freeplan greentick">
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Personalized features
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    Best in market pricing
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    For High volume traffic
                  </li>
                  <li>
                    <span>
                      <Check2All />
                    </span>
                    High priority customer support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12 text-center">
              <a href="https://Authkey.io/whatsapp-business-api/pricing" className="btn greenfullbtn btnTSP text-center">BSP Pricing Plans</a>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="container pt-0 pb-4 px-3 text-center">
          <div className="row d-flex align-items-center">
            <div className="col-md-10  mr-auto ml-auto">
              <div className="smscornerbox">
                <h3 className="mb-2">Authkey: Your BSP for WhatsApp Business API</h3>
                <p>Authkey’s BSP plan facilitates the integration and management of business services on behalf of clients. For WhatsApp Business API, Authkey’s BSP plan simplifies the process of setting up and managing a WhatsApp Business Account (WABA) and ensures that businesses can effectively utilize the platform for communication with their customers.</p>
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
                <h3 className="mb-2">Authkey as a BSP for WhatsApp Business API</h3>
                <p>
                  Authkey is a dedicated BSP that offers a smooth experience for businesses looking to integrate the WhatsApp Business API. Here’s how Authkey simplifies the process:
                </p>
                <a href="https://console.Authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="linebox"><div className="circle-fill-main  circle-fill-gray"><div className="circle-fill circle-fill-gray"></div></div></div>
              <div className="crdbox px-4 py-4 ">
                <h4><img src='/img/whatsapp/whatsapp_account.png' alt='Middleware Functionality' className="iconic" /> WhatsApp Account (WABA) Creation:</h4>
                <p>Authkey takes the hassle out of setting up a WhatsApp Business Account. On your behalf, Authkey creates and manages your WhatsApp Account on Meta’s platform. This ensures that you have direct access to the WhatsApp API without dealing with the complexities of setup.
                </p>
              </div>
              <div className="crdbox px-4 py-4">
                <h4><img src='/img/whatsapp/cpanel.png' alt='Onboarding Process' className="iconic" /> Seamless Onboarding:</h4>
                <p>The onboarding process is integrated directly within the Authkey panel, providing a smooth and user-friendly experience. Once the account is set up, you'll have a WhatsApp Business Account managed by Authkey on Meta's platform, giving you access to all the features and capabilities of the WhatsApp Business API.
                </p>
              </div>
              <div className="crdbox px-4 py-4 pb-5">
                <h4><img src='/img/whatsapp/bill.png' alt='Billing and Charges' className="iconic" /> Simplified Billing and Payments:</h4>
                <p>One of the standout benefits of using Authkey as your BSP is the streamlined billing process. Unlike the traditional model that often requires credit card payments, Authkey offers a simplified platform-based pricing structure. This approach eliminates the need for credit cards, making it more straightforward to manage payments.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container py-5">
          <div className="row d-flex align-items-center text-center">
            <div className="col-md-12">
              <h3 className="mb-2"> Why Choose Authkey as Your BSP?</h3>
              <p>Choosing Authkey as your Business Service Provider offers several advantages:</p>
              <div className="row mt-4">
                <div className="col-md-3 mb-4">
                  <div className="smscornerbox">
                    <h5>Expert Management:</h5>
                    <p>Authkey manages all aspects of your WhatsApp Business Account, from setup to daily operations, allowing you to focus on your core business activities.</p>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="smscornerbox">
                    <h5>Ease of Use:</h5>
                    <p>With the seamless onboarding process and integrated panel, getting started with the WhatsApp Business API has never been easier.</p>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="smscornerbox">
                    <h5>Transparent Pricing: </h5>
                    <p>Authkey’s platform-based pricing model provides clear and straightforward billing, helping you avoid unexpected costs and manage your budget effectively.</p>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="smscornerbox">
                    <h5>Comprehensive Support:</h5>
                    <p>Authkey offers support and guidance throughout the process, ensuring that your integration with the WhatsApp Business API is smooth and successful.</p>
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
export default whatsapp;
