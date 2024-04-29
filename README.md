# Arch-Ease
ArchEase is a web app revolutionizing construction planning. ArchEase provides affordable and accessible architectural design tools, empowering individuals to create safe, efficient building plans without relying on costly architects.
*Arch-Ease* is a [React][react] component which can be used to draw model buildings. Drag & drop from a catalog of customizable and ready-to-use objects, you can start from 2D wireframes and land on 3D models. As a developer you can provide your users with new objects by adding them to the catalog.

[![npm][npm_label]][npm_link]
![javascript][js]
![react-version][react_version]

## Demo

[Demo][demo]

![image](https://github.com/Arch-Ease/web/assets/72194471/2c1491b0-3e3a-493f-bed4-2f542b46800e)


## Usage

``` es6
import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//download this demo catalog https://github.com/cvdlab/Arch-Ease/tree/master/demo/src/catalog
import MyCatalog from './catalog/mycatalog';

import {
  Models as PlannerModels,
  reducer as PlannerReducer,
  ReactPlanner,
  Plugins as PlannerPlugins,
} from 'Arch-Ease';


//define state
let AppState = Map({
  'Arch-Ease': new PlannerModels.State()
});

//define reducer
let reducer = (state, action) => {
  state = state || AppState;
  state = state.update('Arch-Ease', plannerState => PlannerReducer(plannerState, action));
  return state;
};

let store = createStore(reducer, null, window.devToolsExtension ? window.devToolsExtension() : f => f);

let plugins = [
  PlannerPlugins.Keyboard(),
  PlannerPlugins.Autosave('Arch-Ease_v0'),
  PlannerPlugins.ConsoleDebugger(),
];

//render
ReactDOM.render(
  (
    <Provider store={store}>
      <ReactPlanner
        catalog={MyCatalog}
        width={800}
        height={600}
        plugins={plugins}
        stateExtractor={state => state.get('Arch-Ease')}
      />
    </Provider>
  ),
  document.getElementById('app')
);

```

## Docs

- [Create a Property](docs/HOW_TO_CREATE_A_PROPERTY.md)
- [Create a Catalog](docs/HOW_TO_CREATE_A_CATALOG.md)
- [Create a Catalog's Element](docs/HOW_TO_CREATE_AN_ELEMENT.md)

## Authors

- [Mudit Sharma](https://github.com/chrvadala)
- [Vedansh Nigam](https://github.com/vednig)
- [Saurav Sudhakar](https://github.com/GeekNinja24)
- [Mehak Chabra](https://github.com/mehakchabra)
- [Abhishek]()

Developed @ VIT Bhopal

## Contributing

Your contributions (issues and pull request) are very appreciated!

## License

MIT

[react]: https://facebook.github.io/react/
[npm_label]: https://img.shields.io/npm/v/Arch-Ease.svg?maxAge=2592000?style=plastic
[npm_link]: https://www.npmjs.com/package/Arch-Ease
[js]: https://img.shields.io/badge/javascript-ES6-fbde34.svg
[react_version]: https://img.shields.io/badge/react%20version-16.0.0%20or%20later-61dafb.svg
[preview_image]: https://raw.githubusercontent.com/cvdlab/Arch-Ease/master/preview.png
"# web" 
