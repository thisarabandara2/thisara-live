import React from "react";
import AboutImage from "../assets/about.png";
import css from "../assets/logos/css.png"
import react from "../assets/logos/react.png"
import java from "../assets/logos/java.png"
import spring from "../assets/logos/spring-boot.png"
import sql from "../assets/logos/sql.png"
import python from "../assets/logos/python.webp"
import flutter from "../assets/logos/flutter.png"
import html from "../assets/logos/html.webp"

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Thisara Bandara"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-lg text-gray-300 mb-8">
              I am a passionate full-stack developer with a focus on building modern and responsive web applications.
              With a strong foundation in both frontend and backend technologies, I strive to create seamless and
              efficient user experiences. My core expertise lies in Java, React.js, and Spring Boot.
              I also develop cross-platform mobile applications, ensuring smooth performance, intuitive design, and
              robust integration with backend services.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center mt-6">
              <img src={html} alt="HTML" className="w-12 h-12" />
              <img src={css} alt="CSS" className="w-12 h-12" />
              <img src={react} alt="React" className="w-12 h-12" />
              <img src={java} alt="java" className="w-12 h-12" />
              <img src={spring} alt="Spring Boot" className="w-12 h-12" />
              <img src={sql} alt="SQL" className="w-12 h-12" />
              <img src={python} alt="Python" className="w-12 h-12" />
              <img src={flutter} alt="Flutter" className="w-12 h-12" />
              
            </div>

            {/* Experience Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <Stat number="3+" label="Years Experience" />
              <Stat number="20+" label="Projects Completed" />
              <Stat number="10+" label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = ({ label, width }) => (
  <div className="flex items-center space-x-4">
    <span className="w-1/4 text-sm text-gray-300">{label}</span>
    <div className="w-3/4 bg-gray-800 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out hover:scale-105"
        style={{ width }}
      />
    </div>
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      {number}
    </h3>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);

export default About;
