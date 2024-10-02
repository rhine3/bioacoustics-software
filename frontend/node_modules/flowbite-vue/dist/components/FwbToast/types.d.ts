import type { DefineComponent } from 'vue';
export type ToastAlign = 'start' | 'center' | 'end';
export type ToastType = 'success' | 'warning' | 'danger' | 'empty';
export type ToastItem = {
    time: number;
    type: ToastType;
    text: string;
    component?: DefineComponent;
    componentProps?: Record<string, unknown>;
};
export type ToastItemWithId = ToastItem & {
    id: string;
};
export type ToastTransition = 'slide-left' | 'slide-right' | 'fade' | 'slide-top' | 'slide-bottom';
export type UseToastInjection = {
    add: (toast: ToastItem) => string;
    remove: (id: string) => boolean;
    pop: () => string;
};
