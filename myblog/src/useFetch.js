import { useState, useEffect } from "react";

const useFecth = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    setTimeout(() => {
      getProjects();
      setIsPending(false);
    }, 100);
  }, [url]);

  return { data, isPending, error };
};

export default useFecth;
