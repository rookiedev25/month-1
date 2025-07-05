// course-card component:
import React from 'react'

const CourseCard = (course) => {
    
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {course.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {course.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 relative "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

// export default CourseCard


// app component
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
const App = () => {
  const courses = [
    {
      name: "MadCap Flare Essentials",
      description:
        "Learn how to create, manage, and publish multi-format documentation using MadCap Flare.",
    },
    {
      name: "Adobe FrameMaker Fundamentals",
      description:
        "Get hands-on training in structured and unstructured authoring with Adobe FrameMaker.",
    },
    {
      name: "DITA XML Basics",
      description:
        "Understand the principles of Darwin Information Typing Architecture and structured XML authoring.",
    },
    {
      name: "Markdown for Documentation",
      description:
        "Master Markdown syntax for writing clean, lightweight, and version-controlled documentation.",
    },
    {
      name: "Git and GitHub for Technical Writers",
      description:
        "Learn how to manage documentation projects using Git version control and GitHub collaboration.",
    },
    {
      name: "Oxygen XML Editor Workshop",
      description:
        "Get started with structured authoring, XML validation, and DITA workflows using Oxygen XML Editor.",
    },
    {
      name: "RoboHelp Quick Start",
      description:
        "Learn how to create responsive help systems and knowledge bases using Adobe RoboHelp.",
    },
    {
      name: "Snagit and Camtasia for Visual Docs",
      description:
        "Use Snagit for screenshots and Camtasia for screen recording to enhance visual technical documentation.",
    },
    {
      name: "Confluence for Documentation Teams",
      description:
        "Collaborate, author, and manage internal and external documentation in Confluence spaces.",
    },
    {
      name: "Microsoft Word for Long Documents",
      description:
        "Learn styles, templates, TOC, and indexing features to manage long-form documents in Word.",
    },
    {
      name: "HelpNDoc Basics",
      description:
        "Create CHM, HTML, and PDF documentation easily using the HelpNDoc authoring environment.",
    },
    {
      name: "Paligo Cloud Authoring",
      description:
        "Explore component-based authoring, topic reuse, and team collaboration using Paligo’s cloud platform.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex py-5 px-5 mt-15 gap-10 flex-wrap justify-center">
        {
          courses.map(function (c, index) {
            return <CourseCard 
              key = {index}
              name={c.name}
              description = {c.description}
            />
          })
        }
      </main>
    </>
  );
};

export default App;
