var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-empty-function */
import { createPopper } from '@popperjs/core';
import instances from '../../dom/instances';
var Default = {
    placement: 'top',
    offset: 10,
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Popover = /** @class */ (function () {
    function Popover(targetEl, triggerEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = null;
        this._visible = false;
        this._initialized = false;
        this.init();
        instances.addInstance('Popover', this, instanceOptions.id ? instanceOptions.id : this._targetEl.id, instanceOptions.override);
    }
    Popover.prototype.init = function () {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._setupEventListeners();
            this._popperInstance = this._createPopperInstance();
            this._initialized = true;
        }
    };
    Popover.prototype.destroy = function () {
        var _this = this;
        if (this._initialized) {
            // remove event listeners associated with the trigger element and target element
            var triggerEvents = this._getTriggerEvents();
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._showHandler);
                _this._targetEl.removeEventListener(ev, _this._showHandler);
            });
            triggerEvents.hideEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._hideHandler);
                _this._targetEl.removeEventListener(ev, _this._hideHandler);
            });
            // remove event listeners for keydown
            this._removeKeydownListener();
            // remove event listeners for click outside
            this._removeClickOutsideListener();
            // destroy the Popper instance if you have one (assuming this._popperInstance is the Popper instance)
            if (this._popperInstance) {
                this._popperInstance.destroy();
            }
            this._initialized = false;
        }
    };
    Popover.prototype.removeInstance = function () {
        instances.removeInstance('Popover', this._instanceId);
    };
    Popover.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Popover.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        this._showHandler = function () {
            _this.show();
        };
        this._hideHandler = function () {
            setTimeout(function () {
                if (!_this._targetEl.matches(':hover')) {
                    _this.hide();
                }
            }, 100);
        };
        triggerEvents.showEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, _this._showHandler);
            _this._targetEl.addEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, _this._hideHandler);
            _this._targetEl.addEventListener(ev, _this._hideHandler);
        });
    };
    Popover.prototype._createPopperInstance = function () {
        return createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, this._options.offset],
                    },
                },
            ],
        });
    };
    Popover.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    Popover.prototype._setupKeydownListener = function () {
        var _this = this;
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Popover.prototype._removeKeydownListener = function () {
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Popover.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Popover.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Popover.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            this.isVisible()) {
            this.hide();
        }
    };
    Popover.prototype.isVisible = function () {
        return this._visible;
    };
    Popover.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
        this._options.onToggle(this);
    };
    Popover.prototype.show = function () {
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        // handle click outside
        this._setupClickOutsideListener();
        // handle esc keydown
        this._setupKeydownListener();
        // Update its position
        this._popperInstance.update();
        // set visibility to true
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Popover.prototype.hide = function () {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        // handle click outside
        this._removeClickOutsideListener();
        // handle esc keydown
        this._removeKeydownListener();
        // set visibility to false
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Popover.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Popover.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Popover.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Popover;
}());
export function initPopovers() {
    document.querySelectorAll('[data-popover-target]').forEach(function ($triggerEl) {
        var popoverID = $triggerEl.getAttribute('data-popover-target');
        var $popoverEl = document.getElementById(popoverID);
        if ($popoverEl) {
            var triggerType = $triggerEl.getAttribute('data-popover-trigger');
            var placement = $triggerEl.getAttribute('data-popover-placement');
            var offset = $triggerEl.getAttribute('data-popover-offset');
            new Popover($popoverEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                offset: offset ? parseInt(offset) : Default.offset,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
            });
        }
        else {
            console.error("The popover element with id \"".concat(popoverID, "\" does not exist. Please check the data-popover-target attribute."));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Popover = Popover;
    window.initPopovers = initPopovers;
}
export default Popover;
//# sourceMappingURL=index.js.map