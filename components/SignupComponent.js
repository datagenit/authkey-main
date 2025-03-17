"use client";
import React, { Component } from "react";
import Select from "react-select";
import { getAllCountryList } from "./Api";
class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      mobile: "",
      password: "",
      allCountryList: [],
      otp: null,
      countryCode: "",
      otpScreen: true,
      successMessage: false,
      isLoading: true,
      isLoadingto: true,
      errorMessage: "",
      bgcolor: "",
    };
  }

  signUpIndia() {
    const signup = {
      email: this.state.email,
      name: this.state.name,
      mobile: this.state.mobile,
      password: this.state.password,
      method: "send",
      source: "get-free-trial",
      country_code: this.state.countryCode,
    };
    this.setState({ isLoading: false });
    fetch("https://console.authkey.io/api/signup_india.php", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp.success);
        if (resp.success === true) {
          this.setState({
            otpScreen: false,
            successMessage: false,
            isLoading: true,
            bgcolor: "alert alert-danger alert-dismissible",
          });
        } else {
          this.setState({ successMessage: true, isLoading: true });
          this.setState({ bgcolor: "alert alert-danger alert-dismissible" });
          this.setState({ errorMessage: resp.message });
        }
      });
    });
  }

  componentDidMount() {
    this.getAllCountryList();
  }

  getAllCountryList() {
    getAllCountryList().then((result) => {
      let allCountryList = [];
      let resultdata = result.data;
      if (resultdata.success === true) {
        for (var i = 0; i < resultdata.data.length; i++) {
          allCountryList.push({
            label: resultdata.data[i].country_name,
            value: resultdata.data[i].country_code,
          });
        }
        this.setState({
          allCountryList: allCountryList,
        });
      } else {
        this.setState({
          successMessage: true,
          bgColor: "alert alert-danger alert-dismissible",
          errorMessage: resultdata.message,
        });
      }
    });
  }

  handleChange = (selectedCountry) => {
    // console.log(selectedCountry)
    this.setState({
      countryCode: selectedCountry.value,
    });
  };

  VerifyMobile() {
    const signup = {
      email: this.state.email,
      name: this.state.name,
      mobile: this.state.mobile,
      password: this.state.password,
      method: "verify",
      otp: this.state.otp,
      source: "get-free-trial",
      country_code: this.state.countryCode,
    };
    this.setState({ isLoading: false });
    fetch("https://console.authkey.io/api/signup_india.php", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp.success);
        if (resp.success === true) {
          this.setState({
            loginScreen: false,
            otpScreen: false,
            signupDone: true,
            isLoadingto: true,
            successMessage: true,
            bgColor: "alert alert-success alert-dismissible",
            errorMessage:
              "Your account has been created, Please find login details on your email or phone number",
          });
          document.getElementById("singupData").reset();
          setTimeout(function () {
            window.location = "/login";
          }, 5000);
        } else {
          document.getElementById("singupData").reset();
          this.setState({ successMessage: true, isLoading: true });
          this.setState({ bgColor: "alert alert-danger alert-dismissible" });
          this.setState({ errorMessage: "Please enter your  OTP" });
        }
      });
    });
  }

  render() {
    const { selectedCountry } = this.state;
    return (
      <>
        {this.state.otpScreen ? (
          <div className="gray_box">
            <div className="">
              <form className="">
                <div id="singupData">
                  <h2 className=" border-signup">Get Free Trial</h2>

                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      {this.state.successMessage ? (
                        <div className={this.state.bgcolor} role="alert">
                          {this.state.errorMessage}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="text"
                      onChange={(event) => {
                        this.setState({ name: event.target.value });
                      }}
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="input-group mb-3 ">
                    <input
                      type="number"
                      onChange={(event) => {
                        this.setState({ mobile: event.target.value });
                      }}
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="input-group mb-3 ">
                    <input
                      type="email"
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="input-group mt-3">
                    <Select
                      value={selectedCountry}
                      onChange={this.handleChange}
                      options={this.state.allCountryList}
                      placeholder={"Enter Your Country Name"}
                      closeMenuOnSelect={true}
                      className=""
                    />
                  </div>

                  <div className="input-group-btn mt-2 mb-2">
                    {this.state.isLoading ? (
                      <div className="input-group">
                        <button
                          className="home-button btn-signup btn-block"
                          onClick={() => this.signUpIndia()}
                          type="button"
                        >
                          Free Trial
                        </button>
                      </div>
                    ) : (
                      <div className="input-group">
                        <button className="btn btn-block" type="button">
                          <span className="spinner-border text-white spinner-border-sm"></span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="">
              <div className="form-row">
                <form className="form-row" id="singupData">
                  <p>
                    Please enter the One-Time password to verify your account{" "}
                  </p>

                  {this.state.successMessage ? (
                    <div className={this.state.bgcolor} role="alert">
                      {this.state.errorMessage}
                    </div>
                  ) : null}

                  <div className="input-group col-md-12">
                    <input
                      type="text"
                      onChange={(event) => {
                        this.setState({ otp: event.target.value });
                      }}
                      className="form-control"
                      placeholder="Enter Your OTP"
                    />
                  </div>

                  <span className="input-group-btn col-md-12">
                    {this.state.isLoadingto ? (
                      <div className="input-group mt-3">
                        <button
                          className="home-button  btn-signup"
                          onClick={() => this.VerifyMobile()}
                          type="button"
                        >
                          Verify Mobile
                        </button>
                      </div>
                    ) : (
                      <div className="input-group">
                        <button className="btn btn-block" type="button">
                          <span className="spinner-border text-white spinner-border-sm"></span>
                        </button>
                      </div>
                    )}
                  </span>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SignupComponent;
