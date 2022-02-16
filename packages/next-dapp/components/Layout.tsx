import Head from "next/head";
import Image from "next/image";

type LayoutProps = {
  children?: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-amber-50 bg-cherry-blossom-branch bg-no-repeat bg-top font-mono">
      <Head>
        <title>Your DApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="z-10 py-12 flex flex-col items-center">{children}</main>
    </div>
  );
}
