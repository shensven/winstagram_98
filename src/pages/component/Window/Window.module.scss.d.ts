declare namespace WindowModuleScssNamespace {
  export interface IWindowModuleScss {
    bg: string;
    children: string;
    first_margin_top: string;
    titlebar: string;
    titlebar_btn: string;
    titlebar_display: string;
    titlebar_svg: string;
    titlebar_title: string;
    titlebar_title_icon: string;
    titlebar_title_typo: string;
  }
}

declare const WindowModuleScssModule: WindowModuleScssNamespace.IWindowModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: WindowModuleScssNamespace.IWindowModuleScss;
};

export = WindowModuleScssModule;
