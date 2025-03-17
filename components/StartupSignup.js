
"use client";
import React, { Component } from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const gst_api_response = {
  Gst_Details: {
    result: {
      lgnm: "DATAGEN INTERNET SERVICES PRIVATE LIMITED",
      stj: "State - Delhi,Zone - Zone 4,Ward - Ward 64 (Jurisdictional Office)",
      dty: "Regular",
      cxdt: "",
      gstin: "07AAGCD1543A1Z9",
      nba: [
        "Supplier of Services",
        "Recipient of Goods or Services",
        "Wholesale Business",
        "Retail Business",
      ],
      ekycVFlag: "Not Applicable",
      cmpRt: "NA",
      rgdt: "15/07/2017",
      ctb: "Private Limited Company",
      pradr: {
        adr: "UNIT NO-1211 AND 1212, 12th FLOOR, Best Sky Tower, NETAJI SUBHASH PLACE, New Delhi, North West Delhi, Delhi, 110034",
      },
      sts: "Active",
      tradeNam: "DATAGEN INTERNET SERVICES PRIVATE LIMITED",
      ctj: "Commissionerate - DELHI WEST,Division - PITAMPURA,Range - RANGE - 102",
      ntcrbs: "SPO",
      adhrVFlag: "Yes",
      isFieldVisitConducted: "No",
      adhrVdt: "24/07/2022",
      bzsdtls: [
        {
          saccd: "00440604",
          sdes: "PROMOTION OR MARKETING OF BRAND OF GOODS OR SERVICES OR EVENTS SERVICE",
        },
      ],
    },
  },
};

const FreeEmailProvider = [
  "protonmail",
  "titan",
  "outlook",
  "gmail",
  "yahoo!",
  "icloudmail",
  "zohomail",
  "trashmail",
  "gmx",
  "vasqa",
  "ema-sofia",
  "globalmailexchange",
  "lycos",
  "tbuildersw",
  "tutanota",
  "mail",
  "safe-mail",
  "hushmail",
  "mozillathunderbird",
  "fastmail",
  "aolmail",
  "rackspaceemail",
  "yandex",
  "airmail",
  "mailgun",
  "mailfence",
  "posteo",
  "soverin",
  "disroot",
  "startmail",
  "mailto",
  "fexpost",
  "fexbox",
  "mailbox",
  "rover",
  "inpwa",
  "intopwa",
  "tofeat",
  "chitthi",
  "boxomail",
  "live",
  "rocketestate724",
  "cloud-mail",
];

class StartupSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      mobile: "",
      password: "",
      currency: "INR",
      domainName: "",
      gstNumber: "",
      otp: "",
      emailotp: "",
      countryCode: "91",
      loginScreen: true,
      otpScreen: false,
      isLoading: true,
      successMessage: false,
      signupDone: false,
      errorMessage: "",
      bgColor: "",
    };
  }

  checkFreeEmail = () => {
    let matchdata = [];
    for (let i = 0; i <= FreeEmailProvider.length - 1; i++) {
      if (this.state.email.includes(FreeEmailProvider[i]) === true) {
        matchdata.push(FreeEmailProvider[i]);
      } else {
      }
    }
    return matchdata;
  };

  signup() {
    const signup = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      mobile: this.state.mobile,
      country_code: this.state.countryCode,
      currency: this.state.currency,
      gst_api_response: gst_api_response,
      gst_number: this.state.gstNumber,
      domain: this.state.domainName,
      method: "send",
    };

    let matchdata = this.checkFreeEmail();
    console.log(matchdata);
    this.setState({ isLoading: false });
    fetch("https://console.authkey.io/api/signup_gst.php", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    }).then((result) => {
      result.json().then((resp) => {
        //  console.log(resp);
        if (resp.success === true) {
          if (matchdata.length > 0) {
            this.setState({
              successMessage: true,
              isLoading: true,
              bgColor: "alert alert-danger d-block w-100 alert-dismissible",
              errorMessage:
                "Free email service provider not allowed in startup plan : " +
                matchdata[0],
            });
          } else {
            this.setState({
              loginScreen: false,
              isLoading: true,
              otpScreen: true,
              successMessage: false,
            });
          }
        } else {
          this.setState({
            successMessage: true,
            isLoading: true,
            bgColor: "alert alert-danger d-block w-100 alert-dismissible",
            errorMessage: resp.message,
          });
        }
      });
    });
  }

  VerifyMobile() {
    document.querySelector("body").scrollTo(0, 0);
    var url = document.location.href;
    const signup = {
      email: this.state.email,
      name: this.state.name,
      mobile: this.state.mobile,
      password: this.state.password,
      country_code: this.state.countryCode,
      currency: this.state.currency,
      method: "verify",
      otp: this.state.otp,
      emailotp: this.state.emailotp,
      gst_api_response: gst_api_response,
      gst_number: this.state.gstNumber,
      domain: this.state.domainName,
    };
    this.setState({ isLoading: false });
    fetch("https://console.authkey.io/api/signup_gst.php", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    }).then((result) => {
      result.json().then((resp) => {
        if (resp.success === true) {
          this.setState({
            successMessage: false,
            loginScreen: false,
            otpScreen: false,
            signupDone: true,
            isLoading: true,
          });
          resp["url"] = url;
          localStorage.setItem("login", JSON.stringify(resp));
          localStorage.setItem("admin", JSON.stringify({ success: false }));
          setTimeout(function () {
            window.location = "/startup-signup-success";
          });
        } else {
          this.setState({ successMessage: true, isLoading: true });
          this.setState({
            bgColor: "alert alert-danger d-block w-100 alert-dismissible",
          });
          this.setState({ errorMessage: resp.message });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <div className="">
          {this.state.loginScreen ? (
            <div className="transition-shadow">
              <form
                id="singupData"
                className="form-row startupsignup mb-3 mt-3"
              >
                {this.state.successMessage ? (
                  <div className={this.state.bgColor} role="alert">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="">{this.state.errorMessage}</div>
                  </div>
                ) : null}

                <div className=" w-100">
                  <h6>
                  Sign up now to receive free credit worth <span className="magictxt">Rs. 2500</span> !
                  </h6>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="text"
                      onChange={(event) => {
                        this.setState({ name: event.target.value });
                      }}
                      className="form-control logininput"
                      id="input-email"
                      placeholder="Enter Business Name"
                    />
                  </div>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="email"
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                      className="form-control logininput"
                      id="input-email"
                      placeholder=" Business Email ID"
                    />
                  </div>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="text"
                      onChange={(event) => {
                        this.setState({ mobile: event.target.value });
                      }}
                      className="form-control logininput"
                      id="input-email"
                      placeholder=" Mobile Number"
                    />
                  </div>
                </div>

                {/* <div className="form-group col-md-6 mt-3">
                                    <div className="input-group">
                                        <input type="text" onChange={(event) => { this.setState({ gstNumber: event.target.value }) }} className="form-control logininput" id="input-email" placeholder="GST Number" />
                                    </div>
                                </div> */}

                <div className="form-group col-md-6 mt-2">
                  <div className="input-group">
                    <input
                      type="url"
                      onChange={(event) => {
                        this.setState({ domainName: event.target.value });
                      }}
                      className="form-control"
                      id="input-email"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>

                <div className="form-group col-md-12 mt-2">
                  <div className="input-group">
                    <input
                      type="password"
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                      className="form-control"
                      id="input-email"
                      placeholder="Enter Strong Password"
                    />
                  </div>
                </div>

                <div className="col-md-12 mt-2">
                  {this.state.isLoading ? (
                    <button
                      type="button"
                      onClick={() => this.signup()}
                      className="btn btn-block btn-sm btnprimary"
                    >
                      {" "}
                      Create an Account{" "}
                      <ArrowRight></ArrowRight>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-block btn-sm btn-primary"
                    >
                      <span className="spinner-border text-white spinner-border-sm"></span>{" "}
                      Please Wait..
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : null}

          {this.state.otpScreen ? (
            <>
              <form className="card-body shadow" id="otp-verify-form">
                <div className="mb-3 text-left login-box">
                  <h5 className="alert alert-success">
                    We have sent 6 digit OTP on your{" "}
                    {this.state.countryCode === "91"
                      ? "Mobile & Email"
                      : "Email"}{" "}
                  </h5>
                </div>
                <span className="clearfix"></span>

                {this.state.countryCode === "91" ? (
                  <div className="form-group">
                    <div className="">
                      <input
                        type="email"
                        onChange={(event) => {
                          this.setState({ otp: event.target.value });
                        }}
                        className="form-control"
                        placeholder="Enter Mobile OTP"
                        id="input-email"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="form-group">
                  <div className="">
                    <input
                      type="email"
                      onChange={(event) => {
                        this.setState({ emailotp: event.target.value });
                      }}
                      className="form-control"
                      placeholder="Enter Email OTP"
                      id="input-email"
                    />
                  </div>
                </div>

                {this.state.isLoading ? (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => this.VerifyMobile()}
                      className="btn btn-block btn-primary"
                    >
                      Verify Account
                    </button>
                  </div>
                ) : (
                  <button type="button" className="btn btn-block btn-primary">
                    <span className="spinner-border text-white spinner-border-sm"></span>{" "}
                    Please Wait..
                  </button>
                )}
              </form>
            </>
          ) : null}

          {this.state.signupDone ? (
            <div className="text-center">
              <div className="card-body">
                <img
                  alt="Empty Data"
                  style={{ width: "100px" }}
                  src="img/signupDone.gif"
                />
                <p>
                  Your account has been created successfully, Please find login
                  credentials on your email.
                </p>
                <a className="btn btn-primary btn-sm" to="login">
                  Login To Account
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default StartupSignup;
