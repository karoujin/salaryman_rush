class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }
    preload() {
    }
    
    create() {
    
        //  You can set the background color of your game in the following ways:
        this.cameras.main.setBackgroundColor(0x4488aa);
        // game.stage.backgroundColor = 0x4488aa;
        // game.stage.backgroundColor = 'rgb(68, 136, 170)';
        // game.stage.backgroundColor = 'rgba(68, 136, 170, 0.5)';
    }
    
    update(){
    
    }
}