import React from "react";
import { Certification } from "../data";


// This component displays certifications
function Extras() {
  return (
    <section className="p-6 animate-fadeIn mt-6 bg-white rounded-lg shadow-md">
      {/* Section Title */} 
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certification</h2>
       {/* List of Certifications  */}
      <ul className="list-disc list-inside text-gray-700">
        {Certification.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Extras;
