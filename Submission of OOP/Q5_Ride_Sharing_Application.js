// Q5: Ride-Sharing Application
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance, driver) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
        this.driver = driver;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance is required.");
        }
        if (!Number.isFinite(this.distance) || this.distance < 0) {
            throw new Error("Trip distance must be a non-negative number.");
        }
        const baseFare = 40;
        const ratePerKm = 12;
        return baseFare + this.distance * ratePerKm;
    }
}

const driver = new Driver("Rohit", 4.8, "Sedan", "UP16AB1234");

try {
    const trip = new Trip("Mathura", "Vrindavan", 12, driver);
    console.log(`Driver: ${trip.driver.name} (${trip.driver.vehicle})`);
    console.log(`Route: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log("Fare: Rs.", trip.calculateFare());
} catch (error) {
    console.error("Trip error:", error.message);
}

try {
    const invalidTrip = new Trip("A", "B", -5, driver);
    console.log(invalidTrip.calculateFare());
} catch (error) {
    console.error("Unable to calculate fare:", error.message);
}
