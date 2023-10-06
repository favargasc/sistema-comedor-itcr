CREATE TABLE Rol (
   rol_id           SERIAL PRIMARY KEY,
   description      TEXT
);

CREATE TABLE "User" (
    user_id         SERIAL PRIMARY KEY,
    full_name       TEXT NOT NULL,
    username        TEXT NOT NULL UNIQUE,
    password        BYTEA NOT NULL
);

CREATE TABLE Warning_message (
    msg_id          SERIAL PRIMARY KEY,
    message         TEXT
);

CREATE TABLE Change_log (
    warning_msg_id  INT NOT NULL,
    user_id         INT NOT NULL,

    CONSTRAINT change_log_warning_msg_id_fk
        FOREIGN KEY (warning_msg_id)
        REFERENCES Warning_message (msg_id),

    CONSTRAINT change_log_user_id_fk
        FOREIGN KEY (user_id)
        REFERENCES "User" (user_id)
);

CREATE TABLE Dish (
    dish_id         SERIAL PRIMARY KEY,
    name            TEXT,
    internal_price  NUMERIC,
    foreign_price   NUMERIC,
    is_favorite     BOOLEAN DEFAULT FALSE,
    img_path        TEXT
);

CREATE TABLE Sale_log  (
    sale_id         SERIAL PRIMARY KEY,
    user_id         INT NOT NULL,
    total           INT,

    CONSTRAINT sale_log_user_id_fk
        FOREIGN KEY (user_id)
        REFERENCES "User" (user_id)
);

CREATE TABLE Sold_dish_log (
    sale_id         INT NOT NULL,
    dish_id         INT NOT NULL,
    sold_dishes     INT DEFAULT 0,

    CONSTRAINT sold_dish_log_dish_id_fk
        FOREIGN KEY (sale_id)
            REFERENCES Sale_log (sale_id)
);

CREATE TABLE Day (
    day_id          SERIAL PRIMARY KEY,
    name            TEXT
);


