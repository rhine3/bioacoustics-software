import { AccordionItem, AccordionOptions } from './types';
export declare interface AccordionInterface {
    _items: AccordionItem[];
    _options: AccordionOptions;
    getItem(id: string): AccordionItem | undefined;
    open(id: string): void;
    toggle(id: string): void;
    close(id: string): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}
//# sourceMappingURL=interface.d.ts.map