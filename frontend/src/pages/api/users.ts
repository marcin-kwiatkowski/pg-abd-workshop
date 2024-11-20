import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json([
    { id: 1, login: "m.kwiatkowski" },
    { id: 2, login: "j.kowalski" },
  ]);
}
