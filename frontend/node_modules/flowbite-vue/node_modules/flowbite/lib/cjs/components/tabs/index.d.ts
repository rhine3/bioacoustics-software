import type { TabItem, TabsOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { TabsInterface } from './interface';
declare class Tabs implements TabsInterface {
    _instanceId: string;
    _tabsEl: HTMLElement;
    _items: TabItem[];
    _activeTab: TabItem;
    _options: TabsOptions;
    _initialized: boolean;
    constructor(tabsEl?: HTMLElement | null, items?: TabItem[], options?: TabsOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    getActiveTab(): TabItem;
    setActiveTab(tab: TabItem): void;
    getTab(id: string): TabItem;
    show(id: string, forceShow?: boolean): void;
    updateOnShow(callback: () => void): void;
}
export declare function initTabs(): void;
export default Tabs;
//# sourceMappingURL=index.d.ts.map