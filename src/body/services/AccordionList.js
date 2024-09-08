import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

// AccordionList Component
export const AccordionList = ({ item, index, showSectionIndex, showSection }) => {
    const isOpen = showSectionIndex === index;

    return (
        <div className="accordion-item mb-3 border-light shadow-lg"> {/* Updated container class */}
            <div
                className="d-flex justify-content-between align-items-center text-white rounded-top px-3 py-2"
                style={{
                    cursor: 'pointer',
                    backgroundImage: 'linear-gradient(55deg, #b32877, #c45959, #a78ac0)',
                    transition: 'background-color 0.3s ease'
                }}
                onClick={() => showSection(index)}
            >
                <h5 className="mb-0">{item.title}</h5>
                <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} fs-4`}></i>
            </div>
            {/* Container for collapsible content */}
            <div
                className="overflow-hidden"
                style={{
                    maxHeight: isOpen ? '500px' : '0', // Adjust maxHeight for smooth animation
                    transition: 'max-height 0.5s ease',
                }}
            >
                <div className="px-3 py-2"> {/* Removed card-body class */}
                    {item.list.length > 0 && (
                        <ul className="list-unstyled">
                            {item.list.map((x, i) => (
                                <li key={i} className="mb-2">
                                    <i className="bi bi-check-circle text-success me-2"></i>
                                    {x}
                                </li>
                            ))}
                        </ul>
                    )}
                    {item.description && (
                        <div className="p-3 rounded mt-3" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                            <p className="mb-0">{item.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};