CREATE TABLE users (
    "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
   "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "emailAddress" VARCHAR NOT NULL UNIQUE,
    "password" VARCHAR NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "accountType" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

