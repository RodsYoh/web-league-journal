import type { NextPage } from "next";
import Head from "next/head";
import { Wrapper } from "../modules/Wrapper";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diário de LoL</title>
        <meta name="description" content="Registre aqui sua desgraça" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main>
          <span>Vai Corinthians</span>
        </main>
      </Wrapper>
    </div>
  );
};

export default Home;
