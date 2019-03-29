export class Recipe {
  /**
   * Name of the recipe
   */
  public name: string;

  /**
   * Recipe description
   */
  public description: string;

  /**
   * Image path for the recipe
   */
  public imagePath: string;

  /**
   * Constructor.
   * @param name Name of the recipe
   * @param description Recipe description
   * @param imagePath Image path for the recipe
   */
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
