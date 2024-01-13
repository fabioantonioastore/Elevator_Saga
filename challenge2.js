{
    init: function(elevators, floors) {
        var maxPassengers = []
        
        elevators.forEach(function(elevator){
            floors.forEach(function(floor){
                floor.on("up_button_pressed down_button_pressed", function(){
                    elevator.goToFloor(floor.floorNum())
                })
            })
            elevator.on("idle", function(){
                let pressed_floors = elevator.getPressedFloors()
                pressed_floors.forEach(function(floor){
                    elevator.goToFloor(floor)
                })
            })
        })
        
    },
        update: function(dt, elevators, floors) {

        }
}
