{
    init: function(elevators, floors) {
        var maxPassengers = []
        
        elevators.forEach(function(elevator){
            maxPassengers.push(elevator.maxPassengerCount())
            floors.forEach(function(floor){
                floor.on("up_button_pressed down_button_pressed", function(){
                    elevator.goToFloor(floor.floorNum())
                })
            })
            elevator.on("floor_button_pressed", function(floorNum){
                elevator.goToFloor(floorNum)
            })
        })
        
    },
        update: function(dt, elevators, floors) {

        }
}
