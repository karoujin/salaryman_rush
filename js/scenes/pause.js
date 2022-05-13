class PauseScene extends Phaser.Scene {
    constructor() {

    }
    preload() {
        this.load.image('continue', '../Res/continue.png');
        this.load.image('exit', '../Res/exit.png');
    }
    create() {
        cont = this.add.image(config.width / 2, config.height / 3, 'continue');
        exit = this.add.image(config.width / 2, config.height / 3 * 2, 'exit');
    }
    update() {

    }
}