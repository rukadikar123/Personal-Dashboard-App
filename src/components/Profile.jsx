import React from "react";
import { profile } from "../data";

function Profile() {
  return (
    <section className="p-6 text-center">
      <img src={profile.photo} alt="Profile Photo"  className="w-32 h-32 mx-auto rounded-full"/>
      <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
      <p className="mt-2">{profile.bio}</p>
      <div className="mt-4 space-x-4">
        <a href={`mailto:${profile.contact.email}`}>Email</a>
        <a
          href={profile.contact.github}
          target="_blank"
        >
          GitHub
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
        >
          LinkedIn
        </a>{" "}
      </div>
    </section>
  );
}

export default Profile;
