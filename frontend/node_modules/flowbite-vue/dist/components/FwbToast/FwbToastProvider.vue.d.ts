import { type PropType } from 'vue';
import type { ToastTransition } from './types';
declare const _default: import("vue").DefineComponent<{
    transition: {
        type: PropType<ToastTransition>;
        default: string;
    };
}, {
    toasts: import("vue").Ref<{
        time: number;
        type: import("./types").ToastType;
        text: string;
        component?: import("vue").DefineComponent | undefined;
        componentProps?: Record<string, unknown> | undefined;
        id: string;
    }[]>;
    removeToast: (id: string) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    transition: {
        type: PropType<ToastTransition>;
        default: string;
    };
}>>, {
    transition: ToastTransition;
}, {}>;
export default _default;
