declare module '*.css' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.html' {
  const value: string
  export default value
}
