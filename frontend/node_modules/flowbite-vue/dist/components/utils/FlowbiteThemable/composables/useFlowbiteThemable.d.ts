import { type Ref } from 'vue';
import type { FlowbiteTheme } from '../types';
type UseFlowbiteThemableReturns = {
    backgroundClasses: Ref<string>;
    borderClasses: Ref<string>;
    color: Ref<FlowbiteTheme | undefined>;
    disabledClasses: Ref<string>;
    focusClasses: Ref<string>;
    hoverClasses: Ref<string>;
    isActive: Ref<boolean>;
    textClasses: Ref<string>;
};
export declare function useFlowbiteThemable(_theme?: FlowbiteTheme): UseFlowbiteThemableReturns;
export {};
