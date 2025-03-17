"use client"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function WhatsappThought() {

    const responsiveSettings = [

        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

    ];

    return (
        <div className="BrandItems reviewItems whatsppthought">
              <Fade arrows={false} indicators={false} responsive={responsiveSettings} duration={2000} transitionDuration={250}>
                <div className="mx-2 text-center reviewpanel my-4">
                    <div>
                        <blockquote> 
                            <h4> Struggling to see any significant conversions through SMS and Email marketing campaigns?   </h4>  
                        </blockquote> 
                    </div>
                </div>
                <div className="mx-2 text-center reviewpanel my-4">
                    <div>
                        <blockquote>
                            <h4>Are you stuck on sending WhatsApp bulk messages 1000+ to a large audience? </h4>
                        </blockquote>
                    </div>  
                </div>
                <div className="mx-2 text-center reviewpanel my-4">
                    <div>
                        <blockquote>
                            <h4 className="mb-2">Using unauthorized bulk messaging software suppressing your communication strategy?</h4>
                        </blockquote>
                    </div>
                </div>
               
            </Fade>
        </div>
    );
};
export default WhatsappThought;
