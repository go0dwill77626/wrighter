import React, { useState } from 'react';
import './contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    note: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!/^\d+$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be numeric';
    if (!formData.note) newErrors.note = 'Note is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmissionStatus('');

    // Add timestamp
    // const timestamp = new Date().toISOString();
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const timestamp = new Intl.DateTimeFormat('en-IN', options).format(new Date());


    try {
      const response = await fetch('https://sheetdb.io/api/v1/n3nkz3hp3s826', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              MobileNumber: formData.mobile,
              Address: formData.address,
              Message: formData.note,
              ["Timestamp(IST) dd-mm-yyyyy"]: timestamp // Add the timestamp here
            }
          ]
        }),
      });

      if (response.ok) {
        setSubmissionStatus('Data submitted successfully!');
        setFormData({
          name: '',
          address: '',
          mobile: '',
          note: ''
        });
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Failed to submit data: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      setSubmissionStatus(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="container-fluid margintop">
      {/* Contact Form */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card p-4 shadow-sm" style={{ height: '100%' }}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  id="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                  id="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="note" className="form-label">Note</label>
                <textarea
                  className={`form-control ${errors.note ? 'is-invalid' : ''}`}
                  id="note"
                  rows="3"
                  placeholder="Enter your note"
                  value={formData.note}
                  onChange={handleChange}
                ></textarea>
                {errors.note && <div className="invalid-feedback">{errors.note}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
              {submissionStatus && (
                <div className={`mt-3 alert ${submissionStatus.startsWith('Failed') ? 'alert-danger' : 'alert-info'}`}>
                  {submissionStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map and Address Section */}
      <div className="row">
        {/* Map Card */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Our Location</h5>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450915!2d144.95373531550464!3d-37.81627927975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a45f764c1b1!2sOffice%20Address!5e0!3m2!1sen!2sus!4v1630508993512!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Address Card with Background Image */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
          <div
            style={{ backgroundImage: `url('/images/dlf.jpg')` }}
            className="card shadow-sm h-100 address-card"
          >
            <div className="card-body text-white">
              <h5 className="card-title">Our Office</h5>
              <p className="card-text">
                DCG1-1617, 16F, DLF CORPORATE GREENS,<br />
                TOWER-1 SECTOR-74A,<br />
                GURUGRAM-122004.<br />
                HARYANA (INDIA)<br />
                <br />
                <span><b>Email: </b></span>
                <a style={{ color: "white" }} href="mailto:sales@prosaectotal.com">sales@prosaectotal.com</a><br />
                <span><b>Web: </b></span>
                <a style={{ color: "white" }} href="http://www.prosaectotal.com" target="_blank" rel="noopener noreferrer">www.prosaectotal.com</a><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
