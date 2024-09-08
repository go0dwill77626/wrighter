import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Import your custom CSS file

const About = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Left Column: Company Details */}
                <div className="col-lg-12 mb-4">
                    <div className="company-details p-4 bg-light rounded shadow-lg">
                        <h1>About Us</h1>
                        <p>
                        We <b>PROSAEC Total Pvt. Ltd.</b> is a well-known professionally managed high-end
                        Engineering solutions company based in Gurgaon (Just southwest of New Delhi)
                        with its state-of-the-art Engineering services to its Customers. Our primary
                        business activities are the Sales and Engineering in full-spectrum of Skid
                        Packages, Pressure Vessels, Atmospheric and Low-Pressure Storage Tanks,
                        Heat Exchangers, Boiler, Piping, and allied structural for Oil and Gas industries,
                        Refinery, water, Petrochemicals, Cement Plant and Power sector which gives our
                        customers a high quality, cost-effective, and timely deliverable in design and
                        detail engineering and Manufacturing drawings services and supporting engineering
                        calculations as per international Codes and Standards. The company workforce consists
                        of engineers who are specialized in a variety of Skid Packages, Pressure Vessels,
                        Storage Tanks, Heat Exchangers, Boilers, Piping, Civil & Structural Engineering.
                        Our highly experienced team utilizes proven work processes along with advanced
                        planning methods and scheduling software to ensure successful project completion
                        on schedule and budget.
                        </p>
                    </div>
                </div>

                {/* Right Column: Info Cards */}
                <div className="col-lg-12">
                    <div className="d-flex flex-row gap-4">
                        <div className="card-container">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h2>Our Values</h2>
                                    </div>
                                    <div className="card-back">
                                        <p>Details about our core values.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h2>Vision</h2>
                                    </div>
                                    <div className="card-back">
                                        <p>Details about our vision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-3">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h2>Mission</h2>
                                    </div>
                                    <div className="card-back">
                                        <p>Details about our mission.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
