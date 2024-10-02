import { type Ref } from 'vue';
export type UseListGroupItemClassesProps = {
    hover: Ref<boolean>;
    disabled: Ref<boolean>;
};
export declare function useListGroupItemClasses(props: UseListGroupItemClassesProps): {
    itemClasses: Ref<string>;
};
