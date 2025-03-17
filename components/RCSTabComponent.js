"use client";
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';

const RCSTabComponent = () => {
    return (
        <div className="mt-4">
            <Tabs defaultActiveKey="retail" id="rcs-tab-component" className="mb-3 nav navtablink nav nav-tabs">
                <Tab eventKey="retail" title="Retail">
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col lg={6}>
                                <h2>RCS for Retail</h2>
                                <p>Send your marketing campaign on RCS platform to launch new products, showcase carousals, post-purchase followups, order tracking, etc. all within one interface</p>
                            </Col>
                            <Col lg={6}>
                                <img className="img-fluid imgfull" alt="RCS for Retail | Authkey.io" src="/img/products/rcsmessage/retail-authkey.webp" />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="BFSI" title="BFSI">
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col lg={6}>
                                <h2>RCS for Banking, Financial Services And Insurance</h2>
                                <p>Offer comprehensive banking services over RCS messaging, including upselling and cross-selling financial products, sending notification and updates, OTPs, and facilitating the collection of EMIs and payments.</p>
                            </Col>
                            <Col lg={6}>
                                <img className="img-fluid imgfull" alt="RCS for Banking | Authkey.io" src="/img/products/rcsmessage/bfsi.webp" />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="travel" title="Travel & Hospitality">
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col lg={6}>
                                <h2>RCS for Tour Travel and Hospitality</h2>
                                <p>Sends travel packages with images. Keep customers informed with travel updates, booking details, and last-minute necessities such as boarding passes. Streamline reservations with a virtual concierge and offer around-the-clock travel recommendations for a seamless travel experience.</p>
                            </Col>
                            <Col lg={6}>
                                <img className="img-fluid imgfull" alt="RCS for Tour Travel | Authkey.io" src="/img/products/rcsmessage/travel.webp" />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="telecom" title="Telecom">
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col lg={6}>
                                <h2>RCS for Telecom</h2>
                                <p>Send promotional offers, payment reminders, recharge transactions through chat, and offer real-time customer support using both virtual assistance and live agents.</p>
                            </Col>
                            <Col lg={6}>
                                <img className="img-fluid imgfull" alt="RCS for Telecom | Authkey.io" src="/img/products/rcsmessage/telecom.webp" />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="healthcare" title="Healthcare">
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col lg={6}>
                                <h2>RCS for Healthcare, Hospitals, and Laboratories.</h2>
                                <p>Hospital has a lot to do with messaging. Easy updates to patients for appointments, send reminders, test reports, patient history and video educational guidance for treatments. </p>
                            </Col>
                            <Col lg={6}>
                                <img className="img-fluid imgfull" alt="RCS for Healthcare | Authkey.io" src="/img/products/rcsmessage/healthcare.webp" />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </div>
    );
};

export default RCSTabComponent;



