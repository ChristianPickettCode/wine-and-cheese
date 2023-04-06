import Head from "next/head";
import styles from "../styles/Home.module.css";
import Start from "./components/start";
import Ideal from "./components/ideal";
import Decide from "./components/decide";
import Guests from "./components/guests";
import { useStore, Guest } from "./store/store";

import { useEffect, useState } from "react";

import { supabase } from "./api/api";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const thisGuest = useStore((state) => state.thisGuest);
  const isInterested = useStore((state) => state.isInterested);
  const guestSaved = useStore((state) => state.guestSaved);
  const [guest, setGuest] = useState<Guest | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const { data, error } = await supabase.from("guests").select();
    console.log(data, error);
  };

  // const insertData = async () => {
  //   const { data, error } = await supabase.from("guests").insert([
  //     {
  //       name: "jane",
  //       cheese: false,
  //       wine: true,
  //     },
  //   ]);
  // };
  useEffect(() => {
    getData();
    console.log(thisGuest);

    return () => {};
  }, [supabase]);

  useEffect(() => {
    if (thisGuest != null) {
      setGuest(thisGuest);
    }
  }, [thisGuest]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const Loading = () => {
    return (
      <Button isLoading variant="solid">
        Email
      </Button>
    );
  };

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
        {isLoading ? (
          <Loading />
        ) : guest ? (
          isInterested ? (
            guestSaved ? (
              "See you soon 😇"
            ) : (
              <Decide />
            )
          ) : (
            <Ideal />
          )
        ) : (
          <Start />
        )}

        {/* <Ideal /> */}
        {/* <Decide /> */}
        {/* <Guests /> */}
      </main>
    </div>
  );
}
