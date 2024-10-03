import { type Ref } from 'vue';
import type { SpinnerColor, SpinnerSize } from '../types';
export type UseSpinnerClassesProps = {
    color: Ref<SpinnerColor>;
    size: Ref<SpinnerSize>;
};
export declare function useSpinnerClasses(props: UseSpinnerClassesProps): {
    spinnerClasses: Ref<string>;
};
