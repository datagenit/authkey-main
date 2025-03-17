import SampleCodeNavBar from '../../../components/SampleCodeNavBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const metadata = {
    title: "Sample code for sending SMS in Curl | SMS API code in Curl - Authkey.io",
    description: "Learn sample code for sending SMS in Curl. SMS API in Curl designed for sending SMS OTP, transactional SMS, verification SMS and more. know more about integration.",
    alternates: {
        canonical: "https://authkey.io/sample-code-for-sending-sms-in-curl",
    },
};
const SampleCodeforSmsinCurl = () => {
    return (
        <div>
            <section className="bg-section-secondary">
                <hr className="mt-0"/>
                <div className="container">
                    <div className="row row-grid">
                        <div className="col-md-3 text-left border-right">
                            <SampleCodeNavBar />
                        </div>

                        <div className="col-lg-9 m-0 ">
                            <h3>Sample Code For Sending SMS in cURL</h3>

                            <p>Sending SMS using Authkey APIs is a breeze and lightning fast. You can simply pass the message body, message sender, mobile number &amp; authkey in the API request to send sms instantly.</p>
                            <h4 id="sms" className="mt-5"> cURL Sample Code For Send SMS</h4>
                            <hr className="m-0"/>


                          <SyntaxHighlighter language="php" useInlineStyles={false} style={a11yDark}> 
                          {`
curl -X GET 'https://api.authkey.io/request?authkey=YourAuthKey&
sms=Hello%2C%20This%20is%20test%20message%20from%20Authkey.io&mobile=RecepientMobile&
country_code=CountryCode&sender=SENDERID' 

`}
                       </SyntaxHighlighter>
                
                            <p className=" mt-2 mb-0">Sending SMS using Authkey APIs is a breeze and lightning fast. You can simply pass the message body, message sender, mobile number &amp; authkey in the API request to send sms instantly.</p>

                            <div className="text-center mt-5 mb-5">
                            <a className="btn btn-sm btn-primary" href="https://console.authkey.io/signup">Getting Started</a>
                         
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default SampleCodeforSmsinCurl;