import { type PropType } from 'vue';
import type { PictureItem } from '../../components/FwbCarousel/types';
declare const _default: import("vue").DefineComponent<{
    pictures: {
        type: PropType<PictureItem[]>;
        default(): never[];
    };
    noIndicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    noControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    slide: {
        type: BooleanConstructor;
        default: boolean;
    };
    slideInterval: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pictures: {
        type: PropType<PictureItem[]>;
        default(): never[];
    };
    noIndicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    noControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    slide: {
        type: BooleanConstructor;
        default: boolean;
    };
    slideInterval: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    pictures: PictureItem[];
    noIndicators: boolean;
    noControls: boolean;
    slide: boolean;
    slideInterval: number;
    animation: boolean;
}, {}>;
export default _default;
