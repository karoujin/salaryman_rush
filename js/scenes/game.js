class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }
    preload() {
        this.load.image('player', '../Res/enemy_D.png');
        this.load.image('obstacle', '../Res/satellite_d.png');
    }
    
    create() {
        this.cameras.main.setBackgroundColor(0x4488aa);
    }
    
    update(){
    
    }
}