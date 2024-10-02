import { type Ref } from 'vue';
import type { TabsVariant } from './../types';
export type TabClassMap = {
    active: string;
    default: string;
    disabled: string;
};
export type UseTabClassesProps = {
    active: Ref<boolean>;
    disabled: Ref<boolean>;
    variant?: TabsVariant;
};
export declare function useTabClasses(props: UseTabClassesProps): {
    tabClasses: Ref<string>;
};
