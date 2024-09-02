let users = [
  { username: "RG", age: 23 },
  { username: "KG", age: 24 },
  { username: "VP", age: 16 },
];

function canVote(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      console.log(users[i].username + " can vote");
    }
  }
}
canVote(users);
