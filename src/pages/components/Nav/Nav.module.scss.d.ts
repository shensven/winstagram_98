declare namespace NavModuleScssNamespace {
  export interface INavModuleScss {
    nav: string;
    nav_item: string;
  }
}

declare const NavModuleScssModule: NavModuleScssNamespace.INavModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavModuleScssNamespace.INavModuleScss;
};

export = NavModuleScssModule;
