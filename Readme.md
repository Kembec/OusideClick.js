# OutsideClick.js

## Description

`OutsideClick.js` is a JavaScript library that provides a simple way to handle clicks outside of a specified element. This is particularly useful for modal dialogs, dropdowns, and other components where you want to detect interaction outside the component to close or modify its state.

## Installation

You can install the library via npm:

```bash
npm install @kembec/outside-click-js
```

## Usage

Import the `outsideClick` function from the library, specify the element ID, the callback function for outside clicks, and an optional timeout to delay the event handling. This is useful in scenarios where you may want to ensure that the DOM has completed certain updates or animations before attaching the event listener.

```javascript
import { outsideClick } from '@kembec/outside-click-js';

outsideClick('myElementId', () => {
    console.log('Clicked outside the specified element!');
}, 500); // The event handler will be attached after a 500 ms delay.
```


## Contributing

Contributions are welcome! If you'd like to help improve this plugin, please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/Kembec/OusideClick.js.git).

## License

This plugin is available under the AGPL-3.0 license. For more information, please refer to the LICENSE file in the repository.
