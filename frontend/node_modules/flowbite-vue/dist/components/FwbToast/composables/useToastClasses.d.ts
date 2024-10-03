import { type Ref } from 'vue';
import type { ToastAlign, ToastType } from '../types';
type UseToastClassesReturns = {
    typeClasses: Ref<string>;
    wrapperClasses: Ref<string>;
    contentClasses: Ref<string>;
};
type UseToastClassesProps = {
    type: Ref<ToastType>;
    divide: Ref<boolean>;
    alignment: Ref<ToastAlign>;
};
export declare function useToastClasses(props: UseToastClassesProps): UseToastClassesReturns;
export {};
