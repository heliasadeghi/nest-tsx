import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemLink from "../ItemLink/ItemLink";

// Define the prop types for LinkResult
interface LinkResultProps {
  inputValue: string;
}

// Define the expected shape of the response data
interface ApiResponse {
  result_url: string;
  error?: string; // Make error optional since it may not always be present
}

const LinkResult: React.FC<LinkResultProps> = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Explicitly type the response data using the ApiResponse interface
      const res = await axios.post<ApiResponse>("/api/shorten", {
        url: inputValue
      });

      // Check for errors in the response
      if (res.data.error) {
        setError(res.data.error);
        return;
      }

      setShortenLink(res.data.result_url);
    } catch (err) {
      console.log("Error details:", err);
      setError("please check your netWork and vpn");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.trim()) {
      fetchData();
    }
  }, [inputValue]);

  if (loading) return (
    <p className="text-center mt-2 text-[var(--bg-dark-violet)] font-medium text-[18px]">Loading...</p>
  );
  if (error) return (
    <p className="text-center mt-2 text-red-700 font-medium text-[18px]">
      {" "}
      {error}
    </p>
  );

  return shortenLink ? (
    <>
      <div className="flex flex-col gap-2 px-5 sm:px-0">
        <ItemLink inputValue={inputValue} shortenLink={shortenLink} />
      </div>
    </>
  ) : (
  ""
  );
};

export default LinkResult;
