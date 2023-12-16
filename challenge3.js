{
    init: function(elevators, floors) {
        const weight = 0.6
        
        function getPassengers(elevator, floors, min, max){
            floors.forEach(function(floor){
                floor.on("up_button_pressed down_button_pressed", function(){
                    if(floor.floorNum() >= min && floor.floorNum() <= max && elevator.loadFactor() <= weight){
                        elevator.goToFloor(floor.floorNum())
                    }
                })
            })
        }
        
        function empty(elevator){
            elevator.getPressedFloors().forEach(function(floor){
                elevator.goToFloor(floor)
            })
        }
        
        elevators.forEach(function(elevator, index){  
            if(index == 0){
                getPassengers(elevator, floors, 0, 3)
            }
            else{
                getPassengers(elevator, floors, 4, 7)
            }
            elevator.on("idle", function(){
                empty(elevator)
            })
        })
    },
    update: function(dt, elevators, floors) {
        
    }
}
    },
    update: function(dt, elevators, floors) {
        
    }
}
