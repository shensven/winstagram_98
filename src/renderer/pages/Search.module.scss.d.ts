declare namespace SearchModuleScssNamespace {
  export interface ISearchModuleScss {
    root: string;
    window: string;
  }
}

declare const SearchModuleScssModule: SearchModuleScssNamespace.ISearchModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchModuleScssNamespace.ISearchModuleScss;
};

export = SearchModuleScssModule;
