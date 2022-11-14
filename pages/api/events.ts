import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, message, project, channel, icon, tags } = req.body;

  const headers = { Authorization: `Bearer ${process.env.LOGSNAG_API_TOKEN}` };

  const data = {
    project,
    channel,
    event: title,
    description: message,
    icon,
    notify: true,
    tags,
  };

  try {
    await axios.post(process.env.LOGSNAG_URL!, data, { headers: headers });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: "Event sent successfully" });
}
