declare module 'flowbite-datepicker' {
    class Datepicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
        show(): void;
        hide(): void;
        setDate(date: string): void;
        getDate(): string;
    }
    class DateRangePicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
        hide(): void;
        show(): void;
        setDates(dates: string[]): void;
        getDates(): string[];
    }
}
//# sourceMappingURL=declarations.d.ts.map