import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroImg03 from '../assets/images/hero-img03.jpg'
import slImg from '../assets/images/sl.png'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter' 

const Home = () => {
  return( <>
    {/*=========== hero section start ==========*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Sri Lanka's Bus Adventure Awaits!"}/>
                <img src={slImg} alt="" />
              </div>
              <h1>Discover Convenient & Reliable Bus Schedules Across the <span className="highlight">Island</span></h1>
              <p>Plan your journey and find a bus on your route effortlessly. We connect you to Sri Lanka's extensive bus network, ensuring you 
                reach your destination on time, every time.</p>
            </div>
          
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={heroImg02} alt="" controls/>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg03} alt="" />
            </div>
          </Col>

          
          
          

          <SearchBar/>          
        </Row>
      </Container>
    </section>
    {/*=========== newsletter section ==========*/}
    
    <Newsletter/>
    
  </>
  );
};

export default Home