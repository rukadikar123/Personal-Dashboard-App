import React from "react";
import { education, experience } from "../data";

function Experience() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((item, id) => (
        <div key={id} className="mb-2">
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.institution}</p>
          <p>{item.Percentage}</p>
          <p className="text-sm text-gray-600">{item.year}</p>
        </div>
      ))}
      <h2 className="text-xl font-semibold mt-6 mb-4">Experience/Internships</h2>
      {experience.Internship.map((item, id) => (
        <div key={id} className="mb-2">
          <h3 className="font-bold">
            {item.title} - {item.company}
          </h3>
          <p className="text-sm text-gray-600">{item.duration}</p>
          <p>{item.description}</p>
        </div>
      ))}
      <h2 className="text-xl font-semibold mt-6 mb-4">Projects</h2>
      {experience.Projects.map((item,id)=>(
        <div key={id} className="mb-2">
          <h3 className="font-bold">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.techStack}</p>
          <p className="text-sm text-gray-600">{item.Github}</p>
          <p className="text-sm text-gray-600">{item.liveLink}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
