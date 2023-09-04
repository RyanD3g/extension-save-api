-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "ConfigsVscode" (
    "id" TEXT NOT NULL,
    "settingsJson" TEXT NOT NULL,
    "extensions" TEXT[],
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_nickname_key" ON "Users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "ConfigsVscode_id_key" ON "ConfigsVscode"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ConfigsVscode_userId_key" ON "ConfigsVscode"("userId");

-- AddForeignKey
ALTER TABLE "ConfigsVscode" ADD CONSTRAINT "ConfigsVscode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
