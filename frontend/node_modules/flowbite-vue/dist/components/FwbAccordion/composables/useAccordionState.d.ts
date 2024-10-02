import type { tState } from '../types';
interface AccordionProps {
    alwaysOpen?: boolean;
    openFirstItem?: boolean;
    flush?: boolean;
}
export declare function useAccordionState(id?: string, options?: AccordionProps): {
    accordionsStates: tState;
};
export {};
