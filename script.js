function openModal(title, price, desc) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("toggleDark").onclick = function () {
  document.body.classList.toggle("dark");
};

// Swiper init
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

// Lodge booking validation
function validateBooking() {
  const name = document.getElementById("guestName").value.trim();
  const rooms = parseInt(document.getElementById("rooms").value);

  if (!name || rooms < 1) {
    alert("Please fill out all fields correctly.");
    return false;
  }

  alert("Thank you! Your stay is booked.");
  return true;
}
