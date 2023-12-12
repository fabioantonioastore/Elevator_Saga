{
    init: function(elevators, floors) {
       elevators[0].on("idle", () => {
          elevators[0].goToFloor(0);
          elevators[0].goToFloor(1);
          elevators[0].goToFloor(2);
       });
    },
    update: function(dt, elevators, floors) {
        
    }
}
