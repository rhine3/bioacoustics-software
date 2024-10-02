import { type Ref } from 'vue';
export type useBreadcrumbItemProps = {
    href: Ref<string>;
    home: Ref<boolean>;
};
export declare function useBreadcrumbItemClasses(props: useBreadcrumbItemProps): {
    breadcrumbItemClasses: Ref<string>;
};
