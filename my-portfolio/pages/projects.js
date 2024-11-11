import Navbar from "../components/Navbar";
import styles from "../styles/Projects.module.css";
import { projectData } from "../utils/data.js/next.config";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <section className={styles.projects}>
        <h2>My Projects</h2>
        <div className={styles.projectList}>
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
