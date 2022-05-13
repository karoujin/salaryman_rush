class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('player', '../Res/player.png');
        this.load.image('passerby', '../Res/passerby.png');
        this.load.image('building', '../Res/building.png');
        this.load.image('line', '../Res/line.png');
        this.load.image('heightMark', '../Res/heightMark.png');
        this.load.image('continue', '../Res/continue.png');
        this.load.image('exit', '../Res/exit.png');

    }

    create() {
        /* Set background */
        this.cameras.main.setBackgroundColor(0x444c4e);
        /* Create player */
        player = this.physics.add.image(posX[1], posY, 'player');
        player.setScale(0.3);

        /* Create Passerby */
        passerbyGroup = this.add.group({
            defaultKey: 'passerby',
            maxSize: 15,
            createCallback: function (passerby) {
                passerby.setName('passerby' + this.getLength());
                console.log('Created', passerby.name);
            },
            removeCallback: function (passerby) {
                console.log('Removed', passerby.name);
            }
        });

        /* Create height marker */
        heightMark = this.add.image(config.width / 2, posY, 'heightMark');
        heightMark.setScale(1, 0.2);
        heightMark.setDepth(1);

        /* Create buildings and set their Vel */
        buildings = [
            this.physics.add.image(config.width / 9, 0, 'building'),
            this.physics.add.image(config.width / 9, -200, 'building'),
            this.physics.add.image(config.width / 9, -400, 'building'),
            this.physics.add.image(config.width / 9, -600, 'building')
        ];

        buildings.forEach(building => {
            building.setScale(0.2);
            building.setVelocityY(500);
        });

        /* Add score counter */
        counter = this.add.text(config.width / 5 * 4, 50, 'Score: ' + score);
        /* Handler for key inputs */
        cursors = this.input.keyboard.createCursorKeys();
        pause = this.input.keyboard.addKey('ESC');

    }

    update() {

        /* Movement Handler for player */
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

        /* Passerby movement */
        Phaser.Actions.IncY(passerbyGroup.getChildren(), 5);

        /* Loop for building "generation" */
        buildings.forEach(building => {
            if (building.y > 700) {
                building.y = -100;
            }
        });

        /* Handler for Passerby iterations */
        passerbyGroup.children.iterate(function (passerby) {
            if (passerby.y > 600) {
                passerbyGroup.killAndHide(passerby);
            }
            else if (Math.abs(passerby.y - posY) < 2.5){
                if (posX[currX] == passerby.x) {
                    alert("you lost");
                }
                else {
                    score += 1;
                    counter.setText('Score: ' + score);
                }
            }
        });


        /* Generation timer for Passerby */
        if (spawnTimer == 0) {
            addPasserby();
            spawnTimer = Math.floor(spawnInterval);
            spawnInterval -= (spawnInterval - 5) / 50.0;
        }

        spawnTimer -= 1;
        
    }
}

function activate(object) {
    object
        .setActive(true)
        .setVisible(true)
}

function addPasserby() {
    // Random position above screen
    const x = Phaser.Math.Between(0, 2);
    var spawnX = posX[x];
    const y = 0;

    // Find first inactive sprite in passerbyGroup or add new sprite, and set position
    const passerby = passerbyGroup.get(spawnX, y);

    // None free or already at maximum amount of sprites in passerbyGroup
    if (!passerby) return;
    passerby.setScale(0.5);

    activate(passerby);
}