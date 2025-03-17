"use client";
import React, { useState } from 'react';

const WhatsappPreview = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  function ft() {
    const now = new Date();
    let hrs = now.getHours();
    const mnt = now.getMinutes();
    const ampm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    const mf = mnt.toString().padStart(2, "0");
    const tf = `${hrs}:${mf} ${ampm}`;
    return tf;
  }
  const wpBtn = () => {
    const td = document.getElementById("authkey-tgl");
    if (td.classList.contains("authkey-dsd")) {
      td.classList.remove("authkey-dsd");
      td.classList.add("authkey-dhd");
    } else {
      td.classList.remove("authkey-dhd");
      td.classList.add("authkey-dsd");
    }
    setIsOpen(!isOpen);
  };

  const cbtn = () => {
    const td = document.getElementById("authkey-tgl");
    if (td.classList.contains("authkey-dsd")) {
      td.classList.remove("authkey-dsd");
      td.classList.add("authkey-dhd");
    }
    setIsOpen(false);
  };

  const wpcBtn = () => {
    const url = `https://wa.me/${props.mobile_no}`;

    window.open(url, "_blank");
  };
  return (
    <div>
      <div
        className="authkey-m-d"
        style={{
          [props.position]: `${props.sidemargin}px`,
          bottom: `${props.marginbottom}px`,
        }}
      >
        <div
          id="authkey-tgl"
          className={`authkey-whatsappWindow ${
            props.wtstatus === "yes" ? "authkey-dsd" : "authkey-dhd"
          }`}
        >
          <div className="authkey-whatsappWindowShadow">
            <div
              role="button"
              id="authkey-cbtn"
              tabIndex="0"
              className="authkey-whatsappCloseIcon"
              onClick={cbtn}
            ></div>
            <div
              className="authkey-whatsappHeader"
              style={{ background: `${props.bgcolor}` }}
            >
              <div className="authkey-whatsappAvataarContainer">
                <div className="authkey-whatsappAvataar">
                  <img
                    src={props.logourl}
                    alt="user_image"
                    className="authkey-whatsappAvataarImg"
                  />
                </div>
              </div>
              <div className="authkey-whatsappHeaderInfo">
                <div className="authkey-whatsappAvataarName">
                  {props.displayname}
                </div>
                <div className="authkey-whatsappOnline">Online</div>
              </div>
            </div>
            <div className="authkey-whatsappBottomLayout">
              <div className="authkey-whatsappChatbox">
                <div className="authkey-whatsappChatLayout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="17"
                    viewBox="0 0 9 17"
                    fill="currentColor"
                    className="authkey-whatsappChatSvg"
                  >
                    <path
                      d="M0.772965 3.01404C-0.0113096 1.68077 0.950002 0 2.49683 0H9V17L0.772965 3.01404Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="authkey-whatsappChatMessage">
                    <div>{props.wltxt}</div>
                  </div>
                  <div className="authkey-whatsappChatTime">{ft()}</div>
                </div>
                <div className="authkey-whatsappBottomnext">
                  <button
                    title="WhatsApp"
                    id="authkey-wp-r-b"
                    className="authkey-whatsappBtnInline"
                    type="button"
                    tabIndex="0"
                    onClick={wpcBtn}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="17"
                      viewBox="0 0 9 17"
                      fill="currentColor"
                      className="authkey-whatsappChatSvg"
                    >
                      <path
                        d="M0.772965 3.01404C-0.0113096 1.68077 0.950002 0 2.49683 0H9V17L0.772965 3.01404Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Chat on WhatsApp<span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="authkey-branding">
              <img
                draggable="false"
                alt="âš¡"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQUMzMyIgZD0iTTMyLjkzOCAxNS42NTFDMzIuNzkyIDE1LjI2IDMyLjQxOCAxNSAzMiAxNUgxOS45MjVMMjYuODkgMS40NThjLjIxOS0uNDI2LjEwNi0uOTQ3LS4yNzEtMS4yNDNDMjYuNDM3LjA3MSAyNi4yMTggMCAyNiAwYy0uMjMzIDAtLjQ2Ni4wODItLjY1My4yNDNMMTggNi41ODggMy4zNDcgMTkuMjQzYy0uMzE2LjI3My0uNDMuNzE0LS4yODQgMS4xMDVTMy41ODIgMjEgNCAyMWgxMi4wNzVMOS4xMSAzNC41NDJjLS4yMTkuNDI2LS4xMDYuOTQ3LjI3MSAxLjI0My4xODIuMTQ0LjQwMS4yMTUuNjE5LjIxNS4yMzMgMCAuNDY2LS4wODIuNjUzLS4yNDNMMTggMjkuNDEybDE0LjY1My0xMi42NTVjLjMxNy0uMjczLjQzLS43MTQuMjg1LTEuMTA2eiIvPjwvc3ZnPg=="
                
              />
              <p>by   </p>
              <a href="https://authkey.io" target="_blank">
                {" "}
                Authkey.io
              </a>
            </div>
          </div>
        </div>

        <button
          className="authkey-whatsappBtn"
          style={{ float: `${props.position}` }}
          id="authkey-wt-btn"
          onClick={wpBtn}
        >
          <svg viewBox="0 0 32 32" className="authkey-whatsappIcon">
            <path
              d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
              fillRule="evenodd"
            ></path>
          </svg>
          <span className="authkey-whatsappLive"></span>
        </button>
      </div>
    </div>
  );
};

export default WhatsappPreview;