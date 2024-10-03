import { type Ref } from 'vue';
import type { InputSize } from '../../../components/FwbInput/types';
export type UseRangeClassesProps = {
    size: Ref<InputSize>;
    disabled: Ref<boolean>;
};
export declare function useRangeClasses(props: UseRangeClassesProps): {
    rangeClasses: import("vue").ComputedRef<string>;
    labelClasses: import("vue").ComputedRef<string>;
};
