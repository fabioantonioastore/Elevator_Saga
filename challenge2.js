{
    init: function(elevators, floors) {
        var elevator = elevators[0];
        
        var running = function(elevator, floors){
            elevator.on("idle", function(){
              floors.forEach(function(floor, index){
                elevator.goToFloor(floor.floorNum());
              })
            })
        }
        running(elevator, floors);
    },
    update: function(dt, elevators, floors) {

    }
}
