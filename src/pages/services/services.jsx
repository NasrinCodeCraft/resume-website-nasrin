import { useState } from 'react';
import ServicesBox from '../../component/servicesBox/servicesBox';
import styled from './services.module.css';
import { useEffect } from 'react';
import axios from 'axios';

function Services() {

    const [boxes , setBoxes] = useState([]);

    useEffect (()=>{

        axios
        .get("http://localhost:5000/boxes")
        // create top link with bottom terminal
        //PS F:\my-site> npx json-server --watch data/db.json --port 5000
        .then((result)=>{
            setBoxes(result.data);
        })
        .catch((error)=>{
            console.log(error);
        });

    },[]);
    
    return (
        <>
            <div className={styled.titleService}>
                <pre>My <span>Services</span></pre>
                <p>What I do</p>
            </div>
            <div className={styled.servicesBox}>
                {
                    boxes.map(result => (
                        <ServicesBox box={result} key={result.id} />
                    ))  
                }
            </div>
        </>
    )

}

export default Services;