"use client";
import { IoIosArrowDropdown } from "react-icons/io";
import { HiExclamationCircle } from "react-icons/hi";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Tooltip from "../../../../components/Tooltip";

const Plancollapse = () => {
  const [activePlan, setActivePlan] = useState(null);

  const toggleCollapse = (plan) => {
    setActivePlan(activePlan === plan ? null : plan);
  };

  return (
    <div className="container py-5 planMob">
      <div className="row justify-content-center gap-4 flex-column flex-lg-row">

        <div className="col-lg-4 planlaptop greenPlan d-flex align-items-start flex-column p-4 pt-5 position-relative mt-5 mb-5">
          <div className="position-absolute top_up end-0 badge badgeWhite greenPlan">
            Starter
          </div>
          <div className="mb-auto btn-block">
          <h6 className="whatsappIntTitle">Startup Plan</h6>
          <p className="mt-2">For businesses just getting started.</p>
          <h3 className="mt-2 mb-4 d-flex align-items-end">
            <span className="display-4 fw-bold">₹ 0</span>
            <Tooltip
              tooltipText="Additional charges apply for conversations."
              linkText="View Rate Card"
              linkHref="/rate-whatsapp.xlsx"
            >
              <HiExclamationCircle size={18} className="ml-3" />
            </Tooltip>
            <span className="ms-2">&nbsp;</span>
          </h3>
          <button
            className="btn btn-outline-dark d-lg-none btn-block"
            onClick={() => toggleCollapse("starter")}
          >
            {activePlan === "starter" ? "Hide Features" : "Show Features"} <IoIosArrowDropdown size={20} />
          </button>
          <div className={`mt-3 ${activePlan === "starter" ? "" : "d-none d-lg-block"}`}>
            <ul className="list-unstyled bgreenPlan">
              <li className="d-flex mb-2">
                <FaCheck /> Dedicated User Account
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> WhatsApp Business Account Setup
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> WhatsApp API Access
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> WhatsApp Broadcast campaigns (Unlimited)
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Broadcast Multimedia Messages
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Ads to WhatsApp
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Business CRM Integration
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Green Tick Assistance
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Live Reports (Downloadable)
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> 1000 Free Conversations
              </li>
            </ul>
            </div>
          </div>
          <a className="mt-3 btn btn-primary btn-block" href="https://console.authkey.io/signup?utm_source=wt+pricing+page&utm_medium=Startup+Plan">Choose Plan</a>
        </div>


        <div className="col-lg-4 planlaptop orangePlan p-4 pt-5 position-relative mt-4 mb-4">
          <div className="position-absolute top_up leftcalPlan badge badgeWhite orangePlan">
            Popular
          </div>
          <h6 className="whatsappIntTitle">Growth Plan</h6>
          <p className="mt-2">Designed for scaling businesses.</p>
          <h3 className="mt-2 mb-4 d-flex align-items-end">
            <span className="display-4 fw-bold">₹ 999</span>
            <span className="text-muted ms-2">/month</span>
            <Tooltip
              tooltipText="Additional charges apply for conversations."
              linkText="View Rate Card"
              linkHref="/rate-whatsapp.xlsx"
            >
              <HiExclamationCircle size={18} className="ml-3" />
            </Tooltip>
          </h3>
          <button
            className="btn btn-outline-dark d-lg-none btn-block"
            onClick={() => toggleCollapse("growth")}
          >
            {activePlan === "growth" ? "Hide Features" : "Show Features"} <IoIosArrowDropdown size={20} />
          </button>
          <div className={`mt-3 ${activePlan === "growth" ? "" : "d-none d-lg-block"}`}>
            <ul className="list-unstyled bgreenPlan">
              <li className="d-flex mb-2">
                <FaCheck /> Live Chat Dashboard
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> WhatsApp Conversations Inbox
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> 1 Free Agent Account
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Chatbot, Catalog & Flows
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Fallback Failure Safe
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Webhooks
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Dedicated Account Manager
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> SMS & Email Integration
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> 1200 Messages / Minute
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> IP Whitelisting
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Third-Party Integrations (Shopify, Pabbly, etc.)
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Live Support
              </li>
            </ul>
          </div>
          <a className="mt-3 btn btn-primary btn-block" href="https://console.authkey.io/signup?utm_source=wt+pricing+page&utm_medium=Growth+Plan">Choose Plan</a>
        </div>

  
        <div className="col-lg-4 planlaptop yellowPlan d-flex align-items-start flex-column p-4 pt-5 position-relative mt-5 mb-5">
          <div className="position-absolute top_up rightCalPlan badge badgeWhite yellowPlan">
            Enterprise
          </div>
          <div className="mb-auto">
          <h6 className="whatsappIntTitle">Premium Plan</h6>
          <p className="mt-2">Custom solutions for large-scale operations.</p>
          <h3 className="mt-2 mb-4 d-flex align-items-end">
            <span className="display-4 fw-bold">Let's Talk</span>
          </h3>
          <button
            className="btn btn-outline-dark d-lg-none btn-block"
            onClick={() => toggleCollapse("enterprise")}
          >
            {activePlan === "enterprise" ? "Hide Features" : "Show Features"} <IoIosArrowDropdown size={20} />
          </button>
          <div className={`mt-3 ${activePlan === "enterprise" ? "" : "d-none d-lg-block"}`}>
            <ul className="list-unstyled bgreenPlan">
              <li className="d-flex mb-2">
                <FaCheck /> Personalized Features
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> Best in Market Pricing
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> High Volume Traffic
              </li>
              <li className="d-flex mb-2">
                <FaCheck /> High Priority Customer Support
              </li>
            </ul>
          </div>
          </div>
          <a className="mt-3 btn btn-primary btn-block" href="https://console.authkey.io/signup?utm_source=wt+pricing+page&utm_medium=Premium+Plan">Choose Plan</a>
        </div>
      </div>
    </div>
  );
};

export default Plancollapse;