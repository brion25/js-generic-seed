# Generic seed for JS based projects

This seed uses all the generic tools needed to work either with ES6 or ES5 on the Browser. There Are no preference of frameworks, you can adapt this seed either to Angular or React.

## Tools to use
- `gulp` -> main task manager
- `browserify` -> Bundler tool, now it's configured just to handle ES6 presets, but it can be configured to use React or another presets
- `babel` -> Main transpiler, this is the tool wich "translates" ES6 into ES5
- `tape` -> Test tool
- `istanbul` -> Coverage tool
- `plato` -> Complexity tool

## Steps use it
1. Clone the repo and go to the folder:
   ```
   git clone https://github.com/brion25/js-generic-seed.git
   cd js-generic-seed
   ```
2. Install the dependencies
   ```
   npm install
   ```
3. Run `gulp`
   ```
   npm run gulp
   ```
   **NOTE**: I'm nos running `gulp` as we normally run it, because this seed it's configured to work without any global dependency, but you can install `gulp` globally using the command:
   ```
   npm install -g gulp
   ```
   Now you can run the tasks separately, You can see the available tasks at the top of the output:

![Available Tasks](https://raw.githubusercontent.com/brion25/js-generic-seed/master/assets/available.tasks.PNG)
