document.querySelectorAll('.session-button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`${btn.textContent} clicked!`);
    });
});
function openForm(serviceName) {
  document.getElementById("formTitle").textContent = `Request: ${serviceName}`;
  document.getElementById("serviceForm").style.display = "block";
}

function closeForm() {
  document.getElementById("serviceForm").style.display = "none";
}

function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const details = document.getElementById("details").value;
  const service = document.getElementById("formTitle").textContent.replace("Request: ", "");

  if (name && phone && details) {
    alert(`Thank you, ${name}! Your request for ${service} has been submitted.`);
    closeForm();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("details").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

