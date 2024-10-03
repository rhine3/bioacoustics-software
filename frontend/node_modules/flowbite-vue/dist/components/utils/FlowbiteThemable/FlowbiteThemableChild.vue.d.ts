import { type PropType } from 'vue';
import type { FlowbiteTheme, ThemableChildrenApply } from '../../../components/utils/FlowbiteThemable/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    apply: {
        type: PropType<ThemableChildrenApply[]>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<FlowbiteTheme>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    apply: {
        type: PropType<ThemableChildrenApply[]>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<FlowbiteTheme>;
        default: undefined;
    };
}>>, {
    tag: string;
    theme: FlowbiteTheme;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
