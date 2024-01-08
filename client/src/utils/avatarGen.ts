

export const diceBearURL = (styleName: string) => `https://api.dicebear.com/7.x/personas
/svg?seed=${styleName.split(' ').join('')}`