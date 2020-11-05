
type PrefixFunc = (prefix?: string) => ((...args: any[]) => string)

declare var p: PrefixFunc

export = p
