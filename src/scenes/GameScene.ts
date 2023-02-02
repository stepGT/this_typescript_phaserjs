import { Scene } from 'phaser';
import { Card } from '../Card';

export class GameScene extends Scene {
  constructor() {
    super('GameScene');
  }

  onCardClick(_: unknown, card: Card) {
    card.open();
  }

  create() {
    const card = new Card(this, { x: 250, y: 500, id: '1' });
    this.input.on('gameobjectdown', this.onCardClick);
  }
}
