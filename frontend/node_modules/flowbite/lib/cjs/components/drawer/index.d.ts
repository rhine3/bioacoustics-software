import type { DrawerOptions, PlacementClasses } from './types';
import type { InstanceOptions, EventListenerInstance } from '../../dom/types';
import { DrawerInterface } from './interface';
declare class Drawer implements DrawerInterface {
    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DrawerOptions;
    _visible: boolean;
    _eventListenerInstances: EventListenerInstance[];
    _handleEscapeKey: EventListenerOrEventListenerObject;
    _initialized: boolean;
    constructor(targetEl?: HTMLElement | null, options?: DrawerOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    hide(): void;
    show(): void;
    toggle(): void;
    _createBackdrop(): void;
    _destroyBackdropEl(): void;
    _getPlacementClasses(placement: string): PlacementClasses;
    isHidden(): boolean;
    isVisible(): boolean;
    addEventListenerInstance(element: HTMLElement, type: string, handler: EventListenerOrEventListenerObject): void;
    removeAllEventListenerInstances(): void;
    getAllEventListenerInstances(): EventListenerInstance[];
    updateOnShow(callback: () => void): void;
    updateOnHide(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initDrawers(): void;
export default Drawer;
//# sourceMappingURL=index.d.ts.map