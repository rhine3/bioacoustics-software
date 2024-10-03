import { type Ref } from 'vue';
import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from '../types';
export type UseProgressClassesProps = {
    color: Ref<ProgressVariant>;
    size: Ref<ProgressSize>;
    labelPosition: Ref<ProgressLabelPosition>;
};
export declare function useProgressClasses(props: UseProgressClassesProps): {
    innerClasses: Ref<string>;
    outerClasses: Ref<string>;
    outsideLabelClasses: Ref<string>;
};
