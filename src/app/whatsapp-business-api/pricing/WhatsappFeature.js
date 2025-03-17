"use client";
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
const WhatsappFeature = () => {

  const [showHidebox, setShowHidebox] = useState(false);
  const toggleHidebox = () => {
    setShowHidebox(!showHidebox);
  };
  return (
   
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center mb-4">
          <h2>WhatsApp Plans Features</h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Template Message APIs
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  1200 Messages/min
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Hand-held Onboarding & Setup
                </li>
              </ul>
          </div>

          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Team Inbox
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  API Integration assistance
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Business manager ID assistance
                </li>
              </ul>
          </div>

          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
              <li>
                  <span>
                  <FaCheck />
                  </span>
                  WhatsApp Business Account creation
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Multi-Agent Live Chat
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  SMS Fallback with API
                </li>
              </ul>
          </div>

          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Green tick verification & assistance
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Webhook API
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  IP whitelisting
                </li>
              </ul>
          </div>
        </div>
        {showHidebox && (
        <div className="row">
             <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Rate Limit - 300 API calls/min
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Contacts Management
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Automated Workflows
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Smart Agent Routing
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Project APIs
                </li>
              </ul>
          </div>

          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Advanced Campaign Filters
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Priority Customer Support
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Campaign Click Tracking
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Template Submission
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  1200 Messages / Minute
                </li>
              </ul>
          </div>

          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
               
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Broadcast Marketing Campaigns 
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Higher Messaging Speed
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Live Chat Dashboard
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Downloadable Reports
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Live Email Ticket Support
                </li>
              </ul>
          </div>

          <div className="col-md-3 col-lg-3">
              <ul className="freeplan greentick">
               
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Dedicated Account manager
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Campaign Scheduler
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Conversation Analytics
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  API Integrations
                </li>
                <li>
                  <span>
                  <FaCheck />
                  </span>
                  Campaign Budget Analytics
                </li>
              </ul>
          </div>
        </div>
        )}
        
        <div className="row justify-content-center text-center">
          <div className="btn greenfullbtn mt-4" onClick={toggleHidebox}>
            {showHidebox ? "Hide" : "See More"}{" "}
            {showHidebox ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatsappFeature;

