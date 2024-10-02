import { ModalOptions } from './types';
export declare interface ModalInterface {
    _targetEl: HTMLElement | null;
    _options: ModalOptions;
    _isHidden: boolean;
    _backdropEl: HTMLElement | null;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    init(): void;
    _createBackdrop(): void;
    _destroyBackdropEl(): void;
    _setupModalCloseEventListeners(): void;
    _handleOutsideClick(target: EventTarget): void;
    _getPlacementClasses(): string[];
    toggle(): void;
    show(): void;
    hide(): void;
    isHidden(): boolean;
    isVisible(): boolean;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    addEventListenerInstance(element: HTMLElement, type: string, handler: EventListenerOrEventListenerObject): void;
    removeAllEventListenerInstances(): void;
    getAllEventListenerInstances(): void;
}
//# sourceMappingURL=interface.d.ts.map