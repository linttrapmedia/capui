
# The goal of this project is to create a css library for user interface components where:

## Languages
The entire project should only contain the followin languages:

1. html
1. css
1. bash

## Folder File Structure
The project folder structure should have this shape:

- lib
    - index.html (the main documentation file)
    - index.css (styles for the main documentation file)
    - components (folder containing the user interface components)
        - [COMPONENT_NAME] (a single user interface component)
            - manifest.json (a metadata file for the component)
            - [COMPONENT_NAME].html (documentation for the component)
            - [COMPONENT_NAME].css (css for the component)
            - [COMPONENT_NAME].js (js for the component)
- dist (the dist folder)
    - capui.zip (a zip of the lib)
    - [COMPONENT_NAME].zip (a zip per component)
- tasks (a folder for any shell scripts)
    - zip.sh (a shell script for zipping ./lib into ./dist/capui.zip)
- README.md (a simple breakdown of the project with links to the official docs at: capui.js.org)


## ./dist/index.html design

1. should be the main documentation file for the whole library
1. should have the following flow (from the top):
    1. The title (cap ui)
    1. A link to the github page (github.com/@linttrap/capui)
    1. A search bar for filtering a grid of components (described next) with a "download all" button (pointing to an unpkg link of a capui.zip file) for downloading the entire library
    1. A grid listing out the available components where each item is:
        1. A card
        1. has a title
        1. has a description
        1. has a button that:
            1. launches a dialog element that contains:
                1. The components documentation html file
        1. A download link that points to the unpkg url so users can download it directly
    1. A footer with links to http:linttrap.media
1. there should be only one index.css for all styles that apply to the index.html and:
    1. it should have styles and classes prefixed so that they do not interfere with the components
    1. use BEM syntax


## About the user interface components

1. user interface components are composed of standard html tags
1. there are user interface components common to most ui libraries such as Material UI, Bootstrap, etc.
1. the html is semantic
1. uses BEM syntax
1. all behaviors of a component are expressed as "states" tied to specific BEM modifiers
1. modern CSS features and techniques are used as much as possible
1. CSS variables are used extensively to make everything as confirgurable as possible
1. CSS variables are stored in a single file so configuration can be done in one place
1. CSS variables have inline docs to make it clear what they do
1. each user interface component: 
    1. is stored in a folder named after the component
    1. has a single .css file of all classes
    1. has a single .html file for documentation which includes:
        1. description
        1. properties
        1. usage
        1. fyi
        1. download button for the css
    1. has a manifest.json file with the name, description and basic info

