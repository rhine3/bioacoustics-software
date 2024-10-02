import type { RatingSize } from './types';
interface IRatingProps {
    rating?: number;
    reviewLink?: string;
    reviewText?: string;
    scale?: number;
    size?: RatingSize;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IRatingProps>, {
    rating: number;
    reviewLink: string;
    reviewText: string;
    scale: number;
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IRatingProps>, {
    rating: number;
    reviewLink: string;
    reviewText: string;
    scale: number;
    size: string;
}>>>, {
    size: RatingSize;
    rating: number;
    reviewLink: string;
    reviewText: string;
    scale: number;
}, {}>, {
    besideText?(_: {}): any;
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
