import React from "react";
import { profile } from "../data";

function Profile() {
  return (
    <section className="m-10 p-6 text-center animate-fadeIn bg-gradient-to-br from-blue-50 shadow-md to-white rounded-lg ">
      <img src={profile.photo} alt="Profile Photo"  className="md:w-32 md:h-32 w-24 h-24 mx-auto rounded-full border-4 border-blue-200 shadow-lg"/>
      <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mt-4">{profile.name}</h2>
      <p className="mt-4 text-md md:text-lg text-gray-600">{profile.bio}</p>
      <div className="mt-8 space-x-4">
        <a  href={`mailto:${profile.contact.email}`}  className="bg-gray-900 text-blue-300  hover:bg-gray-700 rounded-sm p-2 ">Email</a>
        <a
          href={profile.contact.github}
          target="_blank"
          className="bg-gray-900 text-blue-300  hover:bg-gray-700 rounded-sm p-2"
        >
          GitHub
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          className="bg-gray-900 text-blue-300  hover:bg-gray-700 rounded-sm p-2"
        >
          LinkedIn
        </a>{" "}
      </div>
    </section>
  );
}

export default Profile;
