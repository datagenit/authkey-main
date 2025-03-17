"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
ArrowRight
} from "react-bootstrap-icons";


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});


const options = {
  items: 2,
  autoWidth: true,
  autoplay: true,
  stagePadding: 50,
  nav: true,
  navText: ['<', '>'],
  margin: 40,
  center: true,
  loop: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  smartSpeed: 750,
  responsiveClass:true,
  responsive:{
      480:{
        items:2,
        margin: 15,
      },
      767:{
          items:2,
          margin: 20,
      },
      991:{
          items:2,
          margin: 30,
      },
      1800:{
        items:2,
        margin: 40,
    },
  }
};


export default function Slider() {
  useEffect(() => {
    // Dynamically import jQuery
    const jquery = require('jquery');
    window.$ = window.jQuery = jquery;
  }, []);

  return (
    <div className="usecaseContainer usecaseItem">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="usecasePanel channelsms">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-e-commerce" className="usercaseItem">
              <img src="/img/whatsapp/ecommerce.webp" alt="E-commerce" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>E-commerce</h4>
              <p>Integrating WhatsApp into your e-commerce strategy can significantly enhance CX and boost sales. Automate messages and responses for common queries, order updates, Abandoned Cart Message, Purchase Completion, Order Updates and marketing campaigns.</p>     
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-e-commerce">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="usecasePanel channelvoice">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-retail-business" className="usercaseItem">
              <img src="/img/whatsapp/retail_business.png" alt="Retail" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>Retail</h4>
              <p>Retailers can boost sales with WhatsApp by providing instant support, sending personalized promotions, offering product recommendations, giving real-time order updates, gathering feedback, sharing exclusive previews, assisting with virtual shopping, and facilitating quick, secure transactions.</p> 
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-retail-business">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="usecasePanel channelemail">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-healthcare" className="usercaseItem">
              <img src="/img/whatsapp/whatsapp-healthcare.png" alt="Healthcare" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>Healthcare</h4>
              <p>WhatsApp can enhance healthcare by offering instant patient support, appointment scheduling, follow-up reminders, sharing test results, providing virtual consultations, and facilitating quick communication between medical staff and patients. This streamlines administrative tasks and improves patient engagement and care.</p>
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-healthcare">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="usecasePanel channelwhatsapp ">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-banking-finance" className="usercaseItem">
              <img src="/img/whatsapp/whatsapp-for-banking.png" alt="Finance" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>Finance</h4>
              <p>WhatsApp can streamline fintech by replacing slow paper processes with instant delivery of bank statements, account updates, credit card approvals, and payment receipts. It also supports secure customer service, real-time alerts, and quick loan applications, improving efficiency and customer experience.
              </p>
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-banking-finance">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="usecasePanel channelemail ">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-education" className="usercaseItem">
              <img src="/img/whatsapp/whatsapp-education.png" alt="Ocean" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>Education</h4>
              <p>WhatsApp can boost education by facilitating instant communication between teachers and students, sharing study materials, providing real-time feedback, group discussions, and sending assignment reminders. It streamlines learning and enhances engagement in a flexible, accessible way.</p>
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-education">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="usecasePanel channelvoice ">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-logistic" className="usercaseItem">
              <img src="/img/whatsapp/logistic-business.png" alt="Ocean" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>Logistics</h4>
              <p>WhatsApp can optimize logistics by providing real-time shipment tracking, instant communication with drivers and customers, quick updates on delivery status, coordinating schedules, and handling urgent issues efficiently. It enhances transparency and streamlines operations in the logistics chain.</p>
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-logistic">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="usecasePanel channelvoice ">
          <div className="usercasePanelbox">
            <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-logistic" className="usercaseItem">
              <img src="/img/whatsapp/realestate.png" alt="Ocean" width={417} height={400} />
            </a>
            <div className="usercaseDetail justifyCenter">
              <h4>Real Estate</h4>
              <p>WhatsApp can enhance real estate by enabling instant communication with clients, sharing property listings and virtual tours, scheduling viewings, providing real-time updates on offers and negotiations, and answering inquiries quickly. This streamlines the buying and selling process and improves client engagement.
              </p>
              <a href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-logistic">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>

      </OwlCarousel>
    </div>
  );
}