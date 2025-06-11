import { type newsInfo } from "./NewsFetcher";

interface dataProps {
  data: newsInfo;
}

export default function NewsCard({ data }: dataProps) {
  return (
    <div className="m-2 p-1 border">
      <a href={data.link} className="text-blue-600 underline">
        {data.title.replace(new RegExp(/<b>|<\/b>|\&quot;/, "g"), "")}<br/>{data.pubDate}
      </a>
    </div>
  );
}
