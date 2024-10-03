import { type Ref } from 'vue';
import type { InputSize } from '../../../components/FwbInput/types';
export type UseToggleClassesProps = {
    size: Ref<InputSize>;
    color: Ref<string>;
};
export declare function useToggleClasses(props: UseToggleClassesProps): {
    labelClasses: import("vue").ComputedRef<string>;
    toggleSize: import("vue").ComputedRef<string>;
    toggleClasses: import("vue").ComputedRef<string>;
    toggleColor: import("vue").ComputedRef<string>;
    toggleBallClasses: import("vue").ComputedRef<string>;
};
