import SampleCodeNavBar from '../../../components/SampleCodeNavBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const metadata = {
    title: "Sample code for sending Voice call in C | Voice API code in C - Authkey.io",
    description: "Learn sample code for sending Voice in C. Voice call API in C designed for sending Voice OTP, verification calls and more. know more about integration.",
    alternates: {
        canonical: "https://authkey.io/sample-code-for-sending-voice-in-c",
    },
};
const SampleCodeforVoiceinC = () => {
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
                           
                            <h3> Sample Code For Sending Voice in C#</h3>

                            <p>Sending Voice using Authkey APIs is a breeze and lightning fast. You can simply pass the message body, message sender, mobile number &amp; authkey in the API request to send sms instantly.</p>

                       

                          <h4 id="sms" className="mt-5"> C# Sample Code For Send Voice</h4>
                          <hr className="m-0"/>


                          <SyntaxHighlighter language="php" useInlineStyles={false} style={a11yDark}> 
                          {`
var client = new RestClient("https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&
country_code=CountryCode&voice=Hello%2C%20your%20OTP%20is%201234");

var request = new RestRequest(Method.GET);

IRestResponse response = client.Execute(request);
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

export default SampleCodeforVoiceinC;