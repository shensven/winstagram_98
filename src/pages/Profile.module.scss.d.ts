declare namespace ProfileModuleScssNamespace {
  export interface IProfileModuleScss {
    grid: string;
    header_avatar: string;
    header_base_info: string;
    header_bio: string;
    header_btn: string;
    header_name: string;
    header_stats: string;
    header_stats_followering: string;
    header_stats_followers: string;
    header_stats_followers_num: string;
    header_stats_followers_title: string;
    header_stats_following_num: string;
    header_stats_following_title: string;
    header_stats_posts: string;
    header_stats_posts_num: string;
    header_stats_posts_title: string;
    header_website: string;
    profile_info: string;
    root: string;
    tab_item: string;
    tab_item_active: string;
    tabs: string;
    username: string;
  }
}

declare const ProfileModuleScssModule: ProfileModuleScssNamespace.IProfileModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProfileModuleScssNamespace.IProfileModuleScss;
};

export = ProfileModuleScssModule;
