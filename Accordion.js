import React, { useState } from "react";

const accordionStyle = {
  maxWidth: "600px",
};

const accordionTitleStyle = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "5px",
  background: "#21aeca",
};

const accordionContentStyle = {
  padding: "5px",
  background: "#39b9d2",
};

const AccordianSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div>
      <div style={accordionTitleStyle} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && (
        <div style={accordionContentStyle}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div style={accordionStyle}>
        {sections.map((section, index) => (
          <AccordianSection
            section={section}
            key={index}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;
