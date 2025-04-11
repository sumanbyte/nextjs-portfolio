import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <Link href={"/"} className="font-bold">
          Suman
        </Link>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
