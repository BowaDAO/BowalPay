const userExistsQuery = "SELECT * from users WHERE email_address = $1";

const createNewUserQuery =
  "INSERT INTO users(first_name, last_name, email_address, password, date_of_birth, account_type) VALUES($1, $2, $3, $4, $5, $6) RETURNING id first_name, last_name, email_address, password, date_of_birth, account_type";

export { userExistsQuery, createNewUserQuery };
