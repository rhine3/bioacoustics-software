import type { CopyClipboardOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { CopyClipboardInterface } from './interface';
declare class CopyClipboard implements CopyClipboardInterface {
    _instanceId: string;
    _triggerEl: HTMLElement | null;
    _targetEl: HTMLInputElement | null;
    _options: CopyClipboardOptions;
    _initialized: boolean;
    _triggerElClickHandler: EventListenerOrEventListenerObject;
    _inputHandler: EventListenerOrEventListenerObject;
    constructor(triggerEl?: HTMLElement | null, targetEl?: HTMLInputElement | null, options?: CopyClipboardOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    getTargetValue(): string;
    copy(): string;
    decodeHTML(html: string): string;
    updateOnCopyCallback(callback: () => void): void;
}
export declare function initCopyClipboards(): void;
export default CopyClipboard;
//# sourceMappingURL=index.d.ts.map