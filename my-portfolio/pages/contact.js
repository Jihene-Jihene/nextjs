import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <p>Email: [your-email@example.com]</p>
      </section>
    </div>
  );
}
