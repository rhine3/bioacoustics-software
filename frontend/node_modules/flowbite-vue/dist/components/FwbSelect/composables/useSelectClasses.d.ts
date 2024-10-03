import { type Ref } from 'vue';
import { type InputSize, type ValidationStatus } from '../types';
export type UseSelectClassesProps = {
    size: Ref<InputSize>;
    disabled: Ref<boolean>;
    underline: Ref<boolean>;
    validationStatus: Ref<ValidationStatus | undefined>;
};
export declare function useSelectClasses(props: UseSelectClassesProps): {
    selectClasses: Ref<string>;
    labelClasses: Ref<string>;
};
