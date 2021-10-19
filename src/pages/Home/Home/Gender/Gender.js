import React from 'react';
import './Gender.css'

const Gender = () => {
    return (
        <section className="py-0">
            
            <div className="container-fluid cursor">
                <div className="row">
                    <div style={{backgroundColor:"#271d57"}} className="col">
                        <div className="">
                            <div className="text-white px-5 py-3">
                                <h1>For Adults</h1>
                                <p>You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.</p>
                                <p>ANXIETY</p>
                                <p>DEPRESSION</p>
                                <p>BIPOLAR DISORDER</p>
                                <p>ADHD</p>
                                <p>A – Z OF ISSUES</p>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#4eaac8 "}} className="col">
                        <div className="text-white px-5 py-3">
                            <h1>For Children</h1>
                            <p>You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.</p>
                            <p>ADHD</p>
                            <p>ASPERGERS AND AUTISM</p>
                            <p>DEPRESSION</p>
                            <p>ANXIETY DISORDERS</p>
                            <p>A – Z OF ISSUES</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#f6f8f9"}} className="col">
                        <div className="text-dark px-5 py-3">
                            <h1>For Business</h1>
                            <p>You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.</p>
                            <p>MEDICO LEGAL REPORTS</p>
                            <p>OCCUPATIONAL HEALTH</p>
                            <p>LOCUMS AND STAFFING</p>
                            <p>NEUROPSYCHOLOGICAL ASSESSMENTS</p>
                            <p>MENTAL CAPACITY ASSESSMETNS</p>
                        </div>
                    </div>
                </div>
            </div> 
                      
        </section>
    );
};

export default Gender;