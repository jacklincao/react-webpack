declare var process: any

declare var require: {
  (path: string): any
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}

declare var module: {
  hot: any
}

declare var gta: any
declare var mixpanel: any
declare var MIXPANEL_ID: string

declare var APP_ENV: any

/** glable interface */
declare interface IRouterProps {
  match: any
  location: any
  history: any
}