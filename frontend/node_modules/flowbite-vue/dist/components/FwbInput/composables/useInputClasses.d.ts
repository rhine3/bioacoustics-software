import { type Ref } from 'vue';
import { type InputSize, type ValidationStatus } from '../types';
export type UseInputClassesProps = {
    size: Ref<InputSize>;
    disabled: Ref<boolean>;
    validationStatus: Ref<ValidationStatus | undefined>;
};
export declare function useInputClasses(props: UseInputClassesProps): {
    inputClasses: Ref<string>;
    labelClasses: Ref<string>;
};
