import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
       <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
