declare namespace LocationModuleScssNamespace {
  export interface ILocationModuleScss {
    location: string;
  }
}

declare const LocationModuleScssModule: LocationModuleScssNamespace.ILocationModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LocationModuleScssNamespace.ILocationModuleScss;
};

export = LocationModuleScssModule;
