declare namespace SaveModuleScssNamespace {
  export interface ISaveModuleScss {
    save: string;
  }
}

declare const SaveModuleScssModule: SaveModuleScssNamespace.ISaveModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SaveModuleScssNamespace.ISaveModuleScss;
};

export = SaveModuleScssModule;
