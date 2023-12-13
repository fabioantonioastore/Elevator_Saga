{
    init: function(elevators, floors) {
        var getPassengers = function(elevator, maxPassengers, min, max, floors){ 
            floors.forEach(function(floor, index){
                for(let i = 0; i < maxPassengers; i++){
                    floor.on("up_button_pressed down_button_pressed", function(){
                        if(min <= floor.floorNum() && max >= floor.floorNum()){
                            elevator.goToFloor(floor.floorNum())
                        }
                    })
                }
            })
        }
        
        var empty = function(elevator){
            let destinations = elevator.getPressedFloors()
            destinations.forEach(function(destination, index){
                elevator.goToFloor(destination)
            })
        }
        
        elevators.forEach(function(elevator, index){
            elevator.on("idle", function(){
                getPassengers(elevator, elevator.maxPassengerCount(), 0, floors.length - 1, floors)
                empty(elevator)
            })
        })
    },
    update: function(dt, elevators, floors) {

    }
}
