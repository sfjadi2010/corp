import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="flex justify-center space-x-4">
        <Link href="/">Home </Link>
        <Link href="/performance">Performance </Link>
        <Link href="/reliability">Reliability </Link>
        <Link href="/scale">Scale </Link>
      </nav>
    </div>
  );
}
