function outsideClick(elementId: string, onOutsideClick: () => void, timeout: number = 0): void {
    const handleOutsideClick = (event: Event) => {
        const specifiedElement = document.getElementById(elementId);
        if (specifiedElement && !specifiedElement.contains(event.target as Node)) {
            onOutsideClick();
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        }
    };
    setTimeout(() => {
        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);
    }, timeout);
}

export { outsideClick };
