import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Nextjs Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <Link href="/" passHref>Home</Link>
          <Link href="/events" passHref>Events</Link>
          <Link href="/about-us" passHref>About Us</Link>
        </nav>
      </header>
    

      <footer></footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
