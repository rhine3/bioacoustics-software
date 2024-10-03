import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from './types';
interface IProgressProps {
    color?: ProgressVariant;
    label?: string;
    labelPosition?: ProgressLabelPosition;
    labelProgress?: boolean;
    progress?: number;
    size?: ProgressSize;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IProgressProps>, {
    color: string;
    label: string;
    labelPosition: string;
    labelProgress: boolean;
    progress: number;
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IProgressProps>, {
    color: string;
    label: string;
    labelPosition: string;
    labelProgress: boolean;
    progress: number;
    size: string;
}>>>, {
    label: string;
    progress: number;
    size: ProgressSize;
    color: ProgressVariant;
    labelPosition: ProgressLabelPosition;
    labelProgress: boolean;
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
