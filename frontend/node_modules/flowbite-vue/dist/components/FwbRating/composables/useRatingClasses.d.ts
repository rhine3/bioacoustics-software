import { type Ref } from 'vue';
import type { RatingSize } from '../types';
export type UseRatingClassesProps = {
    size: Ref<RatingSize>;
};
export declare function useRatingClasses(props: UseRatingClassesProps): {
    sizeClasses: Ref<string>;
};
