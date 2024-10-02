import { type Ref } from 'vue';
import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from '../types';
export type ButtonClassMap<T extends string> = {
    hover: Record<T, string>;
    default: Record<T, string>;
};
export type UseButtonClassesProps = {
    class: Ref<string>;
    pill: Ref<boolean>;
    disabled: Ref<boolean>;
    loading: Ref<boolean>;
    outline: Ref<boolean>;
    size: Ref<ButtonSize>;
    square: Ref<boolean>;
    color: Ref<ButtonVariant>;
    gradient: Ref<ButtonGradient | null>;
    shadow: Ref<ButtonMonochromeGradient | '' | null>;
};
export declare function useButtonClasses(props: UseButtonClassesProps): {
    wrapperClasses: string;
    spanClasses: string;
};
