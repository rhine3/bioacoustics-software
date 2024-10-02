export type InputSize = 'sm' | 'md' | 'lg';
export type OptionsType = {
    name: string;
    value: string;
};
export declare const validationStatusMap: {
    readonly Success: "success";
    readonly Error: "error";
};
export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap];
