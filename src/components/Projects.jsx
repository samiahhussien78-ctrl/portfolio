import React, { memo, useMemo } from "react";
import { FolderKanban } from "lucide-react"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Project Card ---
const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {project.title}
      </h3>

      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>


    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// --- Main Projects Component ---
function ProjectsComponent() {
  const { t } = useTranslation();

  const projectsData = useMemo(
    () => [
      {
  title: t("flowerSalesTitle"),
  image: img1,
  desc: t("flowerSalesDesc"),
  tags: [
    "Power BI",
    "Power Query",
    "Excel",
    "Data Visualization",
  ],
  links: [
    {
      href: "#",
    },
  ],
},

      {
  title: t("realEstateTitle"),
  image: img2,
  desc: t("realEstateDesc"),
  tags: [
    "Power BI",
    "Dashboard",
    "Excel",
    "Data Analysis",
  ],
  links: [
    {
      href: "#",
    },
  ],
},

      {
  title: t("heritageSalesTitle"),
  image: img3,
  desc: t("heritageSalesDesc"),
  tags: [
    "Excel",
    "Pivot Tables",
    "Dashboard",
    "Data Analysis",
  ],
  links: [
    {
      href: "#",
    },
  ],
},
],
[t]
);

  return (<div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            {t("projectsTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
           {t("projectsDescription")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ProjectsComponent);