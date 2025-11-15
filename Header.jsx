import Link from "next/link";


export default function Header() {
return (
<header className="fixed top-0 left-0 w-full bg-white shadow z-50">
<nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-xl font-bold">PropertyNext</h1>
<div className="space-x-6">
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/properties">Properties</Link>
<Link href="/contact">Contact</Link>
</div>
</nav>
</header>
);
}
