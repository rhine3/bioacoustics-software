import type { Instance as PopperInstance } from '@popperjs/core';
import type { TooltipOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { TooltipInterface } from './interface';
declare class Tooltip implements TooltipInterface {
    _instanceId: string;
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _visible: boolean;
    _initialized: boolean;
    _showHandler: EventListenerOrEventListenerObject;
    _hideHandler: EventListenerOrEventListenerObject;
    constructor(targetEl?: HTMLElement | null, triggerEl?: HTMLElement | null, options?: TooltipOptions, instanceOptions?: InstanceOptions);
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
export declare function initTooltips(): void;
export default Tooltip;
//# sourceMappingURL=index.d.ts.map