import type { PaginationLayout } from './types';
interface IPaginationProps {
    modelValue?: number;
    totalPages?: number;
    perPage?: number;
    totalItems?: number;
    layout?: PaginationLayout;
    showIcons?: boolean;
    sliceLength?: number;
    previousLabel?: string;
    nextLabel?: string;
    enableFirstAndLastButtons?: boolean;
    showLabels?: boolean;
    large?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IPaginationProps>, {
    modelValue: number;
    totalPages: undefined;
    perPage: number;
    totalItems: number;
    layout: string;
    showIcons: boolean;
    sliceLength: number;
    previousLabel: string;
    nextLabel: string;
    enableFirstAndLastButtons: boolean;
    showLabels: boolean;
    large: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (page: number) => void;
    "page-changed": (page: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IPaginationProps>, {
    modelValue: number;
    totalPages: undefined;
    perPage: number;
    totalItems: number;
    layout: string;
    showIcons: boolean;
    sliceLength: number;
    previousLabel: string;
    nextLabel: string;
    enableFirstAndLastButtons: boolean;
    showLabels: boolean;
    large: boolean;
}>>> & {
    "onUpdate:model-value"?: ((page: number) => any) | undefined;
    "onPage-changed"?: ((page: number) => any) | undefined;
}, {
    modelValue: number;
    totalPages: number;
    perPage: number;
    totalItems: number;
    layout: PaginationLayout;
    showIcons: boolean;
    sliceLength: number;
    previousLabel: string;
    nextLabel: string;
    enableFirstAndLastButtons: boolean;
    showLabels: boolean;
    large: boolean;
}, {}>, Readonly<{
    start: any;
    'first-button': any;
    'prev-button': any;
    'prev-icon': any;
    'page-button': any;
    'next-button': any;
    'next-icon': any;
    'last-button': any;
    end: any;
}> & {
    start: any;
    'first-button': any;
    'prev-button': any;
    'prev-icon': any;
    'page-button': any;
    'next-button': any;
    'next-icon': any;
    'last-button': any;
    end: any;
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
