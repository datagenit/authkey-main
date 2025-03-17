"use client";
import React, {useState, useEffect } from "react";
import WhatsappWidget from "../../../components/WhatsappWidget";
import WhatsappPreview from "./WhatsappPreview";

const WhatsappChatbot = () => {
  const [whatsappno, setWhatsappno] = useState("+91xxxxxxxxxx");
  const [displayname, setDisplayname] = useState("Authkey");
  const [logoUrl, setLogoUrl] = useState(
    "https://wpgallery.s3.ap-south-1.amazonaws.com/gallery/202408/66ab6e282f789.png"
  );
  const [wtbgcolor, setWtbgcolor] = useState("#008069");
  const [welcomeText, setWelcomeText] = useState(
    "Hi there 👋, How can I help you?"
  );
  const [widgetStatus, setWidgetStatus] = useState("yes");
  const [position, setPosition] = useState("right");
  const [sideMargin, setSideMargin] = useState("20");
  const [marginBottom, setMarginBottom] = useState("20");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [responsedata, setResponseData] = useState("");
  const [copystatus, setCopyStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    if (whatsappno === "" || displayname === "" || welcomeText === "") {
      // Show some alert or error message here if required
      return;
    }

    let data = {
      user_id: 1,
      method: "create_wig",
      mobile_no: whatsappno,
      welcome_text: welcomeText,
      image_url: logoUrl,
      wig_position: position,
      back_color: wtbgcolor,
      bottom_align: marginBottom,
      side_align: sideMargin,
      default_open: widgetStatus === "yes" ? 1 : 0,
      display_name: displayname,
    };

    setIsLoading(true);
    try {
      const response = await fetch("https://napi.authkey.io/api/whatsapp_widget", {
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resp = await response.json();
     

      if (resp.success === true) {

        setSuccess(true);
        setIsLoading(true);
        setBgColor("alert alert-success alert-dismissible");

        const scriptdata = `<script src="https://console.authkey.io/js/main.js" id="authkey-chat-widget" widget-id="${resp.data}"></script>`;
        setResponseData(scriptdata);
        setDialogOpen(true);
      } else {
        setSuccess(false);
        setIsLoading(false);
        setBgColor("alert alert-danger alert-dismissible");
        console.error(resp.message);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(responsedata);
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or if success changes
    }
  }, [success]);

  return (
            <>
              <div className="whatsappFormBox">
                    <WhatsappPreview
                        mobile_no={whatsappno}
                        displayname={displayname}
                        logourl={logoUrl}
                        bgcolor={wtbgcolor}
                        wltxt={welcomeText}
                        wtstatus={widgetStatus}
                        position={position}
                        sidemargin={sideMargin}
                        marginbottom={marginBottom}
                      />
                    {success && (
                        <div className={bgColor} role="alert">
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={() => setSuccess(false)}
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div>{success ? "Widget created successfully!" : "Failed to create widget."}</div>
                        </div>
                      )}

                      
                      {/* <form > */}
                      <div className="whatsappBox3 dashborderGreen py-md-5 px-md-5 mb-5">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              WhatsApp No.<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="Enter WhatsApp No."
                              value={whatsappno}
                              onChange={(e) => setWhatsappno(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Display Name<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="Enter Display Name"
                              value={displayname}
                              onChange={(e) => setDisplayname(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Logo Url</label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="Enter logo url"
                              value={logoUrl}
                              onChange={(e) => setLogoUrl(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Background color
                            </label>
                            <input
                              type="color"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="Enter logo url"
                              value={wtbgcolor}
                              onChange={(e) => setWtbgcolor(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                              Welcome text<span style={{ color: "red" }}>*</span>
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Enter welcome text"
                              value={welcomeText}
                              onChange={(e) => setWelcomeText(e.target.value)}
                              maxLength={94}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">

                            <label>Open widget by default?</label>

                            <div className="form-check form-check-inline ml-md-5">
                                <input
                                  type="radio"
                                  id="no"
                                  name="wtopen"
                                  value="no"
                                  className="cursor-pointer form-check-input ml-1"
                                  checked={widgetStatus === "no"}
                                  onChange={(e) => setWidgetStatus(e.target.value)}
                                />
                                {" "}
                                <label htmlFor="no" className="cursor-pointer">
                                  No
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                {" "}
                                <input
                                  type="radio"
                                  name="wtopen"
                                  id="yes"
                                  value="yes"
                                  className="ml-4 cursor-pointer form-check-input"
                                  checked={widgetStatus === "yes"}
                                  onChange={(e) => setWidgetStatus(e.target.value)}
                                />
                                {" "}
                                <label htmlFor="yes" className="cursor-pointer">
                                  Yes
                                </label>
                            </div>
                         </div>

                         <div className="col-md-4 mb-4">
                            <label>Position</label>
                            <div className="chatsInput">
                            <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  id="left"
                                  name="position"
                                  value="left"
                                  className="cursor-pointer form-check-input ml-1"
                                  checked={position === "left"}
                                  onChange={(e) => setPosition(e.target.value)}
                                />
                                <label htmlFor="left" className="cursor-pointer">
                                  Left
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  name="position"
                                  id="right"
                                  value="right"
                                  className="ml-4 cursor-pointer form-check-input"
                                  checked={position === "right"}
                                  onChange={(e) => setPosition(e.target.value)}
                                />
                                <label htmlFor="right" className="cursor-pointer">
                                  Right
                                </label>
                                </div>
                            </div>
                          </div>
               
                          <div className="col-md-4 mb-4">
                              <label htmlFor="margin-bottom">
                                Up - Down:{" "}
                                <span style={{ color: "#3B7DDD" }}>{marginBottom}px</span>
                              </label>
                              <div>
                                <input
                                  type="range"
                                  className="form-range"
                                  min="0"
                                  max="300"
                                  id="margin-bottom"
                                  value={marginBottom}
                                  onChange={(e) => setMarginBottom(e.target.value)}
                                />
                              </div>
                          </div>
                          <div className="col-md-4 mb-4">
                            <label htmlFor="margin-right">
                              Left - Right:{" "}
                              <span style={{ color: "#3B7DDD" }}>{sideMargin}px</span>
                            </label>
                            <div>
                              <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="300"
                                id="margin-right"
                                value={sideMargin}
                                onChange={(e) => setSideMargin(e.target.value)}
                              />
                            </div>
                          </div>

                        </div>

                        <div className="d-flex justify-content-center mt-md-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={(e)=>handleForm(e)}
                          >
                           Generate Widget Code
                          </button>
                        </div>
                      </div>
                        {/* </form> */}

                        {/* Whatsapp widget url */}
                        <div className="container dashboarder px-3 py-4 font-weight-bold">
                        <div className="col-md-12 text-center ">
                          <h5>Copy and paste this code before the {`</Body>`} tag on desired page of your website.</h5>
                        </div>
                
                        {dialogOpen && (
                            <WhatsappWidget
                              modal={true}
                              isDraggable={true}
                              onClose={handleCloseDialog}
                              isOpen={dialogOpen}
                              title="Whatsapp Widget Url" 
                            > 
                          
                              <div className="containBordergreen whatsappBox3 whatsappSpace borderMobnone mx-4 my-4 py-4 px-md-4 mt-4">
                                {responsedata}
                              </div>
                              <div className="mt-4 mb=4 text-center">
                                <button
                                  onClick={handleCopy}
                                  className="btn btn-primary btn-lg"
                                >
                                  {copystatus ? 'Copied Code' : 'Copy Code'}
                                </button>
                              </div>
                            </WhatsappWidget>
                          )}
                        </div>
                      </div>
        </>
    )
  };
  export default WhatsappChatbot;