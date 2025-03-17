"use client"
import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SmsSampleCode = () => {
    return (
      <div className="samplecode">
        <Tabs onSelect={(index, label) => console.log(label + " selected")}>
          <Tab label="PHP">
            <SyntaxHighlighter
              language="php"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`
 <?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&
  country_code=CountryCode&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
`}
            </SyntaxHighlighter>
          </Tab>
          <Tab label="Python">
            <SyntaxHighlighter
              language="python"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`import http.client

conn = http.client.HTTPSConnection("api.authkey.io")

conn.request("GET", "/request?authkey=YourAuthKey&
sms=Hello%2C%20This%20is%20test%20message%20from%20Authkey.io&mobile=RecepientMobile&
country_code=CountryCode&sender=SENDERID")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="Go">
            <SyntaxHighlighter
              language="Go"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`package main
import (
	"fmt"
	"net/http"
	"io/ioutil"
)
func main() {

	url := "https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID"

	req, _ := http.NewRequest("GET", url, nil)


	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="Java">
            <SyntaxHighlighter
              language="java"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID")
  .get()
  .build();

Response response = client.newCall(request).execute();`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="JavaScript">
            <SyntaxHighlighter
              language="javascript"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile
  &country_code=CountryCode&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="cURL">
            <SyntaxHighlighter
              language="curl"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`curl -X GET \
'https://api.authkey.io/request?authkey=YourAuthKey&
sms=Hello%2C%20This%20is%20test%20message%20from%20Authkey.io&mobile=RecepientMobile&
country_code=CountryCode&sender=SENDERID' \

`}
            </SyntaxHighlighter>
          </Tab>
          <Tab label="Powershell">
            <SyntaxHighlighter
              language="powershell"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`curl --request GET \
--url 'https://api.authkey.io/request?authkey=YourAuthKey&
sms=Hello%2C%20This%20is%20test%20message%20from%20Authkey.io&mobile=RecepientMobile&
country_code=CountryCode&sender=SENDERID' \

`}
            </SyntaxHighlighter>
          </Tab>
          <Tab label="C#">
            <SyntaxHighlighter
              language="csharp"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`
var client = new RestClient("https://api.authkey.io/request?authkey=YourAuthKey&
sms=Hello%2C%20This%20is%20test%20message%20from%20Authkey.io&mobile=RecepientMobile&
country_code=CountryCode&sender=SENDERID");

var request = new RestRequest(Method.GET);

IRestResponse response = client.Execute(request);

`}
            </SyntaxHighlighter>
          </Tab>
          <Tab label="Node.js">
            <SyntaxHighlighter
              language="javascript"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`var request = require("request");
var options = { method: 'GET',
url: 'https://api.authkey.io/request',
qs: 
{ authkey: 'YourAuthKey',
sms: 'Hello, This is test message from Authkey.io',
mobile: 'RecepientMobile',
country_code: 'CountryCode',
sender: 'SENDERID' },
};

request(options, function (error, response, body) {
if (error) throw new Error(error);

console.log(body);
});
`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="Ruby">
            <SyntaxHighlighter
              language="ruby"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`require 'uri'
require 'net/http'

url = URI("https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&
country_code=CountryCode&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="Swift">
            <SyntaxHighlighter
              language="swift"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`import Foundation


let request = NSMutableURLRequest(url: NSURL(string: "https://api.authkey.io/request?authkey=AUTHKEY&
mobile=RecepientMobile&country_code=CountryCode&sms=Hello%2C%20your%20OTP%20is%201234&sender=SENDERID")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()`}
            </SyntaxHighlighter>
          </Tab>
        </Tabs>
      </div>
    );
}

export default SmsSampleCode;
