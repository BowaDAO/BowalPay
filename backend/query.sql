CREATE TABLE users (
    "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
   "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email_address" VARCHAR NOT NULL UNIQUE,
    "password" VARCHAR NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "account_type" VARCHAR NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

