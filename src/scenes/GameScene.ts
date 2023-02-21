import { Scene } from 'phaser';
import { Card } from '../Card';
import { CardDealer } from '../CardDealer';

export class GameScene extends Scene {
  private _cardDealer: CardDealer;

  constructor() {
    super('GameScene');
  }

  onAllCardsOpen = () => {
    this.scene.restart();
  };

  onCardClick = (_: unknown, card: Card) => {
    this._cardDealer.openCard(card);
  };

  create() {
    this._cardDealer = new CardDealer(this);
    this._cardDealer.createCards();
    this.initEvents();
  }

  initEvents() {
    this._cardDealer.onAllCardsOpen = this.onAllCardsOpen;
    this.input.on('gameobjectdown', this.onCardClick);
  }
}
