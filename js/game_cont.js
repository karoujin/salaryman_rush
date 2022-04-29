var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: 'game_area',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ GameScene ]
};

var cursors;
var player;

var game = new Phaser.Game(config);