declare namespace MsgModuleScssNamespace {
  export interface IMsgModuleScss {
    root: string;
    window: string;
  }
}

declare const MsgModuleScssModule: MsgModuleScssNamespace.IMsgModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MsgModuleScssNamespace.IMsgModuleScss;
};

export = MsgModuleScssModule;
