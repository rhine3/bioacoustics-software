import type { Instance as PopperInstance } from '@popperjs/core';
import type { PopoverOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { PopoverInterface } from './interface';
declare class Popover implements PopoverInterface {
    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: PopoverOptions;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _visible: boolean;
    _initialized: boolean;
    _showHandler: EventListenerOrEventListenerObject;
    _hideHandler: EventListenerOrEventListenerObject;
    constructor(targetEl?: HTMLElement | null, triggerEl?: HTMLElement | null, options?: PopoverOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    _setupEventListeners(): void;
    _createPopperInstance(): PopperInstance;
    _getTriggerEvents(): {
        showEvents: string[];
        hideEvents: string[];
    };
    _setupKeydownListener(): void;
    _removeKeydownListener(): void;
    _setupClickOutsideListener(): void;
    _removeClickOutsideListener(): void;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    isVisible(): boolean;
    toggle(): void;
    show(): void;
    hide(): void;
    updateOnShow(callback: () => void): void;
    updateOnHide(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initPopovers(): void;
export default Popover;
//# sourceMappingURL=index.d.ts.map