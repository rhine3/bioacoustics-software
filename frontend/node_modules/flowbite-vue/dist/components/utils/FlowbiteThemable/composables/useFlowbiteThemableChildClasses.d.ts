import { type Ref } from 'vue';
import type { ThemableChildrenApply } from '../types';
import type { FlowbiteTheme } from '../../../../components/utils/FlowbiteThemable/types';
type UseFlowbiteThemableChildReturns = {
    classes: Ref<string>;
};
type UseFlowbiteThemableChildProps = {
    apply: Ref<ThemableChildrenApply[]>;
    theme?: Ref<FlowbiteTheme | undefined>;
};
export declare function useFlowbiteThemableChildClasses(props: UseFlowbiteThemableChildProps): UseFlowbiteThemableChildReturns;
export {};
