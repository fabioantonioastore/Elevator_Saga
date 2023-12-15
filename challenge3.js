{
    init: function(elevators, floors) {
        var requests = []
        
        function getPassengers(elevator, floors){
            floors.forEach(function(floor){
                floor.on("up_button_pressed down_button_pressed", function(){
                    elevator.goToFloor(floor.floorNum())
                })
            })
        }
        
        function empty(elevator){
            elevator.getPressedFloors().forEach(function(floor){
                elevator.goToFloor(floor)
            })
        }
        
        elevators.forEach(function(elevator){
            getPassengers(elevator, floors)
            elevator.on("idle", function(){
                empty(elevator)
            })
        })
    },
    update: function(dt, elevators, floors) {
        
    }
}
