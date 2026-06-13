const maskEmail = (email) => {
  const atIndex = email.indexOf("@");

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length-1];

  const stars = "*".repeat(username.length-2);

  return firstChar+stars+lastChar+domain;
};

let email = "apple.pie@example.com";
email = "freecodecamp@example.com";
email = "info@test.dev";
email = "user@domain.org";
console.log(maskEmail(email));
