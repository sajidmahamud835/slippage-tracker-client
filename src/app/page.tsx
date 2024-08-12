'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Login from "./components/Login";

export default function Home() {
  return (
    <main className="mt-3">
      <Login />
    </main>
  );
}
