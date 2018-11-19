const users = [
    { id: 1, name: "Ichiro", language: "python" },
    { id: 2, name: "Jiro", language: "ruby" },
    { id: 3, name: "Saburo", language: "java" },
    { id: 4, name: "Shiro", language: "python" }
];

// true
console.log(users.some(user => user.language === "python"));
// false
console.log(users.some(user => user.language === "php"));

// true
console.log(users.findIndex(user => user.language === "python") != -1);
// false
console.log(users.findIndex(user => user.language === "php") != -1);

// true
console.log(users.findIndex(({ language }) => language === "python") != -1);