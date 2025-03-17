import { ArrowRight } from "react-bootstrap-icons";
import SignupComponent from "../../../../components/SignupComponent";
import CountryWisePricing from "../../../../components/CountryWisePricing";

export const metadata = {
  title: "Authkey : Simple & Flexible SMS Pricing | OTP Pricing",
  description:
    "Know more about SMS pricing to send SMS OTP in your country. Talk to an expert to schedule demo and customised sms plan",
  alternates: {
    canonical: "https://authkey.io/pricing/sms",
  },
};

const SmsPricing = () => {
  return (
    <div>
      <div className="hero herocontainer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center pb-5">
              <h1>
                Simple & <br />{" "}
                <span className="orange_txtcolor"> Flexible SMS </span>
                <span className="voilet_txtcolor"> Pricing</span>{" "}
              </h1>
              <p className="mt-4">
                {" "}
                Pay As You Go. No Hidden Setup Fees. Forever Free To Use
                Platform.{" "}
              </p>
              <div className="bg_transparent mt-2 mb-5">
                <a href="#worldwideSMSPrice" className="bg_linktransparent">
                  Worldwide SMS Pricing <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-4">
        <div className="container pricing ">
          <div className="row justify-content-center mb-5">
            <div className="col-md-12">
              <ul className="price-link">
                <li className="active">
                  <a href="/pricing/sms">SMS</a>
                </li>
                <li>
                  <a href="/pricing/voice">Voice</a>
                </li>
                <li>
                  <a href="/pricing/email">Email</a>
                </li>
                <li>
                  <a href="/whatsapp-business-api/pricing">Whatsapp</a>
                </li>
              </ul>

              <div className="table-responsive">
                <table className="table table-hover mt-2 my-0">
                  <tbody>
                    <tr style={{ borderTop: 0 + "px" }}>
                      <th> SMS Quantity </th>
                      <th> Per Pack </th>
                      <th> Per SMS </th>
                      <th> DLT Scrubing Per SMS </th>
                      <th> Buy Now </th>
                    </tr>

                    <tr>
                      <td>5,000 Messages </td>
                      <td>Rs.1,770</td>
                      <td>27.5 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          {" "}
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>10,000 Messages </td>
                      <td>Rs.3,186 </td>
                      <td>24.5 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          {" "}
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>25,000 Messages </td>
                      <td>Rs.6,785 </td>
                      <td>20.5 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>50,000 Messages </td>
                      <td>Rs.12,390 </td>
                      <td>18.5 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          {" "}
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>1,00,000 Messages </td>
                      <td>Rs.18,880 </td>
                      <td>13.5 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>5,00,000 Messages </td>
                      <td>Rs.88,500 </td>
                      <td>12.5 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          {" "}
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>10,00,000 Messages </td>
                      <td>Rs.1,71,100</td>
                      <td>12 paisa </td>
                      <td>2.5 paisa </td>
                      <td>
                        {" "}
                        <a href="https://console.authkey.io/signup">
                          {" "}
                          <span className="price-button">Contact Sales</span>
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor" id="worldwideSMSPrice">
        <div className="container pt-5 pb-5">
          <div className="row mb-3 justify-content-center">
            <div className="col-md-10 text-center">
              <h2>Worldwide SMS Pricing</h2>

              <div className="border_bar"></div>
              <h6 className="mt-3">
                Get Discounts from{" "}
                <span className="orange_txtcolor">50,000 SMS</span>
              </h6>
            </div>
          </div>
          <CountryWisePricing />
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h2 className="mt-5">
                {" "}
                Choose from flexible month-to-month or annual plans{" "}
              </h2>
              <p>
                Small team? Big team? Just-right team? Whether you have one
                dedicated Authkey Services give you entire company to log in,
                we've got you covered.
              </p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <SignupComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmsPricing;
