import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from './types';
interface IButtonProps {
    class?: string;
    color?: ButtonVariant;
    gradient?: ButtonGradient | null;
    size?: ButtonSize;
    shadow?: ButtonMonochromeGradient | null;
    pill?: boolean;
    square?: boolean;
    outline?: boolean;
    loading?: boolean;
    loadingPosition?: 'suffix' | 'prefix';
    disabled?: boolean;
    href?: string;
    tag?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IButtonProps>, {
    class: string;
    color: string;
    gradient: null;
    size: string;
    shadow: null;
    pill: boolean;
    square: boolean;
    outline: boolean;
    loading: boolean;
    loadingPosition: string;
    disabled: boolean;
    href: string;
    tag: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IButtonProps>, {
    class: string;
    color: string;
    gradient: null;
    size: string;
    shadow: null;
    pill: boolean;
    square: boolean;
    outline: boolean;
    loading: boolean;
    loadingPosition: string;
    disabled: boolean;
    href: string;
    tag: string;
}>>>, {
    class: string;
    size: ButtonSize;
    href: string;
    color: ButtonVariant;
    gradient: ButtonGradient | null;
    shadow: ButtonMonochromeGradient | null;
    pill: boolean;
    square: boolean;
    outline: boolean;
    loading: boolean;
    loadingPosition: "prefix" | "suffix";
    disabled: boolean;
    tag: string;
}, {}>, {
    prefix?(_: {}): any;
    prefix?(_: {}): any;
    default?(_: {}): any;
    suffix?(_: {}): any;
    suffix?(_: {}): any;
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
