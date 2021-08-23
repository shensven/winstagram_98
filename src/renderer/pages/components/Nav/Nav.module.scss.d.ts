declare namespace NavModuleScssNamespace {
  export interface INavModuleScss {
    icon_feed: string;
    icon_msg: string;
    icon_profile: string;
    icon_search: string;
    nav: string;
    nav_item: string;
  }
}

declare const NavModuleScssModule: NavModuleScssNamespace.INavModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavModuleScssNamespace.INavModuleScss;
};

export = NavModuleScssModule;
