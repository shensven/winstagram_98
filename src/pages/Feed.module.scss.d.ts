declare namespace FeedModuleScssNamespace {
  export interface IFeedModuleScss {
    main: string;
    root: string;
  }
}

declare const FeedModuleScssModule: FeedModuleScssNamespace.IFeedModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FeedModuleScssNamespace.IFeedModuleScss;
};

export = FeedModuleScssModule;
