import { Scene } from 'phaser';

export class GameScene extends Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const card = this.add.sprite(250, 400, 'card');
    console.log(card);
    card.scale = 0.5;
  }
}
