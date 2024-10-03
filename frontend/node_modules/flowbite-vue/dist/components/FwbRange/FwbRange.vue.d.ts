import type { InputSize } from '../../components/FwbInput/types';
interface RangeProps {
    disabled?: boolean;
    label?: string;
    max?: number;
    min?: number;
    modelValue?: number;
    size?: InputSize;
    steps?: number;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<RangeProps>, {
    disabled: boolean;
    label: string;
    max: number;
    min: number;
    modelValue: number;
    size: string;
    steps: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<RangeProps>, {
    disabled: boolean;
    label: string;
    max: number;
    min: number;
    modelValue: number;
    size: string;
    steps: number;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    size: InputSize;
    disabled: boolean;
    modelValue: number;
    min: number;
    max: number;
    steps: number;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
