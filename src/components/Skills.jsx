import React from "react";
import { skills } from "../data";

// Skills component to display a list of technologies/skills
function Skills() {
  return (
    <section className="animate-fadeIn p-4 mt-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
      {/* Container for skill items */}
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm shadow-sm hover:cursor-pointer hover:scale-110"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
