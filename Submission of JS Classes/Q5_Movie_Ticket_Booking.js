// Q5: Movie Ticket Booking (validation + booking object)
// Run in a browser. The script creates a form and displays a ticket after validation.
const bookingForm = document.createElement("form");
bookingForm.innerHTML = `
  <h2>Movie Ticket Booking</h2>
  <label>Name <input name="name" required></label><br>
  <label>Email <input name="email" required></label><br>
  <label>Seats (1-10) <input name="seats" type="number" min="1" max="10" required></label><br>
  <button type="submit">Book Ticket</button>
  <pre id="ticket-output"></pre>
`;
document.body.appendChild(bookingForm);

bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(bookingForm).entries());
    const nameValid = /^[A-Za-z ]+$/.test(values.name.trim());
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
    const seats = Number(values.seats);
    const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    const output = bookingForm.querySelector("#ticket-output");
    if (!nameValid || !emailValid || !seatsValid) {
        output.textContent = "Invalid input: check name, email, and seat count (1-10).";
        return;
    }

    const booking = { name: values.name.trim(), email: values.email, seats };
    output.textContent = `Booking Confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
