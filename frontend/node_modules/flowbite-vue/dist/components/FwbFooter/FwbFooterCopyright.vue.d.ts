interface IFooterCopyrigthProps {
    year?: string | number;
    by?: string;
    href?: string;
    aClass?: string;
    copyrightMessage?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IFooterCopyrigthProps>, {
    year: number;
    by: string;
    href: string;
    aClass: string;
    copyrightMessage: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IFooterCopyrigthProps>, {
    year: number;
    by: string;
    href: string;
    aClass: string;
    copyrightMessage: string;
}>>>, {
    href: string;
    aClass: string;
    year: string | number;
    by: string;
    copyrightMessage: string;
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
