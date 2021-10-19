import React from 'react';
import './Specialist.css';

const Specialist = () => {
    return (
        <div className="">
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
                <div className="col">
                    <p className="ms-3 text-center"><strong>WE HAVE BEST TEAM</strong></p>
                    <h3 className="fw-bold ms-3 text-center">Meet Our Specialists</h3>
                </div>
                <div className="col-8 d-flex justify-content-center">
               <p className=""> We think it’s really important that clinicians have a mixture of clinical skill and human qualities that mean you can place your trust in them. We interview every potential partner in person before we agree to work with them, as well as carrying out rigorous background checks.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3">
            <div className="album col d-flex justify-content-center">
                <div className="frame">
                    <div className="photo">
                        <img src="https://livewp.site/wp/md/optima/wp-content/uploads/sites/15/2018/01/team_emma_scott-770x495.jpg" alt=""/> 
                    </div>
                    <div className="details">
                        <p className="name text-white fs-3">Dr. Ema Scot</p>
                        <p className="profession text-white fs-3">Clinical Psyhologist</p>
                    </div>
                </div>
            </div>
            <div className="album col d-flex justify-content-center">
                <div className="frame">
                    <div className="photo">
                        <img src="https://livewp.site/wp/md/optima/wp-content/uploads/sites/15/2018/01/team_02-770x495.jpg" alt=""/> 
                    </div>
                    <div className="details">
                        <p className="name text-white fs-3">Dr. Anna Walker</p>
                        <p className="profession text-white fs-3">Consultant Psychiatrist</p>
                    </div>
                </div>
            </div>
            <div className="album col d-flex justify-content-center">
                <div className="frame">
                    <div className="photo">
                        <img src="https://livewp.site/wp/md/optima/wp-content/uploads/sites/15/2018/01/team_03-770x495.jpg" alt=""/> 
                    </div>
                    <div className="details">
                        <p className="name text-white fs-3">Dr. Tom Stewart</p>
                        <p className="profession text-white fs-3">Leading Neurologist</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Specialist;