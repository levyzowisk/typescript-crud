-- CreateTable
CREATE TABLE "faq" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "questionCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answerCreatedAt" TIMESTAMP(3) NOT NULL,
    "font" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);
