// supports latest rgba hex
const hexColorRe = '^#([a-f0-9]{6}|[a-f0-9]{8}|[a-f0-9]{3,4})$'
export const hexColor = new RegExp(hexColorRe, 'i')
export const hexColor3 = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i
