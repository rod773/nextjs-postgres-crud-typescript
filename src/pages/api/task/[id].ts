import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);

  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json({ mes: "getting unique task" });

    case "PUT":
      return res.status(200).json({ mes: "updating unique tasks" });

    case "DELETE":
      return res.status(200).json({ mes: "deleting unique tasks" });

    default:
      return res.status(201).json({ mes: "invalid method" });
  }
};
