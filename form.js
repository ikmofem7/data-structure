function formSubmission() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  //   if()
  //   console.log(password);
  if (password !== confirmPassword) {
    alert("Not the same");
  }
  return;
}
