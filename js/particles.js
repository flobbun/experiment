import {randomRange} from './libs/lib.js';

export function createParticle(instance, particle){
    console.log(particle.name, 'Created!');
    return new particle(instance);
}

export class Quark{

    name = 'Quark';
    properties = {
        shape: 'Circle',
        time: 0,
        speed: 0.1,
        aceleration: 0,
        direction: 0,
        temperature: 0,
    
        avoidance: 1,
        interaction: 1,
        weight: 0,
        mass: 0.40,
    }

    constructor(instance){
        this.instance = instance;
        this.setProperties();
    }

    update(){
        this.gravity();
        this.behaviour();
    }

    behaviour(){
        const xRandom = randomRange(0, 1);
        if(xRandom === 1) this.instance.x += this.properties.speed + Math.random() * (0.7 - 0.05) - 0.05;
        if(xRandom === 0) this.instance.x -= this.properties.speed + Math.random() * (0.7 - 0.05) - 0.05;
    }

    gravity(){
        this.instance.y += this.properties.speed;
    }

    setProperties(){
        this.properties.weight = this.properties.mass * 9.8;
        this.instance.setScale(0.02);
        this.instance.setOrigin(-10, -5);
    }

}
