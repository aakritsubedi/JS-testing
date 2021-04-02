const fetchUser = require("../functions/http");

// Working with async data
test("User fetch from API", async () => {
  expect.assertions(2);
  const user = await fetchUser();

  expect(user).not.toBeNull();
  expect(user).not.toBeUndefined();
});
