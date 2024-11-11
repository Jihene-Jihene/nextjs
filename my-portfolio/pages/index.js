import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Your Name], a Full-Stack Developer</p>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className={styles.profileImage}
        />
      </section>
    </div>
  );
}
