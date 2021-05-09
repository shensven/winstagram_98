declare namespace GridModuleScssNamespace {
  export interface IGridModuleScss {
    grid: string;
    img: string;
  }
}

declare const GridModuleScssModule: GridModuleScssNamespace.IGridModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GridModuleScssNamespace.IGridModuleScss;
};

export = GridModuleScssModule;
