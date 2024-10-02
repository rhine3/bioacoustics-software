import type { BadgeSize, BadgeType } from '../types';
import { type Ref } from 'vue';
export type UseBadgeClassesProps = {
    type: BadgeType;
    size: BadgeSize;
    href: string | null;
};
export type UseBadgeClassesOptions = {
    isContentEmpty: Ref<boolean>;
};
export declare function useBadgeClasses(props: UseBadgeClassesProps, options: UseBadgeClassesOptions): {
    badgeClasses: Ref<string>;
};
