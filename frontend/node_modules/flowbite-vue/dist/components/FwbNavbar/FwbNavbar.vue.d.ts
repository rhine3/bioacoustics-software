declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    class: {
        type: StringConstructor;
        default: string;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    solid: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        default: string;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    solid: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    class: string;
    rounded: boolean;
    solid: boolean;
    sticky: boolean;
}, {}>, {
    logo?(_: {}): any;
    "menu-icon"?(_: {}): any;
    default?(_: {
        isShowMenu: boolean;
    }): any;
    "right-side"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
