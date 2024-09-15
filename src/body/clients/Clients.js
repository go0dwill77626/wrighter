import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Clients = () => {
  
  return (
    <div className="container mt-4">
      <div className="marquee bg-light p-3" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <marquee> <h2>Data under feed</h2></marquee>
      </div>
    </div>
  );
};

export default Clients;
