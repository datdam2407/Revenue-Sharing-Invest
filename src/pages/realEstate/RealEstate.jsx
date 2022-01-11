import React from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    ListGroupItem,
 
    Container,
    Row,
    Col,

  } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from '../../component/footer/Footer';
// 
import "./realEstate.css"
// import StartupPage from '../startup/StartupPage';
import Title from '../../component/title/Title';
import '../../../src/cointainer/startup/invertco.css';
import { test1, test2, test3,test4,test5,test6 ,author,realstate,realstate2} from '../../cointainer/startup/import';
const RealEstate = () => {
  return (
      <>
    <div className="main-content-footer-section-realstate">
      <section className="py-6">
        <Container>
              <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid"
                  src={realstate}
                />
              </Col>
            <Col className="order-md-1" md="6">
              <div className="pr-md-5">
              <h1 id="i0c1" className="c-largeTitle">Curated real estate investments
          </h1>
          <h4>Innovative real estate investment products for growth-focused investors. </h4>
       <p>Become an Investor</p>
          <p>Investments can result in total loss and may be impossible to resell. <Link style={{fontSize:"20px"}}>Learn more </Link> </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    <div className="RSI_RealEstate section__padding" id="blog">
      <div className="RSI_RealEstate-heading">
        <h1 >Real estate offerings
<br /> </h1>
  <h3 >Global real estate investments vetted by experienced professionals. </h3>
      </div>
      <div className="RSI_RealEstate-heading">
        <h2 >Current deals

<br /> </h2>
      </div>

      <div className="RSI_RealEstate-container_groupB">
        <Title imgUrl={test1} logo={test2} date="Sep 26, 2021" text="First Tokenized Litigation Funding for one of largest US crop destructions" des="First Tokenized Litigation Funding for one of largest US crop destructions" />
        <Title imgUrl={test3} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test4} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test5} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test6} date="Sep 26, 2021" text="Invert" />

      </div>
    </div>
    <div className="RSI_RealEstate section__padding" id="blog">
 
      <div className="RSI_RealEstate-heading">
        <h2 >Browse more deals
<br /> </h2>
      </div>
      <div className="RSI_RealEstate-container_groupC">
        <Title imgUrl={test1} logo={test2} date="Sep 26, 2021" text="First Tokenized Litigation Funding for one of largest US crop destructions" des="First Tokenized Litigation Funding for one of largest US crop destructions" />
        <Title imgUrl={test3} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test4} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test5} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test6} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test5} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test6} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test5} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test6} date="Sep 26, 2021" text="Invert" />

      </div>
            <p style={{textAlign:"center"}}>Add Lazing load</p>
    </div>

    <div className='main-content'>
            <section className="py-7">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h2 id="172ymt" className='c-secondaryTitle'>
                        "
                  </h2>
                  <h3>Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world. </h3>
                  <div className="author-description">
                        <a>
                          <img
                            src={author}
                          />
                        </a>
                        <h4>
                          Franklin D. Roosevelt, 32nd President of the USA
                        </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </div>
        <div className="main-content-footer-section-realstate">
      <section className="py-6">
        <Container>
              <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={realstate2}
                />
              </Col>
            <Col className="order-md-1" md="7">
              <div className="pr-md-5">
              <h1>Raise capital for your fund, project or property from retail investors
          </h1>
          <h4>Raise up to $5 million from 1M+ people while growing your brand and engaging your community. </h4>
       <p>Apply to Raise</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
      <Footer/>
    {/* <Footer/> */}
    </>
  )
}
export default RealEstate;