import type { InputSize } from './../FwbInput/types';
import { type OptionsType, type ValidationStatus } from './types';
interface InputProps {
    modelValue?: string;
    label?: string;
    options?: OptionsType[];
    placeholder?: string;
    disabled?: boolean;
    underline?: boolean;
    size?: InputSize;
    validationStatus?: ValidationStatus;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<InputProps>, {
    modelValue: string;
    label: string;
    options: () => never[];
    placeholder: string;
    disabled: boolean;
    underline: boolean;
    size: string;
    validationStatus: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<InputProps>, {
    modelValue: string;
    label: string;
    options: () => never[];
    placeholder: string;
    disabled: boolean;
    underline: boolean;
    size: string;
    validationStatus: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    placeholder: string;
    size: InputSize;
    disabled: boolean;
    modelValue: string;
    underline: boolean;
    validationStatus: ValidationStatus;
    options: OptionsType[];
}, {}>, {
    validationMessage?(_: {}): any;
    helper?(_: {}): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
