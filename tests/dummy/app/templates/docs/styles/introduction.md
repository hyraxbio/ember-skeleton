# Introduction

The styles are implemented using `SASS`, and thus the `ember-cli-sass` addon is required. Install by running `ember install ember-cli-sass`.

There are to stylesheets which need to be imported in `app/styles/app.scss`.

{{docs-snippet name="basic-style-imports.scss" language="css"}}

## Overriding SASS variables

All variables listed in `app/styles/ember-skeleton/variables` can be overridden. This must be done before the import of `ember-skeleton-variables` in `app.scss`.

{{docs-snippet name="overriding-default-scss-vars.scss" language="css"}}

## Boostrap integration

Bootstrap is used heavily, but not completely. The following components are used from Boostrap 4.1. Please see the linked Boostrap docs for usage.

### Bootstrap components

* [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/)
* [Badge](https://getbootstrap.com/docs/4.1/components/badge/)
* [Buttons](https://getbootstrap.com/docs/4.1/components/buttons/)
* [List group](https://getbootstrap.com/docs/4.1/components/list-group/)

### Bootstrap utilities

* [Borders and border radius](https://getbootstrap.com/docs/4.1/utilities/borders/)
* [Colours](https://getbootstrap.com/docs/4.1/utilities/colors/)