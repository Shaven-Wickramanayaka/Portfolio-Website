// % emailjs stuff :)
// ? https://dashboard.emailjs.com/admin/account

const public = "ZwsR1qFB3TMYkhSVV";
const gmail = "Personal_Website";
const template = "template_w7o3tje";

(function () {
  emailjs.init(public);
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm(gmail, template, this).then(
      function () {
        alert("Your Email was successfully sent :)");
      },
      function (error) {
        alert("Your Email was was not successfully sent :(", error);
      }
    );
  });
};

