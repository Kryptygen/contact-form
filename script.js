const form = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && phone && email) {
    const li = document.createElement("li");
    li.textContent = `Name: ${name}, Phone: ${phone}, Email: ${email}`;
    contactList.appendChild(li);

    form.reset(); // Clear the form
  }
});
