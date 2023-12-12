{
    init: function(elevators, floors) {
        elevator = elevators[0]
        
        elevator.on("idle", function(){
          floors.forEach(function(floor, index){
              elevator.goToFloor(floor.floorNum());
          })
        })
    },
    update: function(dt, elevators, floors) {
        
    }
}
