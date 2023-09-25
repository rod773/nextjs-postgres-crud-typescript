import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  mes: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json({ mes: "getting tasks" });

    case "POST":
      return res.status(200).json({ mes: "creating tasks" });

    default:
      return res.status(201).json({ mes: "invalid method" });
  }
}
