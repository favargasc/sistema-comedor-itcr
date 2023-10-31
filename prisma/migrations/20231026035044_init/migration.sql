/*
  Warnings:

  - You are about to drop the column `description` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ChangeLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Day` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaleLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SoldDishLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WarningMessage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MealTime" AS ENUM ('DESAYUNO', 'ALMUERZO', 'CAFE', 'CENA');

-- DropForeignKey
ALTER TABLE "ChangeLog" DROP CONSTRAINT "ChangeLog_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ChangeLog" DROP CONSTRAINT "ChangeLog_warning_msg_id_fkey";

-- DropForeignKey
ALTER TABLE "SaleLog" DROP CONSTRAINT "SaleLog_user_id_fkey";

-- DropForeignKey
ALTER TABLE "SoldDishLog" DROP CONSTRAINT "SoldDishLog_dish_id_fkey";

-- DropForeignKey
ALTER TABLE "SoldDishLog" DROP CONSTRAINT "SoldDishLog_sale_id_fkey";

-- AlterTable
ALTER TABLE "Dish" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "full_name",
ADD COLUMN     "role_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ChangeLog";

-- DropTable
DROP TABLE "Day";

-- DropTable
DROP TABLE "SaleLog";

-- DropTable
DROP TABLE "SoldDishLog";

-- DropTable
DROP TABLE "WarningMessage";

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mealTime" "MealTime" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "bill_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("bill_id")
);

-- CreateTable
CREATE TABLE "_DishToBill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DishToBill_AB_unique" ON "_DishToBill"("A", "B");

-- CreateIndex
CREATE INDEX "_DishToBill_B_index" ON "_DishToBill"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishToBill" ADD CONSTRAINT "_DishToBill_A_fkey" FOREIGN KEY ("A") REFERENCES "Bill"("bill_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishToBill" ADD CONSTRAINT "_DishToBill_B_fkey" FOREIGN KEY ("B") REFERENCES "Dish"("dish_id") ON DELETE CASCADE ON UPDATE CASCADE;
