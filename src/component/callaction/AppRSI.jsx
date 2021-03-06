import { t } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import {
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { APPS, GGL } from '../../cointainer/startup/import';
import './cta.css';

const AppRSI = () => {
  const {t , i18n} = useTranslation();
  return ( 
    <div className='main-content'>
      <section className="py-7">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="8">
              <div className="text-center">
                <h3 className='App-h3'>
                  {t("AppStore")}
                </h3>
              
              </div>
                <div className="RSI__cta-content">
                  <div className="RSI__header-content__input-CTA">
                    <img src={APPS}/>
                    <img src={GGL}/>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
export default AppRSI;
