import { outsideClick } from './src/index'; 

describe('outsideClick', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="testElement"></div>';
    });
    it('should call onOutsideClick when clicking outside the specified element', done => {
        const elementId = 'testElement';
        const onOutsideClick = jest.fn();

        outsideClick(elementId, onOutsideClick);

        setTimeout(() => {
            const outsideElement = document.body;
            const clickEvent = new MouseEvent('click', { bubbles: true });
            outsideElement.dispatchEvent(clickEvent);
    
            expect(onOutsideClick).toHaveBeenCalled();
    
            outsideElement.dispatchEvent(clickEvent);
            expect(onOutsideClick).toHaveBeenCalledTimes(1); 
    
            done();
        }, 1000); 
    });
});