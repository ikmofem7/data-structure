function solution() {
  // write your code in JavaScript (Node.js 8.9.4)
  //
  // you can access DOM Tree using DOM Object Model:
  //    document.getElementById
  // or using jQuery:
  //    $('some_tag')
  //
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  const person = document.getElementById("type_person").checked;
  const company = document.getElementById("type_company").checked;
  const fname = document.getElementById("first_name").value;
  const lname = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const companyName = document.getElementById("company_name").value;
  const phone = document.getElementById("phone").value;
  const checkRegexValidation = (regex, value) => {
    return value.match(regex);
  };

  if (person) {
    const fnameValidation = fname && checkRegexValidation("[a-zA-Z ]+", fname);
    const lnameValidation = lname && checkRegexValidation("[a-zA-Z ]+", lname);
    const emailValidation =
      email && checkRegexValidation("^[a-zAZ.]{1,64}@[a-zA-Z.]{1,64}$", email);
    if (!fnameValidation || !lnameValidation || !emailValidation) return false;
  } else if (company) {
    const companyNameValidation =
      companyName && checkRegexValidation("(.)+", companyName);
    const phoneValidation =
      phone && checkRegexValidation("^[d]{3}-[d]{3}-[d]{4}$", phone);
    if (!companyNameValidation || !phoneValidation) return false;
  } else {
    return false;
  }
  return true;
}
