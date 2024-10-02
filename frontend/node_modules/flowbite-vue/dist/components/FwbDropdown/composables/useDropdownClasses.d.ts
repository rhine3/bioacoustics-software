import { type Ref } from 'vue';
import type { DropdownPlacement } from '../types';
export type UseDropdownClassesProps = {
    placement: Ref<DropdownPlacement>;
    contentRef: Ref<HTMLDivElement | undefined>;
    visible: Ref<boolean>;
    alignToEnd: Ref<boolean>;
};
export declare function useDropdownClasses(props: UseDropdownClassesProps): {
    contentClasses: Ref<string>;
    contentStyles: Ref<string>;
};
