import { type Ref } from 'vue';
export type useBreadcrumbProps = {
    solid: Ref<boolean>;
};
export declare function useBreadcrumbClasses(props: useBreadcrumbProps): {
    breadcrumbClasses: Ref<string>;
    breadcrumbWrapperClasses: Ref<string>;
};
