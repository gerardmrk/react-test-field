# Yet Another ReactJS Component Playground <3

## Features:
1. Live browser reloading with Browser-Sync.
2. CSS-preprocessing and minifying with Sass and Minify-CSS.
3. Grid Layout with Susy-Sass and Breakpoint Handling with Breakpoint-Sass.
4. ES6 & JSX compatibility with Babelify.
5. Bundling with Browserify.
6. Linting with EsLint and Babel-EsLint (If you're using Atom Text Editor).

## Initialization:
1. Clone repo into directory.
2. Run `npm install`, `bower install` and `gulp`.
3. Open up your text editor.
4. Play!

### Example:

```
cd ~/Documents/DevWorkspace/ && git clone git@github.com:gerardmrk/react-test-field.git ReactTestField && cd ReactTestField && npm install && atom . && gulp
```

## Instructions:

1. Your Parent Component is main.jsx in TESTFIELD/. Your child components can be placed in TESTFIELD/components.
  * The main React.render method is in app/assets/scripts/app.jsx, in case you need to modify it directly.
  * Reminder: Don't forget to import/require React at the start of each component's JS file!

2. Feel free to add CSS styles inside the components itself.
  * The main SCSS file is in app/assets/styles/butter.scss, in case you want to modify it directly.
  * Uncomment the RESET section in the main SCSS file if you'd like to implement reset.css.
  * Default layout is 12 grids (Initialised in the main file). Use the span keyword to indicate how many columns your component should take up (refer to susy-sass docs).
  * You probably don't actually need Breakpoint-sass. I just added it in for completeness-sake. I'm weird.

3. Feel free to delete or modify .eslintrc and .eslintignore if you're not using Atom.
  * Caution: If you're planning on using the eslintrc rules to lint your file, note that it is very ES6-centric (if that's the word I'm supposed to use). Feel free to disable the ES6 rules or tone down the rules' warnings.


## Things to fix:
1. Currently, while the browser-reload for scss file modification happens almost instantaneously, it takes a few seconds for the browser to automatically reload after every saved changes to your JSX files. It's probably to do with the fact that it has to uglify every time it's changed. You can remove that part in the Gulpfile if you like.
