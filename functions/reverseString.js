const reverseString = (string) => {
  string = JSON.stringify(string);
  string = string.replace(/"/g, "");

  const reversedString = string.split("").reverse().join("");

  return reversedString;
};

module.exports = reverseString;
