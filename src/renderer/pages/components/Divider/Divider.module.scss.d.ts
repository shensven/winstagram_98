declare namespace DividerModuleScssNamespace {
  export interface IDividerModuleScss {
    divider: string;
  }
}

declare const DividerModuleScssModule: DividerModuleScssNamespace.IDividerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DividerModuleScssNamespace.IDividerModuleScss;
};

export = DividerModuleScssModule;
