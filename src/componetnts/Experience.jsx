import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.jpg";
import Java from "../assets/java.png";
import Js from "../assets/javascript.png";
import Database from "../assets/oracle.png";
import spring from "../assets/springBoot.jpg";

const Experience = () => {
  const cardItemsPro = [
    { id: 1, logo: html, title: "HTML" },
    { id: 2, logo: css, title: "CSS" },
    { id: 3, logo: Java, title: "Java" },
    { id: 4, logo: Js, title: "JavaScript" },
    { id: 5, logo: Database, title: "Database (Oracle)" },
    { id: 6, logo: spring, title: "Spring Boot" },
  ];

  return (
    <div name="Experience" className="w-full container mx-auto px-4 md:px-12 my-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Experience</h1>
        <span className="text-gray-600 text-lg">
          I have about 1.5 years of experience working with the following technologies:
        </span>
      </div>

      {/* Experience Details */}
      <div className="bg-gray-100 text-gray-900 p-8 rounded-xl shadow-lg  mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Backend Developer & DevOps Enthusiast</h2>
        <p className="text-gray-600 mb-6">
          🚀 Passionate about building scalable backend systems, API integrations, and DevOps automation.
        </p>

        {/* Software Development */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-500">Software Development & Backend Engineering</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Developed and maintained{" "}
              <span className="font-semibold">Spring Boot applications</span> with authentication (OAuth2, JWT) and
              database management (MySQL, MongoDB, JPA, Hibernate).
            </li>
            <li>
              Built <span className="font-semibold">REST APIs</span> for payment systems and a Smart Contact Manager.
            </li>
            <li>
              Explored <span className="font-semibold">full-stack development</span> using React with Redux for state
              management.
            </li>
            <li>
              Worked on <span className="font-semibold">multithreading, thread synchronization, and executor services</span>{" "}
              in Java.
            </li>
          </ul>
        </div>

        {/* DevOps & Linux */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-500">DevOps & Linux Administration</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Configured and managed <span className="font-semibold">Linux servers</span>, handling cron jobs, SELinux
              policies, and system monitoring.
            </li>
            <li>
              Worked with <span className="font-semibold">Docker and containerized</span> Spring Boot applications.
            </li>
            <li>
              Set up CI/CD pipelines and automated deployments with <span className="font-semibold">GitHub Actions</span>.
            </li>
          </ul>
        </div>

        {/* Additional Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500">Additional Technologies & Skills</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Hands-on experience with <span className="font-semibold">Kafka and Redis</span> for real-time messaging and
              caching.
            </li>
            <li>
              Worked on <span className="font-semibold">JUnit & Mockito for testing</span> in Spring Boot applications.
            </li>
            <li>
              Learning <span className="font-semibold">Docker, Thymeleaf</span>, and monolithic architecture.
            </li>
          </ul>
        </div>
      </div>

      {/* Technology Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-6 my-10 place-items-center">
        {cardItemsPro.map(({ id, logo, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-3 
                       cursor-pointer hover:scale-105 transition duration-200 w-[140px] h-[140px] 
                       md:w-[180px] md:h-[180px]"
          >
            <img src={logo} alt={title} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] p-1 rounded-full border-2" />
            <span className="text-sm font-semibold mt-2 text-gray-800">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
