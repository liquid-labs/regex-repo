// NPM: Matches an NPM package name. Provides matching groups 1 (org name, if any) and 2 (package basename).
export const npmPackageNameRE = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?([a-z0-9-~][a-z0-9-._~]*)$/
