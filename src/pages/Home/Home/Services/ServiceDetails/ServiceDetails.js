import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://api.jsonbin.io/b/616e88ed9548541c29c53aa7')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);

    /* Chart */
    const data = {
        labels: ['others', 'Patients', 'others', 'others', 'others', 'others'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className="bg-white"> 
            <div>
                {
                    services.map(service => service.id == serviceId ? <div className="pb-5">
                        <div className="text-center py-5">
                            <h3>{service.title}</h3>
                            <small><Link to="/home">Home</Link>	&nbsp;<i className="fas fa-caret-right"></i>	&nbsp;{service.title}</small>
                        </div>
                        <div className="container">
                            <div className="row row-cols-1 row-cols-xl-2 g-4">
                                <div className="col col-12 col-xl-9">
                                    <img style={{maxWidth:"880px"}} className="container-fluid" src={service.img} alt="" />
                                    <div>
                                        <h3 className="my-4">{service.title}</h3>
                                        <div style={{width:"880px", height:"570px"}}>
                                        {/* <Divider /> */}
                                        <div className="d-flex flex-lg-row flex-column justify-content-between mt-3">
                                            <p>February 5, 2020</p>
                                            <p>psychology, therapy</p>
                                            <p>0 comments</p>
                                        </div>
                                        {/* <Divider />  */}
                                        <br /><br />
                                        <small className="mb-lg-0 mb-lg-5">{service.description}</small>
                                        <br /> <br />
                                            <div className="row row-cols-1 row-cols-lg-2">
                                                <div className="col">
                                                    <div style={{ position: "relative", width: "300px" }}>
                                                        <Doughnut style={{display:"inline"}} data={data} />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                    <small className="">{service.description1}</small>
                                                    <small>{service.description2}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <small className="mb-lg-0 mb-lg-5">{service.description3}</small>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col col-12 col-xl-3">
                                    <div className="responsive-margin">
                                        <h3>Catagories</h3> <br />
                                        <p>ADOPTION, GUARDIANSHIP</p> <Divider />
                                        <p className="my-3">ANXIETY AND STRESS</p><Divider />
                                        <p className="my-3">CHILD ANXIETY</p><Divider />
                                        <p className="my-3">DEPRESSION</p><Divider />
                                        <p className="my-3">INFOGRAPHICS</p><Divider />
                                        <p className="my-3">PARENTING AND FAMILIES</p><Divider />
                                        <p className="my-3">TREATMENTS</p><Divider />
                                    </div>
                                    <div className="mt-5">
                                    <div className="mb-3 bg-form p-4">
                                    <h3>Contact Us Now</h3> <br />
                                        <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="Name*"/> <br />
                                        <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="Email*"/><br />
                                        <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="Phone*"/><br />
                                        <div className="mb-3">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Send</button>   
                                        </div>
                                                                             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>:<div></div>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;