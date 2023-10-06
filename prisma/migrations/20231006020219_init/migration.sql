-- CreateTable
CREATE TABLE "Role" (
    "role_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" BYTEA NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "WarningMessage" (
    "msg_id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "WarningMessage_pkey" PRIMARY KEY ("msg_id")
);

-- CreateTable
CREATE TABLE "ChangeLog" (
    "change_log_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "warning_msg_id" INTEGER NOT NULL,

    CONSTRAINT "ChangeLog_pkey" PRIMARY KEY ("change_log_id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "dish_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "internal_price" DOUBLE PRECISION NOT NULL,
    "foreign_price" DOUBLE PRECISION NOT NULL,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,
    "img_path" TEXT NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("dish_id")
);

-- CreateTable
CREATE TABLE "SaleLog" (
    "sale_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "SaleLog_pkey" PRIMARY KEY ("sale_id")
);

-- CreateTable
CREATE TABLE "SoldDishLog" (
    "sold_dish_log_id" SERIAL NOT NULL,
    "sale_id" INTEGER NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "sold_dishes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SoldDishLog_pkey" PRIMARY KEY ("sold_dish_log_id")
);

-- CreateTable
CREATE TABLE "Day" (
    "day_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("day_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "ChangeLog" ADD CONSTRAINT "ChangeLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChangeLog" ADD CONSTRAINT "ChangeLog_warning_msg_id_fkey" FOREIGN KEY ("warning_msg_id") REFERENCES "WarningMessage"("msg_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleLog" ADD CONSTRAINT "SaleLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldDishLog" ADD CONSTRAINT "SoldDishLog_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "SaleLog"("sale_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldDishLog" ADD CONSTRAINT "SoldDishLog_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("dish_id") ON DELETE RESTRICT ON UPDATE CASCADE;
