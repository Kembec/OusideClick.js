import { outsideClick } from './src/index';

describe('outsideClick', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="testElement"></div>';
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should call onOutsideClick when clicking outside the specified element', () => {
        const elementId = 'testElement';
        const onOutsideClick = jest.fn();

        outsideClick(elementId, onOutsideClick);

        jest.advanceTimersByTime(0);

        const outsideElement = document.body;
        const mouseDownEvent = new MouseEvent('pointerdown', { bubbles: true });
        // @ts-ignore
        window.PointerEvent = class extends MouseEvent {
            constructor(type: string, eventInitDict: MouseEventInit) {
                super(type, eventInitDict);
            }
        };
        outsideElement.dispatchEvent(mouseDownEvent);

        expect(onOutsideClick).toHaveBeenCalled();

        outsideElement.dispatchEvent(mouseDownEvent);
        expect(onOutsideClick).toHaveBeenCalledTimes(1);
    });

    it('should call onOutsideClick when touchstart outside the specified element', () => {
        const elementId = 'testElement';
        const onOutsideClick = jest.fn();

        outsideClick(elementId, onOutsideClick);

        jest.advanceTimersByTime(0);

        const outsideElement = document.body;
        const touchStartEvent = new TouchEvent('touchstart', { bubbles: true });
        outsideElement.dispatchEvent(touchStartEvent);

        expect(onOutsideClick).toHaveBeenCalled();

        outsideElement.dispatchEvent(touchStartEvent);
        expect(onOutsideClick).toHaveBeenCalledTimes(1);
    });
});
