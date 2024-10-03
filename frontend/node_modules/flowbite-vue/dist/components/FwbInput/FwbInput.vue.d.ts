import { type InputSize, type InputType, type ValidationStatus } from './types';
interface InputProps {
    disabled?: boolean;
    label?: string;
    modelValue: string;
    required?: boolean;
    size?: InputSize;
    type?: InputType;
    validationStatus?: ValidationStatus;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<InputProps>, {
    disabled: boolean;
    label: string;
    modelValue: string;
    required: boolean;
    size: string;
    type: string;
    validationStatus: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<InputProps>, {
    disabled: boolean;
    label: string;
    modelValue: string;
    required: boolean;
    size: string;
    type: string;
    validationStatus: undefined;
}>>>, {
    type: InputType;
    label: string;
    size: InputSize;
    disabled: boolean;
    required: boolean;
    modelValue: string;
    validationStatus: ValidationStatus;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
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
