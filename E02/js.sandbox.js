let array = ["a", "b", "c", "d"];

for (const letter of array) {
  if (letter === "b") {
    continue;
  }
  console.log(letter);
}
