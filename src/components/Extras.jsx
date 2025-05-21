import React from "react";
import { Certification } from "../data";

function Extras() {
  return (
    <section className="p-6 animate-fadeIn mt-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hobbies</h2>
      <ul className="list-disc list-inside text-gray-700">
        {Certification.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Extras;
