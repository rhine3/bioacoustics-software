declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    href: {
        type: StringConstructor;
        default: null;
    };
    home: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: StringConstructor;
        default: null;
    };
    home: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    href: string;
    home: boolean;
}, {}>, {
    "arrow-icon"?(_: {}): any;
    "home-icon"?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
