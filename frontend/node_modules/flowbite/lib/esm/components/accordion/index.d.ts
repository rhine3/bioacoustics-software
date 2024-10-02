import type { AccordionItem, AccordionOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { AccordionInterface } from './interface';
declare class Accordion implements AccordionInterface {
    _instanceId: string;
    _accordionEl: HTMLElement;
    _items: AccordionItem[];
    _options: AccordionOptions;
    _clickHandler: EventListenerOrEventListenerObject;
    _initialized: boolean;
    constructor(accordionEl?: HTMLElement | null, items?: AccordionItem[], options?: AccordionOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    getItem(id: string): AccordionItem;
    open(id: string): void;
    toggle(id: string): void;
    close(id: string): void;
    updateOnOpen(callback: () => void): void;
    updateOnClose(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initAccordions(): void;
export default Accordion;
//# sourceMappingURL=index.d.ts.map