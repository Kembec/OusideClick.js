function outsideClick(elementId: string, onOutsideClick: () => void, timeout: number = 0): void {
	const handleOutsideClick = (event: MouseEvent) => {
		const specifiedElement = document.getElementById(elementId);
		
		if (specifiedElement && !specifiedElement.contains(event.target as Node)) {
			onOutsideClick();
			document.removeEventListener("click", handleOutsideClick); 
		}
	};

	setTimeout(() => document.addEventListener("click", handleOutsideClick), timeout);
}

export { outsideClick };
