import { randomRange } from './libs/lib.js';
import { createParticle, Quark } from './particles.js';

export const instances = {
    Quarks: []
};

export class Game extends Phaser.Scene{

    constructor(){
        super({key: 'game'});
    }

    preload(){
        this.centerX = 524;
        this.centerY = 300;
        this.load.image('particle', 'assets/img/particle.png');
    }

    create(){
        this.summonParticles(100);
        this.setPhysics();
    }

    summonParticles(amount){
        if (amount === undefined) amount = 1;
        for (let i = 0; i < amount; i++) {
            const p = createParticle(
                this.physics.add.sprite(
                    randomRange(this.centerX, this.centerX + 20), randomRange(this.centerY, this.centerY + 20), 'particle'), Quark);
            instances[p.name+'s'].push(p);
        }
    }

    setPhysics(){
        this.physics.world.setBoundsCollision(true, true, true, true);
        instances.Quarks.forEach(el => {
            el.instance.setVelocity(el.properties.speed, randomRange(-this.centerY, this.centerY));
            el.instance.setBounce(0.5);
            el.instance.setCollideWorldBounds(true);
        });
    }

    update(){
        instances.Quarks.forEach(el => el.update());
    }

}