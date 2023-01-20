function reverse(string) {
  if (string.length === 1) return string;
  return string[string.length - 1].concat(reverse(string.slice(0, -1)));
}

console.log(reverse("awesome"));
