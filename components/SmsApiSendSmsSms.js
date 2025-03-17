"use client"
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class SmsApiSendSmsSms extends Component {
    render() {
        return (
            <div className="samplecode sampleincode">

                <Tabs onSelect={(index, label) => console.log(label + ' selected')}>

                <Tab label="PHP">
                    <SyntaxHighlighter language="php" useInlineStyles={false} style={a11yDark}> 
{`
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://console.authkey.io/restapi/requestjson.php',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>' {
    "country_code": "91",
    "mobile": "xxxxx",
    "sender": "**",
    "pe_id":"****",
    "template_id":"******"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Basic <Api_Key>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

`}
                       </SyntaxHighlighter>
                    </Tab>
                    <Tab label="Python">
                    <SyntaxHighlighter language="python" useInlineStyles={false} style={a11yDark}>{`
import http.client
import json

conn = http.client.HTTPSConnection("console.authkey.io")
payload = json.dumps({
  "country_code": "91",
  "mobile": "xxxxx",
  "sender": "**",
  "pe_id": "****",
  "template_id": "******"
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic <Api_Key>'
}
conn.request("POST", "/restapi/requestjson.php", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
`}
                        </SyntaxHighlighter>
                    </Tab>


                    <Tab label="Go">
                    <SyntaxHighlighter language="Go" useInlineStyles={false} style={a11yDark}>
                        {`
  package main

  import (
    "fmt"
    "strings"
    "net/http"
    "io/ioutil"
  )
  
  func main() {
  
    url := "https://console.authkey.io/restapi/requestjson.php"
    method := "POST"
  
    payload := strings.NewReader( {+"
  "+
      "country_code": "91",+"
  "+
      "mobile": "xxxxx",+"
  "+
      "sender": "**",+"
  "+
      "pe_id":"****",+"
  "+
      "template_id":"******" +"
  "+
  })
  
    client := &http.Client {
    }
    req, err := http.NewRequest(method, url, payload)
  
    if err != nil {
      fmt.Println(err)
      return
    }
    req.Header.Add("Content-Type", "application/json")
    req.Header.Add("Authorization", "Basic <Api_Key>")
  
    res, err := client.Do(req)
    if err != nil {
      fmt.Println(err)
      return
    }
    defer res.Body.Close()
  
    body, err := ioutil.ReadAll(res.Body)
    if err != nil {
      fmt.Println(err)
      return
    }
    fmt.Println(string(body))
  }       

`}
                        </SyntaxHighlighter>
                    </Tab>


                    <Tab label="Java">
                    <SyntaxHighlighter language="java" useInlineStyles={false} style={a11yDark}>
{`
OkHttpClient client = new OkHttpClient().newBuilder()
.build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, " {\r\n    \"country_code\": \"91\",\r\n    \"mobile\": \"xxxxx\",\r\n    \"sender\": \"**\",\r\n    \"pe_id\":\"****\",\r\n    \"template_id\":\"******\"\r\n}");
Request request = new Request.Builder()
.url("https://console.authkey.io/restapi/requestjson.php")
.method("POST", body)
.addHeader("Content-Type", "application/json")
.addHeader("Authorization", "Basic <Api_Key>")
.build();
Response response = client.newCall(request).execute();
                        `}
                        </SyntaxHighlighter>
                    </Tab>


                    <Tab label="JavaScript">
                        <SyntaxHighlighter language="javascript" useInlineStyles={false} style={a11yDark}>
{`
var settings = {
  "url": "https://console.authkey.io/restapi/requestjson.php",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic <Api_Key>"
  },
  "data": JSON.stringify({
    "country_code": "91",
    "mobile": "xxxxx",
    "sender": "**",
    "pe_id": "****",
    "template_id": "******"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

`}

</SyntaxHighlighter>
                  
                    </Tab>
                    
                    <Tab label="cURL">
                    
<SyntaxHighlighter language="curl" useInlineStyles={false} style={a11yDark}>
                        
{`
curl --location 'https://console.authkey.io/restapi/requestjson.php' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Api_Key>' \
--data ' {
    "country_code": "91",
    "mobile": "xxxxx",
    "sender": "**",
    "pe_id":"****",
    "template_id":"******"
}'
`}

                        
                        </SyntaxHighlighter>
                    </Tab>
                    <Tab label="Powershell">
                    <SyntaxHighlighter language="powershell" useInlineStyles={false} style={a11yDark}>
{`
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/json")
$headers.Add("Authorization", "Basic <Api_Key>")

$body = " {
n    "country_code": "91",
n    "mobile": "xxxxx",
n    "sender": "**",
n    "pe_id":"****",
n    "template_id":"******"
n}"

$response = Invoke-RestMethod 'https://console.authkey.io/restapi/requestjson.php' -Method 'POST' -Headers $headers -Body $body
$response | ConvertTo-Json
                 
`}

                        </SyntaxHighlighter>

                    </Tab>
                    <Tab label="C#">
                    <SyntaxHighlighter language="csharp" useInlineStyles={false} style={a11yDark}>{`
var options = new RestClientOptions("https://console.authkey.io")
{
  MaxTimeout = -1,
};
var client = new RestClient(options);
var request = new RestRequest("/restapi/requestjson.php", Method.Post);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Authorization", "Basic <Api_Key>");
var body = @" {
" + "\n" +
@"    ""country_code"": ""91"",
" + "\n" +
@"    ""mobile"": ""xxxxx"",
" + "\n" +
@"    ""sender"": ""**"",
" + "\n" +
@"    ""pe_id"":""****"",
" + "\n" +
@"    ""template_id"":""******""
" + "\n" +
@"}";
request.AddStringBody(body, DataFormat.Json);
RestResponse response = await client.ExecuteAsync(request);
Console.WriteLine(response.Content);
`}

                       </SyntaxHighlighter>

                    </Tab>
                    <Tab label="Node.js">

                    <SyntaxHighlighter language="javascript" useInlineStyles={false} style={a11yDark}>
{`
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://console.authkey.io/restapi/requestjson.php',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic <Api_Key>'
  },
  body: JSON.stringify({
    "country_code": "91",
    "mobile": "xxxxx",
    "sender": "**",
    "pe_id": "****",
    "template_id": "******"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
`}

                        </SyntaxHighlighter>
                    </Tab>
                  


                    <Tab label="Ruby">
                    <SyntaxHighlighter language="ruby" useInlineStyles={false} style={a11yDark}>
{`
require "uri"
require "json"
require "net/http"

url = URI("https://console.authkey.io/restapi/requestjson.php")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Authorization"] = "Basic <Api_Key>"
request.body = JSON.dump({
  "country_code": "91",
  "mobile": "xxxxx",
  "sender": "**",
  "pe_id": "****",
  "template_id": "******"
})

response = https.request(request)
puts response.read_body
`}
                        </SyntaxHighlighter>
                    </Tab>




                    <Tab label="Swift">
                    <SyntaxHighlighter language="swift" useInlineStyles={false} style={a11yDark}>
{`
let parameters = " {\r\n    \"country_code\": \"91\",\r\n    \"mobile\": \"xxxxx\",\r\n    \"sender\": \"**\",\r\n    \"pe_id\":\"****\",\r\n    \"template_id\":\"******\"\r\n}"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://console.authkey.io/restapi/requestjson.php")!,timeoutInterval: Double.infinity)
request.addValue("application/json", forHTTPHeaderField: "Content-Type")
request.addValue("Basic <Api_Key>", forHTTPHeaderField: "Authorization")

request.httpMethod = "POST"
request.httpBody = postData

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()

`}
                        </SyntaxHighlighter>
                    </Tab>


                    


                </Tabs>


            </div>
        );
    }
}

export default SmsApiSendSmsSms;