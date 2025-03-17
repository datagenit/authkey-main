import SampleCode from "../../../components/SmsSampleCode";
import SignupComponent from "../../../components/SignupComponent";
export const metadata = {
    title: "Two-Factor Authentication 2FA- Authkey.io",
    description: "Two Factor Authentication 2FA solution provides an extra layer of protection via quickly and easily verifying identities with a code. Get started with 2FA service using Authkey’s multi channel API.",
    alternates: {
      canonical: "https://authkey.io/two-factor-authentication-2fa",
    },
};
const TwoFactorAuthentication = () => {
    return (
        <div>
           <section className="hero herocontainer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h1>
                <span className="voilet_txtcolor">Two-Factor</span>{" "}
                <span className="orange_txtcolor">Authentication</span> 2FA From{" "}
                <span className="voilet_txtcolor">Authkey</span>
              </h1>
              <p>
                Increase your application security and protect the online
                environment with two factor authentication (2FA). You can verify
                the identity of your users with the 2FA method because it is the
                easiest and most effective.
              </p>
              <a href="https://console.authkey.io/signup">
                <button className=" button-link mt-2">Sign up</button>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 mt-0 text-center">
              <img
                src="/img/2fa.png"
                className="img-fluid imgfull mt-5"
                alt="Two-Factor Authentication 2FA | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="slice slice-lg pt-lg-6 pb-0 ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5">
              <img alt="placeholder" src="/img/2fa-service.png" className="img-fluid " />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h2 className="mt-4"> What is 2FA? </h2>
              <p className="text-muted my-4">
                Two factor authentication (2FA) or two step verification is a
                security procedure in which a user verifies its identity to
                cross the security factor. These factors can include static
                username and password as well as the OTP to approve
                authentication.{" "}
              </p>
              <p>
                You can use two-factor authentication(2FA) to protect your
                logins from phishing, social engineering, and brute-force
                password attacks.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
    
        className="slice slice-lg pt-lg-6 pb-lg-6 pb-0 "
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="">
                <div className="pb-3">
                  <h4 className="">2FA: Why is it Important?</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    Two factor authentication (2FA) has come into play to get
                    over the diminished security. Data must be protected by
                    verifying that users who wish to access it are who they
                    claim to be. The use of 2FA two step verification can help
                    protect passwords and accounts from a variety of security
                    threats, such as phishing, brute-force attacks, credential
                    threat and more.
                  </p>

                  <p>
                    {" "}
                    Mostly the static username and password are
                    predominant-primary authentication to login into an
                    application. It is always recommended to add aa separate
                    channel like a mobile phone to complete your second factor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="pb-3">
                  <p className="text-muted mb-0 mt-5">
                    {" "}
                    Your static password can be stolen if an attacker is able to
                    tap into your computer via your Internet connection if both
                    are delivered over the same channel.{" "}
                  </p>

                  <p>
                    It is impossible for a hacker to pretend to be you so as to
                    gain unauthorized access. You rely on a 2FA device for
                    accessing information stored in applications.
                  </p>

                  <p>
                    You can prevent accessing your accounts without the physical
                    device to complete the second factor by integrating two step
                    verification into your applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-lg-6">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-12 text-center">
            <h2>What Threats Does 2FA Address?</h2>
            <p>
              Two-factor authentication(2FA) is becoming increasingly obvious
              for passwords alone are not sufficient to adequately protect user
              accounts in today's technological environment, so it necessitates
              the adoption.
            </p>
            <div className="border_bar"></div>
          </div>
        </div>

      
          <div className="row justify-content-center sms-searvies-page mt-5">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-5">
                  <div className="pt-2 pb-5">
                    <img
                      src="/img/emailicons3.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-0"> Stolen Passwords</h5>
                  <p style={{ height: 150 + "px" }} className="text-muted mt-5">
                    It is easy for anyone to crack a conventional password once
                    they get their hands on it. It is possible to steal user
                    passwords if a user writes them down on paper. Two-factor
                    authentication(2FA), however, verifies a user's identity
                    with a second device after he or she enters a password.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-5">
                  <div className="pt-2 pb-5">
                    <img
                      src="/img/emailicons4.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-0"> Conversational Hack</h5>
                  <p style={{ height: 150 + "px" }} className="text-muted mt-5">
                    In many cases, hackers simply manipulate users into
                    divulging their passwords. A hacker can earn the trust of
                    the user by pretending to be a business professional at the
                    user's company. Every login attempt after a password has
                    been entered is verified by OTPs on a secondary device.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-5">
                  <div className="pt-2 pb-5">
                    <img
                      src="/img/emailicons4.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-0"> Key Logging</h5>
                  <p style={{ height: 150 + "px" }} className="text-muted mt-5">
                    The ability to track and copy a person's password even if
                    they haven't written it down can be obtained with malware.
                    Each scope is tracked by hackers, and passwords are stored
                    so that they can use them later. The second layer of
                    validation in 2FA lets a user ensure that the login attempt
                    is their own, even if their password has been compromised.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-5">
                  <div className="pt-2 pb-5">
                    <img
                      src="/img/emailicons4.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-0">Malicious Code Attack </h5>
                  <p style={{ height: 150 + "px" }} className="text-muted mt-5">
                    It's common for hackers to attach links to emails that link
                    to malicious websites designed either to infect a computer
                    or to trick a user into divulging their passwords. By adding
                    a second layer of validation after a password has been
                    entered, 2FA combats phishing as it ensures a password can't
                    be used by another party.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-5">
                  <div className="pt-2 pb-5">
                    <img
                      src="/img/emailicons4.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-0">Brute-Force Attacks </h5>
                  <p style={{ height: 150 + "px" }} className="text-muted mt-5">
                    Hackers use brute-force attacks to generate random passwords
                    until they reach the right sequence for a specific
                    computer.Access is granted after a successful login attempt
                    is validated using 2FA's second layer of protection.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row mb-5 mt-5 justify-content-center text-center">
            <div className="col-lg-6">
              <h2 className=""> Multi Channels </h2>
              <div className="border_bar"></div>
              <div className="mt-2"></div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <h4 className=""> SMS 2FA</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    SMS based 2FA is an extra layer of security that works on
                    the OTP code to validate the user identity. The user has to
                    authenticate the code into the application.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <h4 className="">Voice 2FA </h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    Voice 2FA sends the code through the live phone call. The
                    TTS system pronounces the one time password that needs to be
                    authenticated to verify the identity.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="pb-3">
                  <h4 className="">Email 2FA</h4>
                  <p style={{ height: 150 + "px" }} className="text-muted mb-0">
                    The email 2FA works on the OTP as well as the links
                    verification service. An automated OTP is triggered via a
                    registered email ID. The email 2FA can also be used to
                    verify the link to authenticate user identity.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-secondary pt-lg-6">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="">2FA API </h2>
            <p>
              Easy integration of API enables the two factor authentication of
              2FA on desired channels. Developer friendly API with complete
              Document support.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div style={{ height: 500 + "px", overflow: "auto" }}>
                <SampleCode />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-lg-6">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className=""> Which industries use 2FA?</h2>
            <div className="border_bar"></div>
          </div>
        </div>

   
          <div className="row justify-content-center sms-searvies-page mt-5">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-5">
                  <h5 className="h4 lh-130 mb-0"> Healthcare</h5>
                  <p className="text-muted mt-5">
                    Using secure technologies, healthcare providers across the
                    globe make it possible for their clinicians and physicians
                    to access patient data from any location, at any time, and
                    from any device. As well as safeguard the client oriented
                    login based data.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body  pb-5">
                  <h5 className="h4 lh-130 mb-0"> Retail</h5>
                  <p className="text-muted mt-5">
                    Security solutions such as two-factor authentication (FFA)
                    have become increasingly important for retailers. FFA
                    enables retailers to authenticate their users' identities
                    when they access their networks from remote desktops or
                    mobile phones.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body  pb-5">
                  <h5 className="h4 lh-130 mb-0">Banking</h5>
                  <p className="text-muted mt-5">
                    2FA is used by the banking industry to protect against the
                    many hacking attempts made on the banks' internal and
                    client's systems. Authkey’s OTP-based authentication has
                    proven helpful in improving the resilience of many large
                    banks.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body  pb-5">
                  Free Trial
                  <h5 className="h4 lh-130 mb-0">Higher Education </h5>
                  <p className="text-muted mt-5">
                    Colleges,Universities and private institutions use 2FA to
                    secure their applications and student data. Institutions
                    handle thousands of sensitive user records, including
                    financial information. Hacking and malicious breaches of
                    security have been a problem for institutions with such
                    valuable data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body  pb-5">
                  <h5 className="h4 lh-130 mb-0">Social Media</h5>
                  <p className="text-muted mt-5">
                    The personal data of billions of users is protected by
                    two-factor authentication (F2FA) on social media platforms
                    and agencies worldwide. As a means of protecting their users
                    from hacking attempts on their internal networks, social
                    media companies like Facebook use push and OTP-based
                    authentication.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body  pb-5">
                  <h5 className="h4 lh-130 mb-0">Government</h5>
                  <p className="text-muted mt-5">
                    As government agencies push for cloud and mobile adoption,
                    they are being challenged to undergo major IT infrastructure
                    changes at an uncomfortable pace. Govt data and platforms
                    are always an eye catch for hackers. Users need to be
                    protected while still being able to roll out security
                    solutions in a realistic timeframe.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body  pb-5">
                  <h5 className="h4 lh-130 mb-0">Travel</h5>
                  <p className="text-muted mt-5">
                    Whenever employees need access outside of the security
                    perimeters of a company, they require a 2FA solution.
                    Firewalls are not sufficient when users need access beyond
                    the boundaries of a company.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-secondary slice slice-lg pb-lg-6 pt-lg-6 pb-0  pb-lg-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <h2 className="mt-4">
                {" "}
                Enhance Business and Account Security With{" "}
                <span style={{ background: "#fdc236", padding: 4 + "px" }}>
                  Authkey
                </span>{" "}
              </h2>
              <p className="text-muted my-4">
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

      <section 
        className="slice slice-lg pt-lg-6 pb-lg-6 pb-0 "
      >
        <div className="container ">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className=""> Why Choose Authkey ? </h2>
              <div className="border_bar"></div>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-12">
              <div className="buletpoint">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <strong> We Scale with you </strong>
                    <p>
                      {" "}
                      Regardless of one or million messages you send, our SMS
                      infrastructure will ensure you that they deliver on time.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <strong> Pay as you Go </strong>
                    <p>
                      {" "}
                      Utilization based pricing enables you to get discounted
                      pricing from the beginning while only paying for what you
                      use.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <strong> Enterprise-grade </strong>
                    <p>
                      {" "}
                      We connect your messaging flow directly over 220+ carriers
                      in 200+ countries for international delivery that is best
                      in class.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <strong> Compliance & developers</strong>
                    <p>
                      {" "}
                      We align you with the support and developer team. We
                      ensure that your Authkey.io experience is smooth and
                      successful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default TwoFactorAuthentication;