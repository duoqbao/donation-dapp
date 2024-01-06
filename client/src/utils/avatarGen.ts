

export const diceBearURL = (styleName: string) => `https://api.dicebear.com/7.x/open-peeps
/svg?seed=${styleName.split(' ').join('')}`