import React from "react";
import { education, experience } from "../data";

// This component displays the Education, Internship Experience, and Projects
function Experience() {
  return (
    <section className="p-6 animate-fadeIn bg-white rounded-lg shadow-md">
      {/* Education Section */}
      <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
        Education
      </h2>
      <hr />
      {education.map((item, id) => (
        <div key={id} className="mb-3 bg-gray-50 rounded-lg shadow-md p-4">
          <h3 className="md:text-lg text-md font-bold">{item.title}</h3>
          <p className="md:text-md text-sm">{item.institution}</p>
          <p className="md:text-md text-sm">{item.Percentage}</p>
          <p className="md:text-sm text-xs text-gray-600">{item.year}</p>
        </div>
      ))}
      {/* Internship/Experience Section */}
      <h2 className="md:text-3xl text-2xl font-semibold mt-6 mb-4 ">
        Experience/Internships
      </h2>
      <hr />
      {experience.Internship.map((item, id) => (
        <div key={id} className="mb-2 bg-gray-50 rounded-lg shadow-md p-4">
          <h3 className="md:text-lg text-md font-bold">
            {item.title} - {item.company}
          </h3>
          <p className="md:text-md text-sm text-gray-600">{item.duration}</p>
          <p className="md:text-md text-sm">{item.description}</p>
        </div>
      ))}
      {/* Projects Section */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">Projects</h2>
      <hr />
      {experience.Projects.map((item, id) => (
        <div
          key={id}
          className="mb-3 bg-gray-50 rounded-lg flex flex-col gap-1 shadow-md p-4"
        >
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="md:text-md text-sm text-gray-900">{item.techStack}</p>
          <a
            href={item.Github}
            target="_blank"
            className="md:text-md text-sm text-gray-900"
          >
            {item.Github}
          </a>
          <a
            href={item.liveLink}
            target="_blank"
            className="md:text-md text-sm text-gray-900"
          >
            {item.liveLink}
          </a>
        </div>
      ))}
    </section>
  );
}

export default Experience;
