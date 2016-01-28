function Warriors (name, gender) {
    this.names = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = 'wooden sword';
    this.power = Math.random()*100;
    this.salutation = function(){ if (gender === 'M'){ return 'his'} else { return 'her' }};
}

Warriors.prototype = {
    fight: function(){return this.names + " rushes to the arena with " + this.salutation() + ' ' +this.weapon + '! '},
    faceoff: function(opponant){ if (opponant.power > this.power) { return 'Not strong enough' } else { return "You won the battle!"}}
};

var warrior1 = new Warriors('dan', 'M');
var warrior2 = new Warriors('zelda', 'F');

console.log(warrior1.fight() + warrior1.faceoff(warrior2));

