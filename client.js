class YummyPie {
    constructor(flavor, topping, temperatureToBake) {
        this.flavor = flavor;
        this.topping = topping;
        this.temperatureToBake = temperatureToBake;
    }

    bake(temperature) {
        if(temperature == this.temperatureToBake ){
            console.log('The pie is perfectly baked. The ' + this.flavor + ' flavor tastes great.')
        }
        else if (temperature < this.temperatureToBake){
            console.log('The pie is underbaked. The ' + this.topping + ' looks good though.' )
        }
        else {
            console.log('the pie is burnt...')
        }
    }
}

let pumpkinPie = new YummyPie('pumpkin', 'whipped cream', 350)

pumpkinPie.bake(350); //Will log a perfectly baked pie
pumpkinPie.bake(400); // Will log a burnt pie
pumpkinPie.bake(300); // Will log an undercooked pie
