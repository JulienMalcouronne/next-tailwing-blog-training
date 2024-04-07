// https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler, NextApiResponse } from 'next';
import { ErrorResponse } from '@/pages/utils/api';
import { prisma } from '@/app/db';
import { Festival } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

type GetResponse = {
  data: Festival[];
};

export const GET: NextApiHandler<GetResponse | ErrorResponse> = async (
  _,
  res,
) => {
  try {
    const festivals = await prisma.festival.findMany();

    return NextResponse.json(festivals);
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const res = await prisma.festival.create({ data: body });

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    // res.status(403).json({ error: {
    //   message: "Forbidden"
    // } });
    // return res
  }
};
