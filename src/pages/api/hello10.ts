// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AllowCors from "@/middlewares/CorsMiddleware";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  res.status(200).json({ name: "Ariska Hidayat" });
}

export default AllowCors(handler);
