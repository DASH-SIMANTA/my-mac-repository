class Vehicle{
    constructor(name, price){
        this.name =name;
        this.price = price;

    }
    move(){
        console.log('need for speed');
    }
}


class Bus extends Vehicle{
    constructor(name, price,seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}


class truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

