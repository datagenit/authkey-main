import SampleCodeNavBar from '../../../components/SampleCodeNavBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const metadata = {
    title: "Sample code for sending Email in Python | Email API code in Python - Authkey.io",
    description: "Learn sample code for sending Email in Python. Email API in python designed for sending Email OTP, transactional emails and more. know more about integration.",
    alternates: {
        canonical: "https://authkey.io/sample-code-for-sending-email-in-python",
    },
};
const SampleCodeforEmailinPython = () => {
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
                            <h3> Sample Code For Sending Email in Python</h3>
                            <p>Sending Email using Authkey APIs is a breeze and lightning fast. You can simply pass the message body, message sender, mobile number &amp; authkey in the API request to send sms instantly.</p>

                            <h4 id="sms" className="mt-5"> Python Sample Code For Send Email</h4>
                            <hr className="m-0"/>


                          <SyntaxHighlighter language="Python" useInlineStyles={false} style={a11yDark}> 
                          {`
import http.client

conn = http.client.HTTPSConnection("api.authkey.io")

conn.request("GET", "/request?authkey=AUTHKEY&email=RecepientEmail&mid=1001")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

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

export default SampleCodeforEmailinPython;