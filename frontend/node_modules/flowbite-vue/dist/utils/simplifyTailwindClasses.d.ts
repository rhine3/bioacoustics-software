export type TailwindClassMatcherMap = Record<string, (c: string) => string>;
export declare function simplifyTailwindClasses(...classes: (string | string[])[]): string;
