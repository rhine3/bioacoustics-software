import { type PropType } from 'vue';
import type { CardsVariant } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    href: {
        type: StringConstructor;
        default: string;
    };
    imgAlt: {
        type: StringConstructor;
        default: string;
    };
    imgSrc: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: PropType<CardsVariant>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: StringConstructor;
        default: string;
    };
    imgAlt: {
        type: StringConstructor;
        default: string;
    };
    imgSrc: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: PropType<CardsVariant>;
        default: string;
    };
}>>, {
    href: string;
    imgAlt: string;
    imgSrc: string;
    variant: CardsVariant;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
