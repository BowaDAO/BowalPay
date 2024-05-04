const userExistsQuery =
  "SELECT emailAddress from users WHERE emailAddress = $1";

const createNewUserQuery =
  "INSERT INTO users(firstName, lastName, emailAddress, password, dateOfBirth, accountType) VALUES($1, $2, $3, $4, $5, $6) RETURNING firstName, lastName, emailAddress, password, dateOfBirth, accountType";

export { userExistsQuery, createNewUserQuery };
