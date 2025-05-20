import React from "react";
import { Certification } from "../data";

function Extras() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
      <ul className="list-disc list-inside">
        {Certification.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Extras;
