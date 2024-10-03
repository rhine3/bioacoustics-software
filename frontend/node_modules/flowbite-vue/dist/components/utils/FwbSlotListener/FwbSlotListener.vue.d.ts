import { type PropType } from 'vue';
import type { SlotListenerTrigger } from '../../../components/utils/FwbSlotListener/types';
declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: PropType<SlotListenerTrigger>;
        default: string;
    };
}, {
    handleClick: (e: MouseEvent) => void;
    handleBlur: (e: FocusEvent) => void;
    handleFocus: (e: FocusEvent) => void;
    handleMouseLeave: (e: MouseEvent) => void;
    handleMouseEnter: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "focus" | "blur" | "mouseenter" | "mouseleave")[], "click" | "focus" | "blur" | "mouseenter" | "mouseleave", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    trigger: {
        type: PropType<SlotListenerTrigger>;
        default: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
}, {
    trigger: SlotListenerTrigger;
}, {}>;
export default _default;
