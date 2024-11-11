import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={100}
        height={100}
      />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
