declare namespace ButtonModuleScssNamespace {
  export interface IButtonModuleScss {
    init_btn: string;
    root: string;
  }
}

declare const ButtonModuleScssModule: ButtonModuleScssNamespace.IButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonModuleScssNamespace.IButtonModuleScss;
};

export = ButtonModuleScssModule;
