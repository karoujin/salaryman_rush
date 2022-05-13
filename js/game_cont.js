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
    scene: [GameScene]
};

var cursors;
var player;
var buildings;
var heightMark;
var passerbyGroup;
var score = 0;
var counter;
var spawnInterval = 60;
var spawnTimer = 0;
var posX = [config.width / 4, config.width / 2, config.width / 4 * 3];
var posY = config.height / 4 * 3;
var currX = 1;
var lastFrameKey = 0;

var game = new Phaser.Game(config);