"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// core components
var accordion_1 = require("./components/accordion");
var carousel_1 = require("./components/carousel");
var collapse_1 = require("./components/collapse");
var dial_1 = require("./components/dial");
var dismiss_1 = require("./components/dismiss");
var drawer_1 = require("./components/drawer");
var dropdown_1 = require("./components/dropdown");
var modal_1 = require("./components/modal");
var popover_1 = require("./components/popover");
var tabs_1 = require("./components/tabs");
var tooltip_1 = require("./components/tooltip");
var input_counter_1 = require("./components/input-counter");
var clipboard_1 = require("./components/clipboard");
var index_1 = require("./components/index");
var events_1 = require("./dom/events");
// Since turbo maintainers refuse to add this event, we'll add it ourselves
// https://discuss.hotwired.dev/t/event-to-know-a-turbo-stream-has-been-rendered/1554/10
var afterRenderEvent = new Event('turbo:after-stream-render');
addEventListener('turbo:before-stream-render', function (event) {
    var originalRender = event.detail.render;
    event.detail.render = function (streamElement) {
        originalRender(streamElement);
        document.dispatchEvent(afterRenderEvent);
    };
});
var turboLoadEvents = new events_1.default('turbo:load', [index_1.initFlowbite]);
turboLoadEvents.init();
var turboFrameLoadEvents = new events_1.default('turbo:frame-load', [index_1.initFlowbite]);
turboFrameLoadEvents.init();
var turboStreamLoadEvents = new events_1.default('turbo:after-stream-render', [
    index_1.initFlowbite,
]);
turboStreamLoadEvents.init();
exports.default = {
    Accordion: accordion_1.default,
    Carousel: carousel_1.default,
    Collapse: collapse_1.default,
    Dial: dial_1.default,
    Drawer: drawer_1.default,
    Dismiss: dismiss_1.default,
    Dropdown: dropdown_1.default,
    Modal: modal_1.default,
    Popover: popover_1.default,
    Tabs: tabs_1.default,
    Tooltip: tooltip_1.default,
    InputCounter: input_counter_1.default,
    CopyClipboard: clipboard_1.default,
    Events: events_1.default,
};
//# sourceMappingURL=index.turbo.js.map