"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab, Button, Form } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

const App = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [inputNumber2, setInputNumber2] = useState('');
    const [inputNumber3, setInputNumber3] = useState('');
    const [inputNumber4, setInputNumber4] = useState('');
    const staticValue1 = 0.010;
    const staticValue2 = 0.0018;
    const staticValue3 = 0.0018;
    const staticValue4 = 0.0042;

    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('');  // Rename setResults to setResult2
    const [result3, setResult3] = useState('');  // Rename setResults to setResult3
    const [result4, setResult4] = useState('');  // Rename setResults to setResult4

    const handleInputChange = (e) => {
        setInputNumber(e.target.value);
    };
    const handleInputChange1 = (e) => {
        setInputNumber2(e.target.value);
    };
    const handleInputChange2 = (e) => {
      setInputNumber3(e.target.value);
    };
    const handleInputChange3 = (e) => {
      setInputNumber4(e.target.value);
  };

    const multiplyNumbers1 = (staticValue1) => {
        const num = parseFloat(inputNumber);
        if (!isNaN(num)) {
            if (num < 1000) {
                setResult('Not less than 1000');
            } else {
                const cost = (num - 1000) * staticValue1;
                setResult(`$${cost.toFixed(2)}`);
            }
        } else {
            setResult('Please enter a valid number');
        }
    };

    const multiplyNumbers2 = (staticValue2) => {
        const num = parseFloat(inputNumber2);
        if (!isNaN(num)) {
            if (num < 1000) {
                setResult2('Not less than 1000');
            } else {
                const cost = (num - 1000) * staticValue2;
                setResult2(`$${cost.toFixed(2)}`);
            }
        } else {
            setResult2('Please enter a valid number');
        }
    };

    const multiplyNumbers3 = (staticValue3) => {
        const num = parseFloat(inputNumber3);
        if (!isNaN(num)) {
            if (num < 1000) {
                setResult3('Not less than 1000');
            } else {
                const cost = (num - 1000) * staticValue3;
                setResult3(`$${cost.toFixed(2)}`);
            }
        } else {
            setResult3('Please enter a valid number');
        }
    };

    const multiplyNumbers4 = (staticValue4) => {
        const num = parseFloat(inputNumber4);
        if (!isNaN(num)) {
            if (num < 1000) {
                setResult4('Not less than 1000');
            } else {
                const cost = (num - 1000) * staticValue4;
                setResult4(`$${cost.toFixed(2)}`);
            }
        } else {
            setResult4('Please enter a valid number');
        }
    };

  return (
    <Container>
      <Tabs defaultActiveKey="marketing" id="rcs-tab-component" className="mt-3">
        <Tab eventKey="marketing" title="Marketing">
          <Row className="mt-4">
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationRate" className="form-label">Conversation Rate</Form.Label>
              <div className="input-groupbox">
                <span>$</span>
                {staticValue1}
              </div>
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationNo" className="form-label">Conversation in Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                className="form-controls"
                value={inputNumber}
                onChange={handleInputChange}
              />
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="estimatedPrice" className="form-label">Estimated Pricing</Form.Label>
              <div className="input-result resultbg">{result}</div>
            </Col>
            <Col md={12} className="mt-3 text-center mb-4">
              <Button onClick={() => multiplyNumbers1(staticValue1)} className="btn dark-blur-btn">
                Calculate <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="authentication" title="Authentication">
          <Row className="mt-4">
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationRate" className="form-label">Conversation Rate</Form.Label>
              <div className="input-groupbox">
                <span>$</span>
                {staticValue2}
              </div>
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationNo" className="form-label">Conversation in Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                className="form-controls"
                value={inputNumber2}
                onChange={handleInputChange1}
              />
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="estimatedPrice" className="form-label">Estimated Pricing</Form.Label>
              <div className="input-result resultbg">{result2}</div>
            </Col>
            <Col md={12} className="mt-3 text-center mb-4">
              <Button onClick={() => multiplyNumbers2(staticValue2)} className="btn dark-blur-btn">
                Calculate <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="utility" title="Utility">
          <Row className="mt-4">
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationRate" className="form-label">Conversation Rate</Form.Label>
              <div className="input-groupbox">
                <span>$</span>
                {staticValue3}
              </div>
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationNo" className="form-label">Conversation in Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                className="form-controls"
                value={inputNumber3}
                onChange={handleInputChange2}
              />
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="estimatedPrice" className="form-label">Estimated Pricing</Form.Label>
              <div className="input-result resultbg">{result3}</div>
            </Col>
            <Col md={12} className="mt-3 text-center mb-4">
              <Button onClick={() => multiplyNumbers3(staticValue3)} className="btn dark-blur-btn">
                Calculate <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="service" title="Service">
          <Row className="mt-4">
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationRate" className="form-label">Conversation Rate</Form.Label>
              <div className="input-groupbox">
                <span>$</span>
                {staticValue4}
              </div>
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="conversationNo" className="form-label">Conversation in Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                className="form-controls"
                value={inputNumber4}
                onChange={handleInputChange3}
              />
            </Col>
            <Col lg={4} className="mt-3 mb-4">
              <Form.Label htmlFor="estimatedPrice" className="form-label">Estimated Pricing</Form.Label>
              <div className="input-result resultbg">{result4}</div>
            </Col>
            <Col md={12} className="mt-3 text-center mb-4">
              <Button onClick={() => multiplyNumbers4(staticValue4)} className="btn dark-blur-btn">
                Calculate <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default App;