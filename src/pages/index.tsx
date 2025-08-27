import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import RibaWarriorScore from "@/components/ribaWarrior";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans w-full`}
    >
      <main className="">
        <RibaWarriorScore />
      </main>
      {/* FOOTER */}
      <footer className="flex items-center justify-center border-t border-slate-200 dark:border-slate 800 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-sm opacity-80">
          © {new Date().getFullYear()} Riba Free Foundation •{" "}
          <a
            className="underline"
            href="https://www.ribafree.org.uk"
            target="_blank"
            rel="noreferrer noopener"
          >
            ribafree.org.uk
          </a>
        </div>
      </footer>
    </div>
  );
}
