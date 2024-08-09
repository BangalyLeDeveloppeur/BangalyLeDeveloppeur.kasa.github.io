import React from "react";

const Tag = ({ logement }) => {
  const selectedTags = logement.tags;
  //console.log(selectedTags)
  return (
    <div className="tag_groupe">
      {selectedTags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
