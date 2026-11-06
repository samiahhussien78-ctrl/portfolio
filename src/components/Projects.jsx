import React, { memo, useMemo } from "react";
import { FolderKanban } from "lucide-react"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";


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

const ProjectCard = memo(({ project }) => { return ( <motion.div variants={itemVariants} className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full" > <img
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

  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-5 py-3 rounded-lg font-bold mt-2 inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
      </svg>
      View on GitHub
    </a>
  )}

  {project.report && (
    <a
      href={project.report}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "10px 20px",
        borderRadius: "8px",
        display: "inline-flex",
        justifyContent: "center",
        fontWeight: "700",
        marginTop: "12px",
        border: "2px solid #000000",
      }}
    >
      View Report
    </a>
  )}
</motion.div>
); });
ProjectCard.displayName = "ProjectCard";
// --- Main Projects Component ---
function ProjectsComponent() {
  const { t } = useTranslation();

 const projectsData = useMemo( () => [ { title: t("flowerSalesTitle"), image: img1, desc: t("flowerSalesDesc"), tags: [ "Power BI", "Power Query", "Excel", "Data Visualization", ],link: "https://github.com/samiahhussien78-ctrl/Flower-Sales-Dashboard", },
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
link: "https://github.com/samiahhussien78-ctrl/Real-Estate-Sales-PowerBI",
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
link: "https://github.com/samiahhussien78-ctrl/Heritage-Sales-Dashboard",
},

{
  title: t("saudiCoffeeTitle"),
  image: img5,
  desc: t("saudiCoffeeDesc"),
  tags: [
    "Excel",
    "Pivot Tables",
    "Pivot Charts",
    "Data Cleaning",
    "Data Analysis",
    "Interactive Dashboard",
  ],
link: "https://github.com/samiahhussien78-ctrl/Coffee-Sales-Dashboard",
},

{
  title: t("graduationProjectTitle"),
  image: img4,
  desc: t("graduationProjectDesc"),
  tags: [
    "Python",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Deep Learning",
    "Data Analysis",
  ],
  report: "/Graduation_Project.pdf",
},
], [t] );

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