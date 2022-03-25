function classVehicle(){
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type,
            this.model,
            this.parts = {
                engine,
                power,
                quality = engine * power
            },
            this.fuel,
        }
        drive() {
            (x) => this.fuel - x;
        } 

            
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
    
}
classVehicle()