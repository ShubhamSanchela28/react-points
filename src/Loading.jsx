import React, { useEffect, useState } from "react";

function Loading() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false)
      try {
        const res = await fetch(
          'https://hn.algolia.com/api/v1/search?query=react',
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <div>
      <h1>Loading Example</h1>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        "Loading...."
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.ObjectId}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Loading;
