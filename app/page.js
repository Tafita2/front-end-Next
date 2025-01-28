"use client";
import Image from "next/image";
import Principal from "./components/Principal";
import Navbar from "./components/Navbar";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <div className="pt-20">
        <Principal/>
        <Contact/>
      </div>
    </div>
  );
}
