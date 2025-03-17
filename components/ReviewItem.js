"use client"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function ReviewItem() {

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
        <div className="BrandItems reviewItems">
            <Slide indicators={true} responsive={responsiveSettings} duration={2000} transitionDuration={250}>
                <div className="mx-2 text-center reviewpanel">
                    <div className="pb-4 reviewImg">
                        <a href=" https://www.trustpilot.com/users/663e3127b8acc19e5ebf8aed" rel="nofollow" target="_blank" aria-hidden="true"><img src='/img/home/review1.webp' className="ReviewImg" alt="Trustpilot Review" width="700" height= "354" /></a>
                    </div>
                </div>
                <div className="mx-2 text-center reviewpanel">
                    <div className="pb-4 reviewImg">
                        <a href="https://www.trustpilot.com/users/663f1cffcb6e8d81edac6df0" rel="nofollow" target="_blank" aria-hidden="true"><img src='/img/home/review2.webp' className="ReviewImg" alt="Trustpilot Review"  width="700" height= "354" /></a>
                    </div>
                </div>
                <div className="mx-2 text-center reviewpanel">
                    <div className="pb-4 reviewImg">
                        <a href="https://www.g2.com/products/authkey-authkey-io/reviews/authkey-io-review-9331605#survey-response-9331605" rel="nofollow" target="_blank" aria-hidden="true"><img src='/img/home/review3.webp' className="ReviewImg" alt="G2 Review" width="700" height= "354"  /></a>
                    </div>
                </div>
                <div className="mx-2 text-center reviewpanel">
                    <div className="pb-4 reviewImg">
                        <a href="https://www.g2.com/products/authkey-authkey-io/reviews/authkey-io-review-9331605#survey-response-6691139" rel="nofollow" target="_blank" aria-hidden="true"><img src='/img/home/review4.webp' className="ReviewImg" alt="G2 Review" width="700" height= "354"  /></a>
                    </div>
                </div>
                <div className="mx-2 text-center reviewpanel">
                    <div className="pb-4 reviewImg">
                        <a href="https://crozdesk.com/software/authkey#comment_39060_commontator_span" rel="nofollow" target="_blank" aria-hidden="true"><img src='/img/home/review5.webp' className="ReviewImg" alt="Crozdesk Review" width="700" height= "354"  /></a>
                    </div>
                </div>
                <div className="mx-2 text-center reviewpanel">
                    <div className="pb-4 reviewImg">
                        <a href="https://crozdesk.com/software/authkey#comment_37608_commontator_span" rel="nofollow" target="_blank" aria-hidden="true"><img src='/img/home/review6.webp' className="ReviewImg" alt="Crozdesk Review" width="700" height= "354"  /></a>
                    </div>
                </div>

            </Slide>
        </div>
    );
};
export default ReviewItem;