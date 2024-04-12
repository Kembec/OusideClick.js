"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outsideClick = void 0;
function outsideClick(elementId, onOutsideClick) {
    const handleOutsideClick = (event) => {
        const specifiedElement = document.getElementById(elementId);
        if (specifiedElement && !specifiedElement.contains(event.target)) {
            onOutsideClick();
            document.removeEventListener("click", handleOutsideClick);
        }
    };
    setTimeout(() => document.addEventListener("click", handleOutsideClick), 500);
}
exports.outsideClick = outsideClick;
