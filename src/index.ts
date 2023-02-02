import { Game, Types, AUTO } from 'phaser';
import { PreloadScene } from './scenes/PreloadScene';
import { GameScene } from './scenes/GameScene';
import gameConfig from './gameConfig';

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: gameConfig.screenheightH,
  height: gameConfig.screenheightH,
  backgroundColor: gameConfig.backgroundColor,
  scene: [PreloadScene, GameScene],
};

new Game(config);
