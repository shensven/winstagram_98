declare namespace ListModuleScssNamespace {
  export interface IListModuleScss {
    contrbution: string;
    contrbution_btn: string;
    contrbution_btn_group: string;
    contrbution_caption: string;
    contrbution_caption_comment: string;
    contrbution_caption_likes: string;
    header: string;
    header_img: string;
    header_username: string;
    photo: string;
    post: string;
    root: string;
  }
}

declare const ListModuleScssModule: ListModuleScssNamespace.IListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ListModuleScssNamespace.IListModuleScss;
};

export = ListModuleScssModule;
