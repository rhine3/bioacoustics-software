import type { InputCounterOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { InputCounterInterface } from './interface';
declare class InputCounter implements InputCounterInterface {
    _instanceId: string;
    _targetEl: HTMLInputElement | null;
    _incrementEl: HTMLElement | null;
    _decrementEl: HTMLElement | null;
    _options: InputCounterOptions;
    _initialized: boolean;
    _incrementClickHandler: EventListenerOrEventListenerObject;
    _decrementClickHandler: EventListenerOrEventListenerObject;
    _inputHandler: EventListenerOrEventListenerObject;
    constructor(targetEl?: HTMLInputElement | null, incrementEl?: HTMLElement | null, decrementEl?: HTMLElement | null, options?: InputCounterOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    getCurrentValue(): number;
    increment(): void;
    decrement(): void;
    updateOnIncrement(callback: () => void): void;
    updateOnDecrement(callback: () => void): void;
}
export declare function initInputCounters(): void;
export default InputCounter;
//# sourceMappingURL=index.d.ts.map