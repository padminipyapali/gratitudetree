import Link from "next/link";
import { GratitudeFeedItem } from "../components";
import { useAppContext } from "../context/AppContext";

const Feed = () => {
  const { gratitudes } = useAppContext();
  const feedItems = () => {
    return gratitudes.map((gratitude) => {
      return <GratitudeFeedItem key={gratitude.timestamp} data={gratitude} />;
    });
  };

  return (
    <>
      <Link href="/">
        <a className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded-lg shadow">
          Home
        </a>
      </Link>
      <div className="my-8 space-y-4 w-8/12 max-w-xl">{feedItems()}</div>
    </>
  );
};

export default Feed;
