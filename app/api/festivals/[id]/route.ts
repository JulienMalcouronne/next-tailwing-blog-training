
import {prisma} from '@/app/db'

import { NextRequest, NextResponse } from "next/server";

export const GET = async (_ : NextRequest,{ params }: { params: { id: string } })  => {

  const festival = await prisma.festival.findFirst({where: {
    id: params.id
  }});



  return NextResponse.json(festival)
}
