"use client";
import React, { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp } from "react-bootstrap-icons";

const RCSTabComponent = () => {
  const [showHidebox, setShowHidebox] = useState(false);

  const toggleHidebox = () => {
    setShowHidebox(!showHidebox);
  };

  return (
    <div className="container containBorder containboxfullbg mt-3 px-5 pt-4 pb-5">
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="whatsappInBox whatsappBox1 channelyellow">
            <div className="whatsappCircle">
              <img src="/img/price/startup.png" alt="starter" />
            </div>
            <div className="whatsappIntTitle text-center">Starter</div>
            <div className="whatsappPrice text-center">$0</div>
            <div className="text-center">
              <p>
                <span className="conver_txt">1000</span> Conversations/month
              </p>
              <p>
                <b>Extra conversations:</b>
                <br /> Choose Plan
              </p>
            </div>
            <a href="https://console.authkey.io/signup">
              <button className="btn btn-sm btn-orange">Sign up</button>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="whatsappInBox whatsappBox2 channelorange">
            <div className="whatsappCircle">
              <img src="/img/price/basic.png" alt="Basic" />
            </div>
            <div className="whatsappIntTitle whatsappIntTitle2 text-center">
              Basic
            </div>
            <div className="whatsappPrice text-center">$10*</div>
            <div className="text-center">
              <p>
                <span className="conver_txt">10000*</span> Conversations/month
              </p>
              <p>
                <b>Extra conversations:</b>
                <br /> $0.0014/each
              </p>
            </div>
            <a href="https://console.authkey.io/signup">
              <button className="btn btn-sm btn-orange">Sign up</button>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="whatsappInBox whatsappBox3 channelgreen">
            <div className="whatsappCircle">
              <img src="/img/price/standard.png" alt="Standard" />
            </div>
            <div className="whatsappIntTitle whatsappIntTitle3 text-center">
              Standard
            </div>
            <div className="whatsappPrice text-center">$99*</div>
            <div className="text-center">
              <p>
                <span className="conver_txt">1 Lac*</span> Conversations/month
              </p>
              <p>
                <b>Extra conversations:</b>
                <br /> $0.0012/each
              </p>
            </div>
            <a href="https://console.authkey.io/signup">
              <button className="btn btn-sm btn-orange">Sign up</button>
            </a>
          </div>
        </div>
      </div>

      {showHidebox && (
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="whatsappInBox whatsappBox4 channelgray">
              <div className="whatsappCircle">
                <img src="/img/price/pro.png" alt="Pro" />
              </div>
              <div className="whatsappIntTitle text-center">Pro</div>
              <div className="whatsappPrice text-center">$299*</div>
              <div className=" text-center">
                <p>
                  <span className="conver_txt">5 Lac*</span> Conversations/month
                </p>
                <p>
                  <b>Extra conversations:</b>
                  <br /> $0.00096/each
                </p>
              </div>
              <a href="https://console.authkey.io/signup">
                <button className="btn btn-sm btn-orange">
                  Sign up <ArrowRight></ArrowRight>
                </button>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="whatsappInBox whatsappBox5 channelblue">
              <div className="whatsappCircle">
                <img src="/img/price/premium.png" alt="Premium" />
              </div>
              <div className="whatsappIntTitle text-center">Premium</div>
              <div className="whatsappPrice text-center">$499*</div>
              <div className=" text-center">
                <p>
                  <span className="conver_txt">1 Million*</span>{" "}
                  Conversations/month
                </p>
                <p>
                  <b>Extra conversations:</b>
                  <br /> $0.00072/each
                </p>
              </div>
              <a href="https://console.authkey.io/signup">
                <button className="btn btn-sm btn-orange">
                  Sign up <ArrowRight></ArrowRight>
                </button>
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4">
            <div className="whatsappInBox whatsappBox6 channelvoilet">
              <div className="whatsappCircle">
                <img src="/img/price/enterprise.png" alt="Enterprise" />
              </div>
              <div className="whatsappIntTitle text-center">Enterprise</div>
              <div className="whatsappPrice text-center">$949</div>
              <div className="text-center">
                <p>
                  <span className="conver_txt">3 Million*</span>{" "}
                  Conversations/month
                </p>
                <p>
                  <b>Extra conversations:</b>
                  <br /> $0.00060/each
                </p>
              </div>
              <a href="https://console.authkey.io/signup">
                <button className="btn btn-sm btn-orange">
                  Sign up <ArrowRight></ArrowRight>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="row justify-content-center text-center">
        <div className="readmore" onClick={toggleHidebox}>
          {showHidebox ? "Hide" : "See More"}{" "}
          {showHidebox ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default RCSTabComponent;
