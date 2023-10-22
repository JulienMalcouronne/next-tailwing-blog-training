-- CreateTable
CREATE TABLE "FestivalParticipants" (
    "id" TEXT NOT NULL,
    "festivalId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FestivalParticipants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FestivalParticipants" ADD CONSTRAINT "FestivalParticipants_festivalId_fkey" FOREIGN KEY ("festivalId") REFERENCES "Festival"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FestivalParticipants" ADD CONSTRAINT "FestivalParticipants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
