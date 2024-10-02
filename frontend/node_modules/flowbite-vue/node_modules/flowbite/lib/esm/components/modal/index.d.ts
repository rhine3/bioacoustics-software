import type { ModalOptions } from './types';
import type { InstanceOptions, EventListenerInstance } from '../../dom/types';
import { ModalInterface } from './interface';
declare class Modal implements ModalInterface {
    _instanceId: string;
    _targetEl: HTMLElement | null;
    _options: ModalOptions;
    _isHidden: boolean;
    _backdropEl: HTMLElement | null;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _eventListenerInstances: EventListenerInstance[];
    _initialized: boolean;
    constructor(targetEl?: HTMLElement | null, options?: ModalOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    _createBackdrop(): void;
    _destroyBackdropEl(): void;
    _setupModalCloseEventListeners(): void;
    _removeModalCloseEventListeners(): void;
    _handleOutsideClick(target: EventTarget): void;
    _getPlacementClasses(): string[];
    toggle(): void;
    show(): void;
    hide(): void;
    isVisible(): boolean;
    isHidden(): boolean;
    addEventListenerInstance(element: HTMLElement, type: string, handler: EventListenerOrEventListenerObject): void;
    removeAllEventListenerInstances(): void;
    getAllEventListenerInstances(): EventListenerInstance[];
    updateOnShow(callback: () => void): void;
    updateOnHide(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initModals(): void;
export default Modal;
//# sourceMappingURL=index.d.ts.map