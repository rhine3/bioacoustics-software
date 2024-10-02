import type { ModalSize } from './types';
interface ModalProps {
    notEscapable?: boolean;
    persistent?: boolean;
    size?: ModalSize;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ModalProps>, {
    notEscapable: boolean;
    persistent: boolean;
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "click:outside": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ModalProps>, {
    notEscapable: boolean;
    persistent: boolean;
    size: string;
}>>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onClick:outside"?: ((...args: any[]) => any) | undefined;
}, {
    size: ModalSize;
    notEscapable: boolean;
    persistent: boolean;
}, {}>, {
    header?(_: {}): any;
    "close-icon"?(_: {}): any;
    body?(_: {}): any;
    footer?(_: {}): any;
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
