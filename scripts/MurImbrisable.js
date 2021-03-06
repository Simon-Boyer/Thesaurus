const texCollImbrisables = new TexelColl(texelsMur, 2, 1.0);
/**
 * @classdesc Objet qui représente une case mur imbrisable
 */
class MurImbrisable {
  /**
   * Créer un bloc de mur imbrisable à la position (x, y) indiquée. Noter que la position y dénote la position y en 2D
   * du mur dans la grille de jeu et non son élévation en 3D.
   * @param x position x dans la grille de jeu
   * @param y position y  dans la grille de jeu
   */
  constructor (x, y) {
    this.transform = creerTransformations();
    setPositionsXYZ([x, 0, y], this.transform);
  }
}