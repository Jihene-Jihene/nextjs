import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in building scalable
          web applications.
        </p>
        <p>Technologies I work with:</p>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>HTML & CSS (SCSS, TailwindCSS)</li>
          <li>Databases (MySQL, MongoDB)</li>
        </ul>
      </section>
    </div>
  );
}
