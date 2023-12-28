
import {prisma} from '@/app/db'

import { NextRequest, NextResponse } from "next/server";

export const GET = async (request : NextRequest,{ params }: { params: { id: string } })  => {

  const festival = await prisma.festival.findUnique({where: {
    id: params.id
  }});

  return NextResponse.json(festival)
}
