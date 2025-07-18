// handling user input and displaying messages
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  const currentTime = new Date().toString();

  const output = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById('messageOutput').innerHTML = output;

  // Update welcome message
  const welcome = document.getElementById('welcomeText');
  if (welcome && name) {
    welcome.innerText = `Hi ${name}, Welcome To Website`;
  }
});


// handling the hamburger menu toggle
    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }



