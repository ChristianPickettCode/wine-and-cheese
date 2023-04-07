import Head from "next/head";
import styles from "../styles/Home.module.css";
import Start from "./components/start";
import Ideal from "./components/ideal";
import Decide from "./components/decide";
import Guests from "./components/guests";
import { useStore, Guest } from "../lib/store/store";

import { useEffect, useState } from "react";

import { supabase } from "./api/api";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const thisGuest = useStore((state) => state.thisGuest);
  const isInterested = useStore((state) => state.isInterested);
  const guestSaved = useStore((state) => state.guestSaved);
  const loadGuests = useStore((state) => state.loadGuests);
  const [guest, setGuest] = useState<Guest | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data, error } = await supabase.from("guests").select();
    if (data != null) {
      let lG = data.map((v, _) => ({
        name: v.name,
        cheese: v.cheese,
        wine: v.wine,
        created_at: v.created_at,
        id: v.id,
        suggestion: v.suggestion,
      }));
      loadGuests(lG);
    }
  };

  useEffect(() => {
    getData();

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
              <div>
                <Guests />
              </div>
            ) : (
              <Decide />
            )
          ) : (
            <Ideal />
          )
        ) : (
          <Start />
        )}
      </main>
    </div>
  );
}
