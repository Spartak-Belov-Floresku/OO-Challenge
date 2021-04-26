class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep.";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numWheels = 4){
        super(make, model, year);
        this.numWheels = numWheels;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model, year, numWheels = 2){
        super(make, model, year);
        this.numWheels = numWheels;
    }

    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(campacity){
        this.vehicles = [];
        this.campacity = campacity;
    }

    add(vehicle){
        if(vehicle instanceof Vehicle){
            if(this.campacity > this.vehicles.length){
                this.vehicles.push(vehicle);
            }else{
                return "Sorry, we're full."
            }
        }else{
            return "Only vehicles are allowed in here!";
        }
    }
}