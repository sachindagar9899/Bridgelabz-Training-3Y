// Q8: Movie Ticket Booking System and Prototype Chain
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket price: Rs.${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket = new OnlineTicket("Inception", "A12", 250, 30);
onlineTicket.printTicket(); // Inherited from MovieTicket.prototype
console.log("Convenience fee: Rs.", onlineTicket.convenienceFee);
console.log("Total amount: Rs.", onlineTicket.getTotalAmount());
console.log("Prototype chain works:", onlineTicket instanceof MovieTicket);
