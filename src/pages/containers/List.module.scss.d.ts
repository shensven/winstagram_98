declare namespace ListModuleScssNamespace {
  export interface IListModuleScss {
    img: string;
    list: string;
  }
}

declare const ListModuleScssModule: ListModuleScssNamespace.IListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ListModuleScssNamespace.IListModuleScss;
};

export = ListModuleScssModule;
