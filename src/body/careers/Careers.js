import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    currentRole: '',
    experience: '',
    skills: '',
    description: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to get timestamp in IST
  const getISTTimestamp = () => {
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Intl.DateTimeFormat('en-IN', options).format(new Date());
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true); // Set submitting state to true

    // Generate timestamp
    const timestamp = getISTTimestamp();

    try {
      // Send form data to SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/nrgy99qrfe3rr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [ {
            Name: formData.name,
            CurrentRole: formData.currentRole,
            Experience: formData.experience,
            Skills: formData.skills,
            Description: formData.description,
            Timestamp: timestamp, // Include timestamp in the request
          } ]
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setSubmissionStatus('Data submitted successfully!');
        setFormData({
          name: '',
          currentRole: '',
          experience: '',
          skills: '',
          description: ''
        });
        // Navigate to home page after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 5000);
      } else {
        setSubmissionStatus('Failed to submit data. Please try again later.');
      }
    } catch (error) {
      setSubmissionStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false); // Reset submitting state after processing
    }
  };

  const AfterSubmit = () => {
    const [countdown, setCountdown] = useState(5); // Initial countdown value
    const navigate = useNavigate();
  
    useEffect(() => {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown every second
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      } else {
        navigate('/'); // Redirect to home page when countdown reaches 0
      }
    }, [countdown, navigate]);

    return(<>
    <div className="alert alert-success mt-4" role="alert">
      <h4 className="alert-heading">Submission Successful!</h4>
      <p>Thank you for submitting your information!</p>
      <p>
        Kindly share your resume at 
        <a href="mailto:prosacetotal@gmail.com" style={{ color: 'black' }}>
          <strong> prosacetotal@gmail.com </strong>
        </a> 
        for further processing.
      </p>
      <hr />
      <p className="mb-0">We look forward to reviewing your application.</p>
      <hr />
      <p className="text-center mb-4">
        Redirecting you to the Home Page in {countdown} seconds...
      </p>
    </div>
    </>)
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Join Our Team</h2>
      {!formSubmitted ? (
        <form 
          onSubmit={handleSubmit} 
          className="p-4 bg-light shadow-lg"
          style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          , backgroundImage:'linear-gradient(247deg, rgb(195 127 127), transparent)' 
           }} // Added box-shadow
        >
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="currentRole" className="form-label">Current Job Role</label>
              <input 
                type="text" 
                className="form-control" 
                id="currentRole" 
                value={formData.currentRole} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="experience" className="form-label">Experience (in years)</label>
              <input 
                type="number" 
                step="0.1" 
                className="form-control" 
                id="experience" 
                value={formData.experience} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skills" className="form-label">Skills</label>
              <input 
                type="text" 
                className="form-control" 
                id="skills" 
                value={formData.skills} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea 
              className="form-control" 
              id="description" 
              rows="4" 
              value={formData.description} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100"
            disabled={isSubmitting} // Disable button when submitting
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : 
       ( <AfterSubmit />)
    }
      {submissionStatus && (
        <div className="mt-3 alert alert-info">
          {submissionStatus}
        </div>
      )}
    </div>
  );
};

export default Careers;
