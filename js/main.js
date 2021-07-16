import { Game } from './game.js';

const config = {
    type: Phaser.CANVAS,
    width: 1048,
    height: 600,
    canvas: document.getElementById("canvas"),
    transparent: true,
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 400},
            debug: false
        }
    }
}

new Phaser.Game(config);

