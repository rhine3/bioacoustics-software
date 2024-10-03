import { type PropType } from 'vue';
import type { AvatarSize, AvatarStatus, AvatarStatusPosition } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    alt: {
        type: StringConstructor;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<AvatarSize>;
        default: string;
    };
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: PropType<AvatarStatus>;
        default: null;
    };
    statusPosition: {
        type: PropType<AvatarStatusPosition>;
        default: string;
    };
    initials: {
        type: StringConstructor;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    alt: {
        type: StringConstructor;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<AvatarSize>;
        default: string;
    };
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: PropType<AvatarStatus>;
        default: null;
    };
    statusPosition: {
        type: PropType<AvatarStatusPosition>;
        default: string;
    };
    initials: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    img: string;
    rounded: boolean;
    alt: string;
    bordered: boolean;
    size: AvatarSize;
    stacked: boolean;
    status: AvatarStatus;
    statusPosition: AvatarStatusPosition;
    initials: string;
}, {}>, {
    placeholder?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
