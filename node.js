const fs = require("fs");
const readline = require("readline");

const writeGreeting = (name) => {
  fs.writeFile(
    "greeting.txt",
    `https://api.nationalize.io?name=${name}`,
    (err) => {
      if (err) {
        console.log("error try again");
      }
    }
  );
};

const takinginput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

takinginput.question(
  "What is your name [Run again after writting you name below and click on the link to check your nationality]? ",
  (name) => {
    takinginput.close();
    writeGreeting(name);
  }
);

const nationality = (nationality) => {
  fs.writeFile(
    "greeting.txt",
    `https://api.nationalize.io?name=${nationality}`,
    (err) => {
      if (err) {
        console.log("error try again");
      }
    }
  );
};

fs.readFile("greeting.txt", "utf8", (err, data) => {
  console.log(data);
});

// Enter your name and run again
