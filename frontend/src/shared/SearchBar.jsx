import React, {useRef} from 'react'
import './search-bar.css'
import {Col, Form, FormGroup} from 'reactstrap'

const SearchBar = () => {

    const startlocationRef = useRef('')
    const endlocationRef = useRef('')
    const timeRef = useRef(0)
    
    const searchHandler = ()=>{

        const startlocation = startlocationRef.current.value;
        const endlocation = endlocationRef.current.value;
        const time = timeRef.current.value;

        if(startlocation === "" || endlocation === "" || time === ""){
            return alert("All fields are required!");
        }
    }

  return <Col lg='12'>
    <div className="search__bar">
       <Form className= "d-flex align-items-center gap-4">
        <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span><i class="ri-map-pin-line"></i></span>
            <div>
                <h6>Start Location</h6>
                <input type="text" placeholder='Enter Location' ref={startlocationRef}/>
            </div>
        </FormGroup>

        <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span><i class="ri-map-pin-line"></i></span>
            <div>
                <h6>End Location</h6>
                <input type="text" placeholder='Enter Location' ref={endlocationRef}/>
            </div>
        </FormGroup>

        <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span><i class="ri-time-line"></i></span>
            <div>
                <h6>Time</h6>
                <input type="time" placeholder='Enter Time' ref={timeRef}/>
            </div>
        </FormGroup>

        <span className="search__icon" type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
        </span>
        </Form> 
    </div>
  </Col>
}

export default SearchBar