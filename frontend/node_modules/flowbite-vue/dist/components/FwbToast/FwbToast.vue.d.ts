import { type PropType } from 'vue';
import type { ToastAlign, ToastType } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: PropType<ToastType>;
        default: string;
    };
    alignment: {
        type: PropType<ToastAlign>;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    divide: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<ToastType>;
        default: string;
    };
    alignment: {
        type: PropType<ToastAlign>;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    divide: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    type: ToastType;
    closable: boolean;
    alignment: ToastAlign;
    divide: boolean;
}, {}>, {
    icon?(_: {
        class: {
            'ml-3': boolean;
        };
    }): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
