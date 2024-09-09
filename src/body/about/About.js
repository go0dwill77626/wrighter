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
                        We <b>PROSAEC Total Pvt. Ltd.</b>
                        is a distinguished and professionally managed engineering solutions firm headquartered
                        in Gurgaon, just southwest of New Delhi. We specialize in delivering state-of-the-art
                        engineering services to our clients, offering a comprehensive range of high-end solutions.
                        </p>
                        <p>
                        Our core business encompasses the sales and engineering of skid packages, pressure vessels,
                        atmospheric and low-pressure storage tanks, heat exchangers, boilers, piping, and associated
                        structural components. We cater to diverse industries including oil and gas, refineries,
                        water treatment, petrochemicals, cement manufacturing, and power generation. Our commitment
                        is to provide high-quality, cost-effective, and timely design and engineering services,
                        including detailed manufacturing drawings and engineering calculations, in compliance with
                        international codes and standards.
                        </p>
                        <p>
                        Our team comprises highly specialized engineers with expertise in skid packages, pressure
                        vessels, storage tanks, heat exchangers, boilers, piping, as well as civil and structural
                        engineering. Leveraging proven work processes, advanced planning methodologies, and sophisticated
                        scheduling software, we ensure the successful and timely completion of projects within budget.


                        </p>
                    </div>
                </div>

                {/* Right Column: Info Cards */}
                <div className="col-lg-12">
                    <div className="d-flex flex-column flex-md-row gap-4">
                    <div className="card-container flex-fill">
                    <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h2>Our Values</h2>
                                    </div>
                                    <div className="card-back">
                                        <p>
                                            Our commitment to excellence drives continuous improvement
                                            , while teamwork and commitment ensure collaborative success.
                                             We uphold integrity and transparency, prioritize reliability 
                                             and quality, and focus on learning and growth for innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container flex-fill">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h2>Vision</h2>
                                    </div>
                                    <div className="card-back">
                                        <p>
                                       
                                            Our vision is to be your value-driven partner of choice, leveraging
                                            advanced technologies and data-driven insights to enhance efficiency,
                                            drive transformative results, and set new benchmarks for industry innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container flex-fill mb-3">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h2>Mission</h2>
                                    </div>
                                    <div className="card-back">
                                        <p>Our mission is to be the most reliable engineering partner, delivering
                                           exceptional value through innovative solutions and outstanding service,
                                           while fostering trust and excellence in every project and partnership.</p>
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
