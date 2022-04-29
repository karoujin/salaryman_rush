class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('player', '../Res/player.jpg');
        this.load.image('obstacle', '../Res/passerby.jpg');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x4488aa);
        player = this.physics.add.image(config.width / 2, config.height / 4 * 3, 'player');

        /* Handle inputs */
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-300);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(300);
        }
    }
}