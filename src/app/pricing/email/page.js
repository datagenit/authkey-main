import SignupComponent from '../../../../components/SignupComponent';

export const metadata = {
  title: "Email Pricing | Get free emails | Authkey.io",
  description: "Learn more about email pricing. Start with free email plan that provide you 62000 emails/per month. Expand your email plan as business needs.",
  alternates: {
    canonical: "https://authkey.io/pricing/email",
  },
};


const EmailPricing = () => {
    return (
        <div>
           <div className="hero herocontainer">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 text-center pb-5">
                    <h1>
                      Simple & <br />{" "}
                      <span className="orange_txtcolor"> Flexible Email </span>
                      <span className="voilet_txtcolor"> Pricing</span>{" "}
                    </h1>
                    <p className="mt-4">
                      {" "}
                      Pay As You Go. No Hidden Setup Fees. Forever Free To Use
                      Platform.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

      <section className="slice pt-lg-6 pb-0">
        <div className="container pricing ">
          <div className="row justify-content-center mb-5">
            <div className="col-md-12">
              <ul className="price-link">
                <li>
                  <a href="/pricing/sms">SMS</a>
                </li>
                <li>
                  <a href="/pricing/voice">Voice</a>
                </li>
                <li className="active">
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
                    <th> Email Quantity </th>
                    <th> Per Email </th>
                    <th> Per Pack </th>
                    <th> GST </th>
                    <th> Buy Now </th>
                  </tr>

                  <tr>
                    <td> 10,000 Email </td>
                    <td>20 paisa</td>
                    <td>Rs.2000</td>
                    <td>18%</td>
                    <td>
                      <a href="https://console.authkey.io/signup"> 
                        <span className="price-button">Sign up</span>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td> 50,000 Email </td>
                    <td>15 paisa</td>
                    <td>Rs.7500</td>
                    <td>18%</td>
                    <td>
                    <a href="https://console.authkey.io/signup"> 
                        <span className="price-button">Sign up</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td> 1 Lac Email </td>
                    <td>10 paisa</td>
                    <td>Rs.10000</td>
                    <td>18%</td>
                    <td>
                    <a href="https://console.authkey.io/signup"> 
                        <span className="price-button">Sign up</span>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h2 className="mt-4">
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
}

export default EmailPricing;