import { type Ref } from 'vue';
import type { TabsVariant } from '../types';
export type UseTabsClassesProps = {
    variant: TabsVariant;
};
export declare function useTabsClasses(props: UseTabsClassesProps): {
    divClasses: Ref<string>;
    ulClasses: Ref<string>;
};
