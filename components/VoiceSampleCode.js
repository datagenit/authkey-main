"use client"
import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

class VoiceSampleCode extends Component {
  render() {
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
  country_code=CountryCode&voice=Hello%2C%20your%20OTP%20is%201234",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET"
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
              {`import requests

url = "https://api.authkey.io/request"

querystring = {"authkey":"AUTHKEY","mobile":"RecepientMobile",
"country_code":"CountryCode","voice":"Hello, your OTP is 1234"}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
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

	url := "https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&
  voice=Hello%2C%20your%20OTP%20is%201234"

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
              {`
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&
  voice=Hello%2C%20your%20OTP%20is%201234")
  .get()
  .build();

Response response = client.newCall(request).execute();
`}
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

          <SyntaxHighlighter
            language="curl"
            useInlineStyles={false}
            style={a11yDark}
          >
            {`
curl -X GET \
  'https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&
  voice=Hello%2C%20your%20OTP%20is%201234' \
`}
          </SyntaxHighlighter>

          <Tab label="Powershell">
            <SyntaxHighlighter
              language="powershell"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`
  curl --request GET \

  --url 'https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&
  voice=Hello%2C%20your%20OTP%20is%201234' \

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
var client = new RestClient("https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&
country_code=CountryCode&voice=Hello%2C%20your%20OTP%20is%201234");
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
              {`
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.authkey.io/request',
  qs: 
   { authkey: 'AUTHKEY',
     mobile: 'RecepientMobile',
     country_code: 'CountryCode',
     voice: 'Hello, your OTP is 1234' } };

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
country_code=CountryCode&voice=Hello%2C%20your%20OTP%20is%201234")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
`}
            </SyntaxHighlighter>
          </Tab>

          <Tab label="Swift">
            <SyntaxHighlighter
              language="swift"
              useInlineStyles={false}
              style={a11yDark}
            >
              {`import Foundation

let headers = [
  "cache-control": "no-cache",
  "postman-token": "f8ce3ff2-e00e-55b2-00d4-4014bd219cc8"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.authkey.io/request?authkey=AUTHKEY&
mobile=RecepientMobile&country_code=CountryCode&voice=Hello%2C%20your%20OTP%20is%201234")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler:
 { (data, response, error) -> Void in
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
}

export default VoiceSampleCode;
