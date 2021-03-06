/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import "react-notifications/lib/notifications.css";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import {
  Network,
  Connect,
  Account,
  GratitudeNftContractInfo,
  GratitudeNftMintContainer,
} from "../components";

const Home: NextPage = () => {
  const [{ data: accountData }] = useAccount();
  const [{ data: networkData }] = useNetwork();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>("");

  useEffect(() => {
    setCurrentAccount(accountData?.address);
  }, []);

  useEffect(() => {
    const accountAddress = accountData?.address;
    if (accountAddress && accountAddress !== currentAccount) {
      setCurrentAccount(accountAddress);
    }
  }, [accountData]);

  const onGratitudeMintSuccess = (
    title: string,
    message: string,
    url: string
  ) => {
    NotificationManager.success(
      `Title: ${title}  Message: ${message}`,
      "Gratitude Shipped!",
      3000,
      () => {
        const win = window.open(url, "_blank");
        win?.focus();
      }
    );
  };

  return (
    <>
      <NotificationContainer />
      {accountData && (
        <div className="bg-orange-200 font-mono fixed bottom-0 right-0 p-4">
          <Account />
          <Network />
          {!networkData?.chain?.unsupported && <GratitudeNftContractInfo />}
        </div>
      )}
      <Link href="/feed">
        <a className="px-4 py-2 my-4 border rounded-lg bg-red-400 hover:bg-orange-200 shadow text-white font-bold">
          Go to Feed
        </a>
      </Link>
      {!accountData && <Connect />}
      {accountData && !networkData?.chain?.unsupported && (
        <GratitudeNftMintContainer onMintSuccess={onGratitudeMintSuccess} />
      )}
    </>
  );
};

export default Home;
