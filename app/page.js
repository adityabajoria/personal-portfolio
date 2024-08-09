import Head from "next/head";
import TypingEffect from "../components/TypingEffect";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <TypingEffect />
        <p className="text-white mt-4 text-xl">Welcome to my portfolio site!</p>
      </main>
    </div>
  );
}
