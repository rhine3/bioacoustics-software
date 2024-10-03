import { type Ref } from 'vue';
import type { AvatarSize, AvatarStatus, AvatarStatusPosition } from '../../../components/FwbAvatar/types';
export type UseAvatarClassesProps = {
    status: Ref<AvatarStatus>;
    bordered: Ref<boolean>;
    img: Ref<string>;
    alt: Ref<string>;
    rounded: Ref<boolean>;
    size: Ref<AvatarSize>;
    stacked: Ref<boolean>;
    statusPosition: Ref<AvatarStatusPosition>;
};
export declare function useAvatarClasses(props: UseAvatarClassesProps): {
    avatarClasses: Ref<string>;
    avatarDotClasses: Ref<string>;
    avatarPlaceholderClasses: Ref<string>;
    avatarPlaceholderWrapperClasses: Ref<string>;
    avatarPlaceholderInitialsClasses: Ref<string>;
};
