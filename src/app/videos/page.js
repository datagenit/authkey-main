"use client";
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";

const Videos = () => {
  return (
    <div>

      <section>
        <div className="container pb-5 mt-5 mb-2">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2>Videos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center order-last mb-4">
              <div className="iframeSrc">
                <iframe
                  src="https://www.youtube.com/embed/6FIPBkbsXvg?modestbranding=1&showinfo=0&rel=0&controls=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="A CPaaS Platform for WhatsApp Business API Integration - Authkey"
                  classname="iframetitle"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
              <p className="mt-2 text-left">A CPaaS Platform for WhatsApp Business API Integration - Authkey</p>
            </div>

            <div className="col-lg-4 text-center order-last mb-4">
              <div className="iframeSrc">
                <iframe
                  src="https://www.youtube.com/embed/MQ9s7WO0zaY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="A Powerful WhatsApp Business API @Authkey-CPaas-Platform"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
              <p className="mt-2 text-left">A Powerful WhatsApp Business API @Authkey-CPaas-Platform</p>
            </div>

            <div className="col-lg-4 text-center order-last mb-4">
              <div className="iframeSrc">
                <iframe
                  src="https://www.youtube.com/embed/aeR7ylCQ4hM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
              <p className="mt-2 text-left">Tips for maximizing: WhatsApp business API for marketing @Authkey-CPaas-Platform</p>
            </div>


            <div className="col-lg-4 text-center order-last mb-4">
              <div className="iframeSrc">
                <iframe
                  src="https://www.youtube.com/embed/OnGI6-NqmdU"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
              <p className="mt-2 text-left">Authkey Intro: Transforms Automation, Marketing, and Authentication</p>
            </div>

            <div className="col-lg-4 text-center order-last mb-4">
              <div className="iframeSrc">
                <iframe
                  src="https://www.youtube.com/embed/JJbZxHL-HLY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
              <p className="mt-2 text-left">WhatsApp Embedded Signup in Just 10 Minutes: WhatsApp API Onboarding Process</p>
            </div>

            <div className="col-lg-4 text-center order-last mb-4">
              <div className="iframeSrc">
                <iframe
                  src="https://www.youtube.com/embed/MpJplVQPA1E"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
              <p className="mt-2 text-left">Introduction | Authkey - A CPaaS Platform</p>
            </div>

          </div>
        </div>
      </section>


   

      <section className="bg-sectionthird">
        <div className="container-fluid pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="brandtxt text-center">Trusted By Brands</div>
              <BrandsItem />
            </div>
          </div>
          </div>
        </section>

        <section>
        <WhyChooseAuthkey />
      </section>

    </div>
    
  );
};

export default Videos;
