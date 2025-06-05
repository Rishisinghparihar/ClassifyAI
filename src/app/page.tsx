import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: 'url("/bg-5.webp")' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-2">
        <Image src="/clg-prev.png" alt="clg-logo" width={200} height={200} className="invert" />

        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
          INDIAN INSTITUTE OF TECHNOLOGY, GUWAHATI
        </h1>
        <h6 className="text-white text-sm sm:text-base leading-tight">
          भारतीय प्रौद्योगिकी संस्थान, गुवाहाटी
        </h6>

        <Link
          href="/auth/login"
          className="mt-4 bg-blue-400 flex items-center justify-center h-10 px-6 text-lg sm:text-xl w-40 rounded text-white hover:bg-blue-500 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
