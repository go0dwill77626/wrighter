import React, { useState } from "react"; // Ensure proper import of React
import { AccordionList } from "./AccordionList";
import { AccordionArray } from "../../constant/constant"; // Ensure this path is correct

const Accordion = () => {
    const [showSectionIndex, setShowSectionIndex] = useState(null);

    const handleSectionToggle = (index) => {
        setShowSectionIndex(index === showSectionIndex ? null : index);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {AccordionArray.map((item, index) => (
                    <div key={index} className="col-md-12 mb-4">
                        <AccordionList
                            item={item}
                            index={index}
                            showSectionIndex={showSectionIndex}
                            showSection={() => handleSectionToggle(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
