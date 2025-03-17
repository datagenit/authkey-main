import SignupComponent from "../../../components/SignupComponent";
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
export const metadata = {
    title: "Flash Call Verification API - Verify user in one call | Authkey",
    description: "A flash call verification is a fast, easy and seamless method of authenticating user within few seconds. Integrate authkey's flash call API to automate user validation.",
    alternates: {
      canonical: "https://authkey.io/flash-call-verification",
    },
  };
const FlashCallVerification = () => {
    return (
      <div>
        <section className="hero homebg">
          <div className="container">
            <div className="row d-flex align-items-center">
            
              <div className="col-md-6 order-last">
                  <img src="/img/Group-54.png" className="img-fluid" alt="Flash Call Verification" />
                </div>  
                <div className="col-md-6" >
                <h1>Flash Call Verification</h1>
                <p>Easy alternate for traditional SMS OTPs.</p>
                <a href="https://console.authkey.io/signup">
                  <button className="btn mt-4">Sign up</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sectionthird">
          <div className="container-fluid pt-5 pb-5">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <h4 className="text-center">Trusted By Brands</h4>
                <BrandsItem />
              </div>
            </div>
          </div>
        </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
          <div className="col-lg-5">
              <h2> Flash Call Verification </h2>
              <p>
                With Flash call verification, You can verify Logins in a much
                faster way while saving up to 70% on your OTPs Cost.{" "}
              </p>
              <p>
                User will receive a call and the system will identify the
                number, disconnect the same in less than 5 seconds and the login
                will be verified.
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img className="img-fluid" alt="img" src="/img/GroupVerification.png" />
            </div>
            
          </div>
        </div>
      </section>

      <section className="mt-5 fixbgColor">
        <div className="container justify-content-center pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="mb-3"> User Verification Built for Massive Scale</h2>
            </div>
          </div>
          <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                    <div className="smscornerbox">
                    <h4>Easy integration </h4>
                    <p>
                      Our tested and ready to integrate APIs and SDKs can be
                      configured in no time.
                    </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="smscornerbox">
                      <h4>Robust Infra </h4>
                      <p>
                        Verify any number of Users and Logins with huge number of
                        channels availability and scalable APIs.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                  <div className="smscornerbox">
                    <h4>No Distractions </h4>
                    <p>
                      Verify the Users by not distracting them switching between
                      different Apps and Set your Signup Conversion at higher
                      side.
                    </p>
                    </div>
                  </div>
                  <div className="col-md-6  mb-4">
                  <div className="smscornerbox heightFull">
                    <h4>Cost-effective </h4>
                    <p>Save up to 60% on your Verification Process.</p>
                  </div>
                  </div>
                </div>
              </div>
      </section>

      <section className="bg-section-secondary my-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7">
              <h3 className="mt-4">
                Enhance Business and Account Security With Authkey Flash Call Verification
              </h3>
              <p className="my-4">
                Verify solves complex development challenges so you can focus on
                the code that counts. Verify checks the user’s input matches the
                code. If they match, Verify registers the phone number as
                approved.
              </p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <SignupComponent />
            </div>
          </div>
        </div>
      </section>
         <WhyChooseAuthkey />
        </div>
    );
}

export default FlashCallVerification;