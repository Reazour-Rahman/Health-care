import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="p-0" style={{backgroundColor:"#EAEEF3"}}>
            <br /><br /><br />
            <div className="text-center">
                <p className="mb-1"><strong>WHAT WE OFFER FOR YOU</strong></p>
                <p className="fs-1 mb-5"><strong>Therapies & Treatments</strong></p>
            </div>
            <div className="container" >
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service> )
                }
                <br />
                <br />
                <br />
            </div>
            </div>
        </section>
    );
};

export default Services;
