export const _class = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

export const sortByDate = (a: string, b: string) => new Date(b).getTime() - new Date(a).getTime();