const userInfo = (firstName, lastName, email, contactNo) => {
  const user = {
    name: firstName + ' ' + lastName,
    email: email,
    contactNo: contactNo
  };

  return user;
};

module.exports = userInfo;
