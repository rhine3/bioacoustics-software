import type { DialOptions, DialTriggerType } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DialInterface } from './interface';
declare class Dial implements DialInterface {
    _instanceId: string;
    _parentEl: HTMLElement;
    _triggerEl: HTMLElement;
    _targetEl: HTMLElement;
    _options: DialOptions;
    _visible: boolean;
    _initialized: boolean;
    _showEventHandler: EventListenerOrEventListenerObject;
    _hideEventHandler: EventListenerOrEventListenerObject;
    constructor(parentEl?: HTMLElement | null, triggerEl?: HTMLElement | null, targetEl?: HTMLElement | null, options?: DialOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    hide(): void;
    show(): void;
    toggle(): void;
    isHidden(): boolean;
    isVisible(): boolean;
    _getTriggerEventTypes(triggerType: DialTriggerType): {
        showEvents: string[];
        hideEvents: string[];
    };
    updateOnShow(callback: () => void): void;
    updateOnHide(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initDials(): void;
export default Dial;
//# sourceMappingURL=index.d.ts.map