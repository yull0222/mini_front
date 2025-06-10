interface newsFetcherProps{
  uriEncodedString:string
};
export default function NewsFetcher({uriEncodedString}:newsFetcherProps) {
  const myHeaders:Headers = new Headers();
  myHeaders.append("X-Naver-Client-Id", "qQ0rDJDLUQdGBC0U6Ndl");
  myHeaders.append("X-Naver-Client-Secret", "rAvPi9_d4R");

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };

  fetch(
    `/v1/search/news.json?query=${uriEncodedString}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  return <div>NewsFetcher</div>;
}
