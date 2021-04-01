const userInfo = require("../functions/userInfo");

test("Return user object", () => {
  let firstName = "Aakrit";
  let lastName = "Subedi";
  let email = "aakritsubedi9@gmail.com";
  let contactNo = "+977-980XXXXXX";

  expect(userInfo(firstName, lastName, email, contactNo)).toStrictEqual({
    email: "aakritsubedi9@gmail.com",
    contactNo: "+977-980XXXXXX",
    name: "Aakrit Subedi"
  });
});


// toBe is for primitive data type 
