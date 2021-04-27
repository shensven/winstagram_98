declare namespace ProfileModuleScssNamespace {
  export interface IProfileModuleScss {
    bg: string;
    edit_profile_btn: string;
    edit_profile_wing: string;
    first_margin_top: string;
    header: string;
    header_avatar: string;
    header_avatar_img: string;
    header_base_info: string;
    header_bio: string;
    header_divider: string;
    header_name: string;
    header_stats: string;
    header_stats_folowers: string;
    header_stats_folowers_num: string;
    header_stats_folowers_title: string;
    header_stats_folowing: string;
    header_stats_folowing_num: string;
    header_stats_folowing_title: string;
    header_stats_post: string;
    header_stats_post_num: string;
    header_stats_post_title: string;
    header_username: string;
    header_website: string;
    header_wing: string;
    init_btn: string;
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
