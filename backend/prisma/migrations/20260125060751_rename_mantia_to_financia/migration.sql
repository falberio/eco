-- Rename tables from Mantia to Financia (preserving all data)
ALTER TABLE "Mantia_Category" RENAME TO "Financia_Category";
ALTER TABLE "Mantia_Account" RENAME TO "Financia_Account";
ALTER TABLE "Mantia_Transaction" RENAME TO "Financia_Transaction";
ALTER TABLE "Mantia_Budget" RENAME TO "Financia_Budget";

-- Rename constraints (foreign keys)
ALTER TABLE "Financia_Category" RENAME CONSTRAINT "Mantia_Category_pkey" TO "Financia_Category_pkey";
ALTER TABLE "Financia_Category" RENAME CONSTRAINT "Mantia_Category_parentId_fkey" TO "Financia_Category_parentId_fkey";

ALTER TABLE "Financia_Account" RENAME CONSTRAINT "Mantia_Account_pkey" TO "Financia_Account_pkey";

ALTER TABLE "Financia_Transaction" RENAME CONSTRAINT "Mantia_Transaction_pkey" TO "Financia_Transaction_pkey";
ALTER TABLE "Financia_Transaction" RENAME CONSTRAINT "Mantia_Transaction_categoryId_fkey" TO "Financia_Transaction_categoryId_fkey";
ALTER TABLE "Financia_Transaction" RENAME CONSTRAINT "Mantia_Transaction_fromAccountId_fkey" TO "Financia_Transaction_fromAccountId_fkey";
ALTER TABLE "Financia_Transaction" RENAME CONSTRAINT "Mantia_Transaction_toAccountId_fkey" TO "Financia_Transaction_toAccountId_fkey";

ALTER TABLE "Financia_Budget" RENAME CONSTRAINT "Mantia_Budget_pkey" TO "Financia_Budget_pkey";
ALTER TABLE "Financia_Budget" RENAME CONSTRAINT "Mantia_Budget_categoryId_fkey" TO "Financia_Budget_categoryId_fkey";

-- Rename indexes
ALTER INDEX "Mantia_Category_code_key" RENAME TO "Financia_Category_code_key";
ALTER INDEX "Mantia_Account_code_key" RENAME TO "Financia_Account_code_key";
ALTER INDEX "Mantia_Account_type_idx" RENAME TO "Financia_Account_type_idx";
ALTER INDEX "Mantia_Account_isActive_idx" RENAME TO "Financia_Account_isActive_idx";
ALTER INDEX "Mantia_Transaction_code_key" RENAME TO "Financia_Transaction_code_key";
ALTER INDEX "Mantia_Transaction_type_idx" RENAME TO "Financia_Transaction_type_idx";
ALTER INDEX "Mantia_Transaction_transactionDate_idx" RENAME TO "Financia_Transaction_transactionDate_idx";
ALTER INDEX "Mantia_Transaction_categoryId_idx" RENAME TO "Financia_Transaction_categoryId_idx";
ALTER INDEX "Mantia_Transaction_fromAccountId_idx" RENAME TO "Financia_Transaction_fromAccountId_idx";
ALTER INDEX "Mantia_Transaction_toAccountId_idx" RENAME TO "Financia_Transaction_toAccountId_idx";
ALTER INDEX "Mantia_Budget_categoryId_idx" RENAME TO "Financia_Budget_categoryId_idx";
ALTER INDEX "Mantia_Budget_period_idx" RENAME TO "Financia_Budget_period_idx";
ALTER INDEX "Mantia_Budget_startDate_idx" RENAME TO "Financia_Budget_startDate_idx";
