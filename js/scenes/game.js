class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('player', '../Res/player.png');
        this.load.image('obstacle', '../Res/passerby.png');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x4488aa);
        player = this.physics.add.image(posX[1], posY, 'player');
        player.setScale(0.3);

        /* Handle inputs */
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (cursors.left.isDown) {
            if (currX > 0 && lastFrameKey >= 0) {
                currX -= 1;
            }
            lastFrameKey = -1;
        }
        else if (cursors.right.isDown) {
            if (currX < 2 && lastFrameKey <= 0) {
                currX += 1
            }
            lastFrameKey = 1;
        }
        else {
            lastFrameKey = 0;
        }
        player.setPosition(posX[currX], posY);
    }
}