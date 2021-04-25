declare namespace ProfileModuleScssNamespace {
  export interface IProfileModuleScss {
    bg: string;
    firstMarginTop: string;
    main: string;
    titlebar: string;
    titlebar_btn: string;
    titlebar_svg: string;
    titlebar_title: string;
    titlebar_title_logo: string;
    titlebar_title_typo: string;
  }
}

declare const ProfileModuleScssModule: ProfileModuleScssNamespace.IProfileModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProfileModuleScssNamespace.IProfileModuleScss;
};

export = ProfileModuleScssModule;
