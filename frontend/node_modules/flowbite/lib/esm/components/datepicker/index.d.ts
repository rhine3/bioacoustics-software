import type { DatepickerOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DatepickerInterface } from './interface';
import { Datepicker as FlowbiteDatepicker, DateRangePicker as FlowbiteDateRangePicker } from 'flowbite-datepicker';
declare class Datepicker implements DatepickerInterface {
    _instanceId: string;
    _datepickerEl: HTMLElement;
    _datepickerInstance: FlowbiteDatepicker | FlowbiteDateRangePicker | null;
    _options: DatepickerOptions;
    _initialized: boolean;
    constructor(datepickerEl?: HTMLElement | null, options?: DatepickerOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    getDatepickerInstance(): FlowbiteDatepicker | FlowbiteDateRangePicker;
    getDate(): string | string[];
    setDate(date: any): void;
    show(): void;
    hide(): void;
    _getDatepickerOptions(options: DatepickerOptions): any;
    updateOnShow(callback: () => void): void;
    updateOnHide(callback: () => void): void;
}
export declare function initDatepickers(): void;
export default Datepicker;
//# sourceMappingURL=index.d.ts.map