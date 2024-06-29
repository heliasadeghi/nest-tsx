import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { url } = req.body;

  try {
    const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
      url
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in API route:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch shortened link. Network error." });
  }
}
