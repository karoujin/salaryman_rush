class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('player', '../Res/player.png');
        this.load.image('passerby', '../Res/passerby.png');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x4488aa);
        player = this.physics.add.image(posX[1], posY, 'player');
        player.setScale(0.3);

        group = this.add.group({
            defaultKey: 'passerby',
            maxSize: 10,
            createCallback: function (passerby) {
                passerby.setName('passerby' + this.getLength());
                console.log('Created', passerby.name);
            },
            removeCallback: function (passerby) {
                console.log('Removed', passerby.name);
            }
        });

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

        Phaser.Actions.IncY(group.getChildren(), 2.5);

        group.children.iterate(function (passerby) {
            if (passerby.y > 600) {
                group.killAndHide(passerby);
            }
        });

        if (spawnTimer == 0) {
            addPasserby();
            spawnTimer = spawnInterval;
            spawnInterval -= 1;
        }
        spawnTimer -= 1;


    }
}

function passBy(passerby) {
    passerby
        .setActive(true)
        .setVisible(true)
}

function addPasserby() {
    // Random position above screen
    const x = Phaser.Math.Between(0, 2);
    var spawnX = posX[x];
    const y = 0;

    // Find first inactive sprite in group or add new sprite, and set position
    const passerby = group.get(spawnX, y);

    // None free or already at maximum amount of sprites in group
    if (!passerby) return;
    passerby.setScale(0.5);

    passBy(passerby);
}