import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]); // Default to an empty array
  const [error, setError] = useState<string | null>(null); // Error as string or null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Ensure this is an array
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Extract the message from Error object
        } else {
          setError("An unknown error occurred"); // Handle non-Error cases
        }
      }
    };

    fetchData();
  }, [url]);

  if (error) {
    console.error("Fetch error:", error);
  }

  return data;
};

export default useFetch;
