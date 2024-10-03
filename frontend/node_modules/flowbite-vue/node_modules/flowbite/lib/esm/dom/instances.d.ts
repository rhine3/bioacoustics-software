import { AccordionInterface } from '../components/accordion/interface';
import { CarouselInterface } from '../components/carousel/interface';
import { CollapseInterface } from '../components/collapse/interface';
import { DialInterface } from '../components/dial/interface';
import { DismissInterface } from '../components/dismiss/interface';
import { DrawerInterface } from '../components/drawer/interface';
import { DropdownInterface } from '../components/dropdown/interface';
import { ModalInterface } from '../components/modal/interface';
import { PopoverInterface } from '../components/popover/interface';
import { TabsInterface } from '../components/tabs/interface';
import { TooltipInterface } from '../components/tooltip/interface';
import { InputCounterInterface } from '../components/input-counter/interface';
import { CopyClipboardInterface } from '../components/clipboard/interface';
declare class Instances {
    private _instances;
    constructor();
    addInstance(component: keyof Instances['_instances'], instance: any, id?: string, override?: boolean): boolean;
    getAllInstances(): {
        Accordion: {
            [id: string]: AccordionInterface;
        };
        Carousel: {
            [id: string]: CarouselInterface;
        };
        Collapse: {
            [id: string]: CollapseInterface;
        };
        Dial: {
            [id: string]: DialInterface;
        };
        Dismiss: {
            [id: string]: DismissInterface;
        };
        Drawer: {
            [id: string]: DrawerInterface;
        };
        Dropdown: {
            [id: string]: DropdownInterface;
        };
        Modal: {
            [id: string]: ModalInterface;
        };
        Popover: {
            [id: string]: PopoverInterface;
        };
        Tabs: {
            [id: string]: TabsInterface;
        };
        Tooltip: {
            [id: string]: TooltipInterface;
        };
        InputCounter: {
            [id: string]: InputCounterInterface;
        };
        CopyClipboard: {
            [id: string]: CopyClipboardInterface;
        };
    };
    getInstances(component: keyof Instances['_instances']): false | {
        [id: string]: AccordionInterface;
    } | {
        [id: string]: CarouselInterface;
    } | {
        [id: string]: CollapseInterface;
    } | {
        [id: string]: DialInterface;
    } | {
        [id: string]: DismissInterface;
    } | {
        [id: string]: DrawerInterface;
    } | {
        [id: string]: DropdownInterface;
    } | {
        [id: string]: ModalInterface;
    } | {
        [id: string]: TabsInterface;
    } | {
        [id: string]: TooltipInterface;
    } | {
        [id: string]: InputCounterInterface;
    } | {
        [id: string]: CopyClipboardInterface;
    };
    getInstance(component: keyof Instances['_instances'], id: string): any;
    destroyAndRemoveInstance(component: keyof Instances['_instances'], id: string): void;
    removeInstance(component: keyof Instances['_instances'], id: string): void;
    destroyInstanceObject(component: keyof Instances['_instances'], id: string): void;
    instanceExists(component: keyof Instances['_instances'], id: string): boolean;
    _generateRandomId(): string;
    private _componentAndInstanceCheck;
}
declare const instances: Instances;
export default instances;
//# sourceMappingURL=instances.d.ts.map