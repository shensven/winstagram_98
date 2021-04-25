declare namespace ProfileModuleScssNamespace {
  export interface IProfileModuleScss {
    bg: string;
    firstMarginTop: string;
    main: string;
    main_avatar: string;
    main_base_info_bio: string;
    main_base_info_data: string;
    main_base_info_nickname: string;
    main_base_info_website: string;
    main_divider: string;
    main_username: string;
    mian_avatar_pic: string;
    mian_base_info: string;
    mian_base_info_folowers: string;
    mian_base_info_folowers_num: string;
    mian_base_info_folowers_title: string;
    mian_base_info_folowing: string;
    mian_base_info_folowing_num: string;
    mian_base_info_folowing_title: string;
    mian_base_info_post: string;
    mian_base_info_post_num: string;
    mian_base_info_post_title: string;
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
