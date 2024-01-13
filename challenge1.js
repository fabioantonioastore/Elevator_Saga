{
    init: function(elevators, floors) {
        elevators[0].on("floor_button_pressed", function(floorNum){
            elevators[0].goToFloor(floorNum)
        })
        
        floors.forEach(function(floor, index){
            floor.on("up_button_pressed down_button_pressed", function(){
                elevators[0].goToFloor(floor.floorNum())
            })
        })
    },
    update: function(dt, elevators, floors) {
        
    }
}
