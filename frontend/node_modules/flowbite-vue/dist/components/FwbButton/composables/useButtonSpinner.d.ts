import { type Ref } from 'vue';
import type { ButtonGradient, ButtonSize, ButtonVariant } from '../types';
import type { SpinnerColor, SpinnerSize } from './../../FwbSpinner/types';
export type UseButtonSpinnerProps = {
    outline: Ref<boolean>;
    size: Ref<ButtonSize>;
    color: Ref<ButtonVariant>;
    gradient: Ref<ButtonGradient | null>;
};
export declare function useButtonSpinner(props: UseButtonSpinnerProps): {
    size: Ref<SpinnerSize>;
    color: Ref<SpinnerColor>;
};
