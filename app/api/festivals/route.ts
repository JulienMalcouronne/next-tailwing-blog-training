// https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from "next";
import { ErrorResponse } from "@/pages/utils/api";
import {prisma} from '@/app/db'
import { Festival } from "@prisma/client";
import { NextResponse } from "next/server";




type GetResponse = {
  data: Festival
};

export const GET: NextApiHandler<GetResponse | ErrorResponse > = async (_, res) => {

    try {
      const festivals = await prisma.festival.findMany()

      return NextResponse.json(festivals)
    } catch (error) {

      res.status(403).json({ error: {
        message: "Forbidden"
      } });
      return res
    }
};
