import { type Ref } from 'vue';
import type { CardsVariant } from '../types';
export type UseCardsClassesProps = {
    variant: Ref<CardsVariant>;
};
export declare function useCardsClasses(props: UseCardsClassesProps): {
    cardClasses: Ref<string>;
    horizontalImageClasses: Ref<string>;
};
