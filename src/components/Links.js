import React from "react";

function Links({linkedin, github }) {
  return (
    <div>
        <h3>Links</h3>
        {linkedin && <a href={linkedin}>{linkedin}</a>}
        {github && <a href={github}>{github}</a>}
    </div>
  );
}

export default Links;