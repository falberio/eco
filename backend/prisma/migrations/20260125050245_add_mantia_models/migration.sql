-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('CASH', 'BANK', 'CREDIT_CARD', 'DEBIT_CARD', 'DIGITAL', 'OTHER');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE', 'TRANSFER');

-- CreateEnum
CREATE TYPE "BudgetPeriod" AS ENUM ('WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM');

-- CreateTable
CREATE TABLE "Mantia_Category" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "parentId" TEXT,
    "icon" TEXT,
    "color" TEXT,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mantia_Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mantia_Account" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "type" "AccountType" NOT NULL,
    "initialBalance" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "currentBalance" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'ARS',
    "icon" TEXT,
    "color" TEXT,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mantia_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mantia_Transaction" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "type" "TransactionType" NOT NULL,
    "fromAccountId" TEXT,
    "toAccountId" TEXT,
    "amount" DECIMAL(12,2) NOT NULL,
    "categoryId" TEXT,
    "description" TEXT,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "recurringRule" TEXT,
    "receiptNumber" TEXT,
    "receiptUrl" TEXT,
    "tags" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mantia_Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mantia_Budget" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT,
    "amount" DECIMAL(12,2) NOT NULL,
    "period" "BudgetPeriod" NOT NULL DEFAULT 'MONTHLY',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "alertThreshold" DECIMAL(5,2),
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mantia_Budget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mantia_Category_code_key" ON "Mantia_Category"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Mantia_Account_code_key" ON "Mantia_Account"("code");

-- CreateIndex
CREATE INDEX "Mantia_Account_type_idx" ON "Mantia_Account"("type");

-- CreateIndex
CREATE INDEX "Mantia_Account_isActive_idx" ON "Mantia_Account"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Mantia_Transaction_code_key" ON "Mantia_Transaction"("code");

-- CreateIndex
CREATE INDEX "Mantia_Transaction_type_idx" ON "Mantia_Transaction"("type");

-- CreateIndex
CREATE INDEX "Mantia_Transaction_transactionDate_idx" ON "Mantia_Transaction"("transactionDate");

-- CreateIndex
CREATE INDEX "Mantia_Transaction_categoryId_idx" ON "Mantia_Transaction"("categoryId");

-- CreateIndex
CREATE INDEX "Mantia_Transaction_fromAccountId_idx" ON "Mantia_Transaction"("fromAccountId");

-- CreateIndex
CREATE INDEX "Mantia_Transaction_toAccountId_idx" ON "Mantia_Transaction"("toAccountId");

-- CreateIndex
CREATE INDEX "Mantia_Budget_categoryId_idx" ON "Mantia_Budget"("categoryId");

-- CreateIndex
CREATE INDEX "Mantia_Budget_period_idx" ON "Mantia_Budget"("period");

-- CreateIndex
CREATE INDEX "Mantia_Budget_startDate_idx" ON "Mantia_Budget"("startDate");

-- AddForeignKey
ALTER TABLE "Mantia_Category" ADD CONSTRAINT "Mantia_Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Mantia_Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mantia_Transaction" ADD CONSTRAINT "Mantia_Transaction_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Mantia_Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mantia_Transaction" ADD CONSTRAINT "Mantia_Transaction_toAccountId_fkey" FOREIGN KEY ("toAccountId") REFERENCES "Mantia_Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mantia_Transaction" ADD CONSTRAINT "Mantia_Transaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Mantia_Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mantia_Budget" ADD CONSTRAINT "Mantia_Budget_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Mantia_Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
