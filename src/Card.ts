import { GameObjects, Scene } from 'phaser';

type CardID = '1' | '2' | '3' | '4' | '5';
export type CardPosition = { x: number; y: number };
type CardProps = CardPosition & { id: CardID };

export class Card extends GameObjects.Sprite {
  readonly id: CardID;

  private _isOpen: boolean = false;

  constructor(scene: Scene, props: CardProps) {
    const { x, y, id } = props;
    super(scene, x, y, 'card');
    this.id = id;
    this.scene.add.existing(this);
    this.setInteractive();
  }

  get isOpen() {
    return this._isOpen;
  }

  open() {
    this._isOpen = true;
    this.setTexture('card' + this.id);
  }

  close() {
    this._isOpen = false;
    this.setTexture('card');
  }
}
