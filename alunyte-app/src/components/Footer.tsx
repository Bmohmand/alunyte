import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Alunyte. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;