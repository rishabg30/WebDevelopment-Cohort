function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let age = 21;
console.log(canVote(age));
