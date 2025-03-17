import SampleCodeNavBar from '../../../components/SampleCodeNavBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const metadata = {
    title: "Sample code for sending email in ruby | Email API code in ruby - Authkey.io",
    description: "Learn sample code for sending Email in Ruby. Email API in ruby designed for sending Email OTP, transactional Email, verification and more. know more about integration.",
    alternates: {
        canonical: "https://authkey.io/sample-code-for-sending-email-in-ruby",
    },
};
const SampleCodeforEmailinRuby = () => {
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
                            <h3> Sample Code For Send Email in Ruby</h3>
                            <p>Sending Email using Authkey APIs is a breeze and lightning fast. You can simply pass the message body, message sender, mobile number &amp; authkey in the API request to send sms instantly.</p>
                       

                          <h4 id="sms" className="mt-5"> Ruby Sample Code For Send SMS</h4>
                          <hr className="m-0"/>


                          <SyntaxHighlighter language="php" useInlineStyles={false} style={a11yDark}> 
                          {`
require 'uri'
require 'net/http'

url = URI("https://api.authkey.io/request?authkey=AUTHKEY&email=RecepientEmail&mid=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
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

export default SampleCodeforEmailinRuby;