import type { Instance as PopperInstance } from '@popperjs/core';
import type { DropdownOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DropdownInterface } from './interface';
declare class Dropdown implements DropdownInterface {
    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DropdownOptions;
    _visible: boolean;
    _popperInstance: PopperInstance;
    _initialized: boolean;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _hoverShowTriggerElHandler: EventListenerOrEventListenerObject;
    _hoverShowTargetElHandler: EventListenerOrEventListenerObject;
    _hoverHideHandler: EventListenerOrEventListenerObject;
    _clickHandler: EventListenerOrEventListenerObject;
    constructor(targetElement?: HTMLElement | null, triggerElement?: HTMLElement | null, options?: DropdownOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    _setupEventListeners(): void;
    _createPopperInstance(): PopperInstance;
    _setupClickOutsideListener(): void;
    _removeClickOutsideListener(): void;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    _getTriggerEvents(): {
        showEvents: string[];
        hideEvents: string[];
    };
    toggle(): void;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    updateOnShow(callback: () => void): void;
    updateOnHide(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initDropdowns(): void;
export default Dropdown;
//# sourceMappingURL=index.d.ts.map