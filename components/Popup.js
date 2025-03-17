import React, { useEffect, useState } from "react";

function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 1 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const checkCookie = (name) => {
    const cookieArr = document.cookie.split("; ");
    for (let cookie of cookieArr) {
      const [cookieName] = cookie.split("=");
      if (cookieName === name) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const userCookieExists = checkCookie("imcpopup");
    if (userCookieExists) {
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setCookie("imcpopup", "yes", 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="popup-box">
        <div className="popup-size">
          <div
            className="closeButtons text-right"
            onClick={handleClosePopup}
          ></div>

          <div className="">
            <img
              className="img-fluid imgfull"
              alt="IMC"
              src="/img/home/imc.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
