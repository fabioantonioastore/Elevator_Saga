{
    init: function(elevators, floors) {
        let getPassengers = (elevator, floors) => {
            floors.forEach((floor) => {
                floor.on("up_button_pressed down_button_pressed", () => {
                      elevator.goToFloor(floor.floorNum())  
                })
            })
        }
        
        let empty = (elevator) => {
            elevator.getPressedFloors().forEach((floor) => {
                elevator.goToFloor(floor)
            })
        }
        
        elevators.forEach((elevator) => {
            getPassengers(elevator, floors)
            elevator.on("idle", () => {
                empty(elevator)
            })
        })
    },
        update: function(dt, elevators, floors) {

        }
}
