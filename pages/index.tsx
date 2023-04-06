import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Start from "./components/start";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🍷 + 🧀</title>
        <meta name="description" content="🍷 + 🧀" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍷🧀</text></svg>"
        />
      </Head>

      <main className={styles.main}>
        <Start />
      </main>
    </div>
  );
}
