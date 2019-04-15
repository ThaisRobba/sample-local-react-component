# Sample React component for local reuse

This is a simple component that can be used as a baseline for integration with ReactJS projects. In essence, all we do is transpile the code without bundling React, letting the upper layer of the stack control which version is used.

This has, of course, some caveats:

- Bottom stack layer has to be reasonably up to date with frontend stack versions
- Debugging can vary between projects due to version differences

## Setup

- Clone this repository
- `cd` into its folder
- Run `npm link`
- On projects that will use this component, be sure to run `npm link sample-component` (this will be the folder name)

## Usage

- Run `npm run transpile` - this will transpile code and watch for changes.
- On the project that is using this component, import it as if it was a regular node_module, like in the example below:

        // src/components/otherComponent.js
        import SampleComponent from 'sample-component';

        const otherComponent = () => <SampleComponent/>;

        export default otherComponent;
