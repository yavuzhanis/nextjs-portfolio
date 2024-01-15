"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Django Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/portfol.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yavuzhanis/portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Project 2 description",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yavuzhanis/E-commerce",
    previewUrl: "/e-commerce-yavuzhanis.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/air.png",
    tag: ["All", "Web"], 
    gitUrl: "https://github.com/yavuzhanis/eCommerceTwo",
    previewUrl: "/minikbey.vercel.app",
  },
  {
    id: 4,
    title: "Airport Application",
    description: "Project 4 description",
    image: "/images/projects/airport.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/yavuzhanis/airport_app",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Chat-Gpt Clone",
    description: "Authentication and CRUD operations",
    image: "/images/projects/chat.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yavuzhanis/chatGpt-JS",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Calorie Counter Application",
    description: "Project 5 description",
    image: "/images/projects/calorie_counter.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yavuzhanis/CALORIE-COUINTER",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;