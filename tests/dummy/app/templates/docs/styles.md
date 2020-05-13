# Styles

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

## Theme colours

A map of theme colours colours in the `$theme-colors` variable. This is borrowed from Bootstrap.

{{docs-snippet name="default-bootstrap-colours.scss" language="sass"}}

### Theme color CSS selectors

The Ember Skeleton `SASS` code will create multiple CSS style rules for each of the selectors listed below- one for each item in the `$theme-colors` map. Each rule will apply the colour in the appropriate way.

    .alert-*
    .badge-*
    .bg-*
    .text-*
    .list-group-item-*
    .fill-*
    .stroke-*
    .btn-*
    .btn-outline-*

### Text colours 

{{#docs-demo as |demo|}}
  {{#demo.example name="text-colour-variants.hbs"}}
    <div class="text-primary">text-primary</div>
    <div class="text-secondary">text-secondary</div>
    <div class="text-success">text-success</div>
    <div class="text-info">text-info</div>
    <div class="text-warning">text-warning</div>
    <div class="text-danger">text-danger</div>
    <div class="text-light">text-light</div>
    <div class="text-dark">text-dark</div>
    <div class="text-gray-extra-light">text-gray-extra-light</div>
    <div class="text-gray-light">text-gray-light</div>
    <div class="text-gray-medium">text-gray-medium</div>
    <div class="text-gray-dark">text-gray-dark</div>
    <div class="text-white">text-white</div>
  {{/demo.example}}
  {{demo.snippet "text-colour-variants.hbs"}}
{{/docs-demo}}

### Badges

Taken from [Bootstrap badge](https://getbootstrap.com/docs/4.1/components/badge/)

{{#docs-demo as |demo|}}
  {{#demo.example name="badge-colour-variants.hbs"}}
    <div class="badge badge-primary">badge-primary</div>
    <div class="badge badge-secondary">badge-secondary</div>
    <div class="badge badge-success">badge-success</div>
    <div class="badge badge-info">badge-info</div>
    <div class="badge badge-warning">badge-warning</div>
    <div class="badge badge-danger">badge-danger</div>
    <div class="badge badge-light">badge-light</div>
    <div class="badge badge-dark">badge-dark</div>
    <div class="badge badge-gray-extra-light">badge-gray-extra-light</div>
    <div class="badge badge-gray-light">badge-gray-light</div>
    <div class="badge badge-gray-medium">badge-gray-medium</div>
    <div class="badge badge-gray-dark">badge-gray-dark</div>
    <div class="badge badge-white">badge-white</div>
  {{/demo.example}}
  {{demo.snippet "badge-colour-variants.hbs"}}
{{/docs-demo}}

### Alerts

Taken from [Booststrap alerts](https://getbootstrap.com/docs/4.1/components/alerts/)

{{#docs-demo as |demo|}}
  {{#demo.example name="alert-colour-variants.hbs"}}
    <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
    <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
    <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
    <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
    <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
    <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
    <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
    <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
    {{/demo.example}}
  {{demo.snippet "alert-colour-variants.hbs"}}
{{/docs-demo}}

### Buttons

Taken from [Bootstrap buttons](https://getbootstrap.com/docs/4.1/components/buttons/).

The `.btn` class applies general button styles, and `btn-{{theme-color}}` or `btn-outline-{{theme-color}}` applies a theme colour. The class `flashing` will cause the button to flash between outline state to normal state.

{{#docs-demo as |demo|}}
  {{#demo.example name="button-colour-variants.hbs"}}
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
    {{/demo.example}}
  {{demo.snippet "button-colour-variants.hbs"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="button-outline-colour-variants.hbs"}}
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
  {{/demo.example}}
  {{demo.snippet "button-outline-colour-variants.hbs"}}
{{/docs-demo}}

Adding the class `flashing` will cause the button to chnage between normal and outline state.

{{#docs-demo as |demo|}}
  {{#demo.example name="flashing-button.hbs"}}
    <button class="btn btn-primary flashing">Flashing button</button>
  {{/demo.example}}
  {{demo.snippet "flashing-button.hbs"}}
{{/docs-demo}}

### List groups

#### Basic usage

{{#docs-demo as |demo|}}
  {{#demo.example name="list-group-general"}}
    <div class="list-group list-group">
      <div class="list-group-item">.list-group-item</div>
      <div class="list-group-item list-group-item-action" role="button">.list-group-item.list-group-item-action</div>
      <div class="list-group-item list-group-item-action active" role="button">.list-group-item.list-group-item-action.active</div>
      <div class="list-group-item list-group-item-action disabled" role="button">.list-group-item.list-group-item-action.disabled</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "list-group-general"}}
{{/docs-demo}}

#### Flush

Removes the side borders.

{{#docs-demo as |demo|}}
  {{#demo.example name="list-group-flush"}}
    <div class="list-group list-group-flush">
      <div class="list-group-item">.list-group-flush .list-group-item</div>
      <div class="list-group-item">.list-group-flush .list-group-item</div>
      <div class="list-group-item">.list-group-flush .list-group-item</div>
      <div class="list-group-item">.list-group-flush .list-group-item</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "list-group-flush"}}
{{/docs-demo}}

#### List group with colour variants

{{#docs-demo as |demo|}}
  {{#demo.example name="list-group-colour-variants"}}
    <ul class="list-group">
      <li class="list-group-item list-group-item-action" role="button">.list-group-item.list-group-item-action</li>
      <li class="list-group-item list-group-item-action list-group-item-primary" role="button">.list-group-item.list-group-item-action.list-group-item-primary</li>
      <li class="list-group-item list-group-item-action list-group-item-secondary" role="button">.list-group-item.list-group-item-action.list-group-item-secondary</li>
      <li class="list-group-item list-group-item-action list-group-item-success" role="button">.list-group-item.list-group-item-action.list-group-item-success</li>
      <li class="list-group-item list-group-item-action list-group-item-danger" role="button">.list-group-item.list-group-item-action.list-group-item-danger</li>
      <li class="list-group-item list-group-item-action list-group-item-warning" role="button">.list-group-item.list-group-item-action.list-group-item-warning</li>
      <li class="list-group-item list-group-item-action list-group-item-info" role="button">.list-group-item.list-group-item-action.list-group-item-info</li>
      <li class="list-group-item list-group-item-action list-group-item-light" role="button">.list-group-item.list-group-item-action.list-group-item-light</li>
      <li class="list-group-item list-group-item-action list-group-item-dark" role="button">.list-group-item.list-group-item-action.list-group-item-dark</li>
    </ul>
  {{/demo.example}}
  {{demo.snippet "list-group-colour-variants"}}
{{/docs-demo}}

### List group header

The boostrap list group styles are extended by adding the class `.list-group-item-header` which applies the font weight defined the the variable `$list-group-header-font-weight`. The default is 600.

Custom colours can be added to this map, by defining your own `$theme-colors` map *before* importing `ember-skeleton-variables`.

{{docs-snippet name="adding-cutom-bootstrap-colours.scss" language="css"}}

{{#docs-demo as |demo|}}
  {{#demo.example name="badge-custom-colour-variants.hbs"}}
    <div class="badge badge-twitter">badge-twitter</div>
    <div class="badge badge-facebook">badge-facebook</div>
    <div class="badge badge-tripadvisor">badge-tripadvisor</div>
    <div class="badge badge-reddit">badge-reddit</div>
  {{/demo.example}}
  {{demo.snippet "badge-custom-colour-variants.hbs"}}
{{/docs-demo}}

## Borders 

Taken from [Bootstrap borders](https://getbootstrap.com/docs/4.1/utilities/borders/)
 
{{#docs-demo as |demo|}}
  {{#demo.example name="border-custom-colour-variants"}}
    <div class="border">.border</div>
    <div class="border border-primary">.border.border-primary</div>
    <div class="border border-secondary">.border.border-secondary</div>
    <div class="border border-success">.border.border-success</div>
    <div class="border border-danger">.border.border-danger</div>
    <div class="border border-warning">.border.border-warning</div>
    <div class="border border-info">.border.border-info</div>
    <div class="border border-light">.border.border-light</div>
    <div class="border border-dark">.border.border-dark</div>
    <div class="border border-white">.border.border-white</div>
   {{/demo.example}}
  {{demo.snippet "border-custom-colour-variants"}}
{{/docs-demo}} 

## Border radius

Taken from [Bootstrap border radius](https://getbootstrap.com/docs/4.1/utilities/borders/)

{{#docs-demo as |demo|}}
  {{#demo.example name="border-radius"}}
      <div class="rounded">.rounded</div>
      <div class="rounded-top">.rounded-top</div>
      <div class="rounded-right">.rounded-right</div>
      <div class="rounded-bottom">.rounded-bottom</div>
      <div class="rounded-left">.rounded-left</div>
      <div class="rounded-circle">.rounded-circle</div>
      <div class="rounded-0">.rounded-0</div>
   {{/demo.example}}
  {{demo.snippet "border-radius" language="htmlbars"}}
{{/docs-demo}} 

### Bootstrap YIQ threshold

Some bootstrap components apply bootstrap colours tot he backgrounds of elements that will have text in theme- for example `.badge-*` and `.btn-*`. In order for such text to remain readable, it may need to be dark in some cases, and light in others.

Note that the Tripadvisor badge has dark text above, while the Reddit badge has white text.

Both a light and dark text color are defined by the `$yiq-text-dark` and `$yiq-text-light` variables.

The `$yiq-contrasted-threshold` variable is a measure of when a colour is light enough to require dark text on top of it. It can be anything from 0 to 255. The default is 160.

The higher this value is, the lighter a background is allowed to be, while still maintaining light text on top of it. Att 255 text will always be white, and at 0, text will always be dark.

## Boostrap extensions

### Overlay colours

Provides a set of classes that apply either a fill or background to an element in `RGBa` format, thus allowing transparency. The defaults provide both black and white at levels 10, 30 and 50. These numbers refer to percentage opacity. The classes are as follows:

    overlay-bg-white-10, overlay-bg-white-30, overlay-bg-white-50, overlay-bg-black-10, overlay-bg-black-30, overlay-bg-black-50

    overlay-fill-white-10, overlay-fill-white-30, overlay-fill-white-50, overlay-fill-black-10, overlay-fill-black-30, overlay-fill-black-50

{{#docs-demo as |demo|}}
  {{#demo.example name="overlay-colours-black"}}
    <div class="overlay-bg-black-10">.overlay-bg-black-10</div>
    <div class="overlay-bg-black-30">.overlay-bg-black-30</div>
    <div class="overlay-bg-black-50">.overlay-bg-black-50</div>
  {{/demo.example}}
  {{demo.snippet "overlay-colours-black"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="overlay-colours-white"}}
    <div class="overlay-bg-white-10">.overlay-bg-white-10</div>
    <div class="overlay-bg-white-30">.overlay-bg-white-30</div>
    <div class="overlay-bg-white-50">.overlay-bg-white-50</div>
  {{/demo.example}}
  {{demo.snippet "overlay-colours-white"}}
{{/docs-demo}}

The `$overlay-colors` map can be extended in a similar way to `$theme-colors`. Additionally, you can customise the levels that are included. Note the the colours must be defined in `RGB` format.

{{docs-snippet name="custom-overlay-colors.scss" language="css"}}

{{#docs-demo as |demo|}}
  {{#demo.example name="custom-overlay-colours"}}
    <div class="overlay-bg-green-10">.overlay-bg-green-10</div>
    <div class="overlay-bg-green-30">.overlay-bg-green-30</div>
    <div class="overlay-bg-green-50">.overlay-bg-green-50</div>
    <div class="overlay-bg-green-80">.overlay-bg-green-80</div>
    <div class="overlay-bg-red-10">.overlay-bg-red-10</div>
    <div class="overlay-bg-red-30">.overlay-bg-red-30</div>
    <div class="overlay-bg-red-50">.overlay-bg-red-50</div>
    <div class="overlay-bg-red-80">.overlay-bg-red-80</div>
    <div class="overlay-bg-blue-10">.overlay-bg-blue-10</div>
    <div class="overlay-bg-blue-30">.overlay-bg-blue-30</div>
    <div class="overlay-bg-blue-50">.overlay-bg-blue-50</div>
    <div class="overlay-bg-blue-80">.overlay-bg-blue-80</div>
  {{/demo.example}}
  {{demo.snippet "custom-overlay-colours"}}
{{/docs-demo}}

### Fill and stroke colours

The Bootstap theme colours have are extended to incldue `fill` and `stroke`, for application to SVGs.

{{#docs-demo as |demo|}}
  {{#demo.example name="circle-svg.hbs"}}
     <svg class="fill-gray-medium stroke-secondary" height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke-width="3" />
    </svg> 
  {{/demo.example}}
  {{demo.snippet "circle-svg.hbs"}}
{{/docs-demo}}

## Flexbox styles

There are flexbox related classes defined in `ember-skeleton/app/styles/layout/flex-layouts.scss`.



## Overriding fill and stroke for elements inside an svg

Note the following variables:

    $svg-foreground-graphic-fill
    $svg-foreground-graphic-stroke-color

By adding the class `foreground-graphic` to any element inside an svg, the fill and stoke colours will be whatever the corresponding variables are set to (Default is `#fff`). 

## Spacers

The SASS API allows you to define spacers, which are used to generate various classes. The defaults are:

{{docs-snippet name="default-spacers.scss" language="sass"}}

A version of each class listed below is generated for each defined spacer.

    padding-{{spacer}}
    padding-y-{{spacer}}
    padding-x-{{spacer}}
    padding-top-{{spacer}}
    padding-right-{{spacer}}
    padding-bottom-{{spacer}}
    padding-left-{{spacer}}

    margin-{{spacer}}
    margin-y-{{spacer}}
    margin-x-{{spacer}}
    margin-top-{{spacer}}
    margin-right-{{spacer}}
    margin-bottom-{{spacer}}
    margin-left-{{spacer}}

    height-{{spacer}}
    width-{{spacer}}

    max-height-{{spacer}}
    max-width-{{spacer}}

### Padding examples

The padding is represented by the darker grey areas in the examples below.

{{#docs-demo class="test" as |demo|}}
  {{#demo.example name="padding-xxl.hbs" class="padding-examples"}}
    <div class="padding-xxl">
      <div>padding-xxl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-xxl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-md.hbs" class="padding-examples"}}
    <div class="padding-md">
      <div>padding-md</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-md.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-x-xl.hbs" class="padding-examples"}}
    <div class="padding-x-xl">
      <div>padding-x-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-x-xl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-y-xl.hbs" class="padding-examples"}}
    <div class="padding-y-xl">
      <div>padding-y-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-y-xl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-left-xl.hbs" class="padding-examples"}}
    <div class="padding-left-xl">
      <div>padding-left-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-left-xl.hbs" }}
{{/docs-demo}}

### Margin examples

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-xl.hbs" class="margin-examples"}}
    <div class="margin-xl">margin-xl</div>
    <div class="margin-xl">margin-xl</div>
    <div class="margin-xl">margin-xl</div>
  {{/demo.example}}
  {{demo.snippet "margin-xl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-sm.hbs" class="margin-examples"}}
    <div class="margin-sm">margin-sm</div>
    <div class="margin-sm">margin-sm</div>
    <div class="margin-sm">margin-sm</div>
  {{/demo.example}}
  {{demo.snippet "margin-sm.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-x-lg.hbs" class="margin-examples"}}
    <div class="margin-x-lg">margin-x-lg</div>
    <div class="margin-x-lg">margin-x-lg</div>
    <div class="margin-x-lg">margin-x-lg</div>
  {{/demo.example}}
  {{demo.snippet "margin-x-lg.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-y-lg.hbs" class="margin-examples vertical"}}
    <div class="margin-y-lg">margin-y-lg</div>
    <div class="margin-y-lg">margin-y-lg</div>
    <div class="margin-y-lg">margin-y-lg</div>
  {{/demo.example}}
  {{demo.snippet "margin-y-lg.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-bottom-lg-margin-right-lg.hbs" class="margin-examples"}}
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
    <div class="margin-bottom-lg margin-right-lg">margin-bottom-lg margin-right-lg</div>
  {{/demo.example}}
  {{demo.snippet "margin-bottom-lg-margin-right-lg.hbs" }}
{{/docs-demo}}

### Height, width, max-width and max-height examples

{{#docs-demo as |demo|}}
  {{#demo.example name="height-width-max-height-max-width.hbs" class="height-width-demo"}} 
      <div class="max-width-xxl height-xxl"></div>
  {{/demo.example}}
  {{demo.snippet "height-width-max-height-max-width.hbs" }}
{{/docs-demo}}

### Extending spacers

Add additional spacers to the `$spacers` map in your `scss` code, *before* you import `ember-skeleton-variables`, and ten use in your templates as shown below.

{{#docs-demo as |demo|}}
  {{#demo.example name="extending-spacers.hbs" class="height-width-demo"}}
    <div class="padding-xxxl">
      <div class="height-xxxxl width-xxxxl"></div>
    </div>
  {{/demo.example}}
  {{demo.snippet "extending-spacer-values.scss" label="scss"}}
  {{demo.snippet
    "extending-spacers.hbs"
    label="hbs"
    language="htmlbars"
  }}
{{/docs-demo}}


### Additional spacing classes

    margin-0

Sets margin to 0

    padding-0

Sets padding to 0

    width-100

Sets width to 100%

    last-child-margin-bottom-0

Sets bottom margin to 0, if the element is the past child.

{{#docs-demo as |demo|}}
  {{#demo.example name="last-child-margin-bottom.hbs" class="last-child-margin-bottom-0-demo"}}
    <div> 
      <div class="margin-bottom-xl last-child-margin-bottom-0">margin-bottom-xl last-child-margin-bottom-0</div>
      <div class="margin-bottom-xl last-child-margin-bottom-0">margin-bottom-xl last-child-margin-bottom-0</div>
      <div class="margin-bottom-xl last-child-margin-bottom-0">margin-bottom-xl last-child-margin-bottom-0</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "last-child-margin-bottom.hbs"}}
{{/docs-demo}}

## Text 

### Font size on the body elemnet

Note that the `font-size` of the `body` element is hard coded to `62.5%` so that within the body element, `1em = 10px`. This makes it easy to use the superior `em` units to size fonts, while thinking of font sizes in pixels.

### Customising text

Any of the variables defined in `ember-skeleton/app/styles/ember-skeleton/variables/_text.scss` can be overriden to customise text design. All overrides must happen before you import `ember-skeleton-variables` in your `scss`.

### Body text

The `.body-text` class defines styles for the text that falls in the primary content areas of your layouts. This would typically exclude the header, footer and sidebar layouts, as you will likely want to style the text in these elements individually.

The `.body-text` class will be applied to any content wrapped in the `ember-skeleton/content-wrapper` component (See layouts), but the class can be added to any element. See `ember-skeleton/app/styles/ember-skeleton/generic/_text.scss` to see all elements that are affected when they are descendants of `.body-text`.

### Text align

The following classes apply the corresponding value to the `text-align` property.

    .text-align-left
    .text-align-center
    .text-align-right
    .text-align-justify

### Text smaller and text larger 

Default values (These can be overriden before importing `ember-skeleton-variables` in your scss.)

    $text-smaller-size: 0.9em !default;
    $text-larger-size: 1.2em !default;

In addition, the `.text-smaller` and `.text-larger` classes 

### Text column class

This class is added for use with long form text blocks, so that such blocks can be styled for maximum readability. The following variables can be overriden before importing `ember-skeleton-variables`.

{{docs-snippet name="text-column-variables.scss"}}

Note that `$text-column-justify-paragraph-min-width` defines the minimum screen width at which paragraphs inside `.text-column` must have their `text-align` property overridden to `justify`. If `null` the paragraphs will not have their `text-align` property overridden.

## Links

### no-underline class

If the class `no-underline` is added to any `a` element, it will not be underlined,in both normal or hover state.

### Faux link class 

The `.faux-link` class will apply all link styles to the element.

## Material design

### Card box shadow

{{#docs-demo as |demo|}}
  {{#demo.example name="card-box-shaow-default.scss" class="card-box-shadow-example"}}
    <div class="card-box-shadow">
      .card-box-shadow
    </div>
    <div class="card-box-shadow card-box-shadow-hover-effect">
      .card-box-shadow.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-2 card-box-shadow-hover-effect">
      .card-box-shadow.card-box-shadow-level-2.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-3 card-box-shadow-hover-effect">
      .card-box-shadow.card-box-shadow-level-3.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-4 card-box-shadow-hover-effect">
      .card-box-shadow.card-box-shadow-level-4.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-5 card-box-shadow-hover-effect">
      .card-box-shadow.card-box-shadow-level-5.card-box-shadow-hover-effect
    </div>
  {{/demo.example}}
  {{demo.snippet "card-box-shaow-default.scss"}}
{{/docs-demo}}

## Box arrows

Adds an arrow to a box. The examples below show all the available combinations of arrow direction and position.

{{#docs-demo as |demo|}}
  {{#demo.example name="box-arrows.scss" class="box-arrow-example"}}
      <div class="box-arrow arrow-direction-up arrow-position-left">
        .box-arrow.arrow-direction-up.arrow-position-left
      </div>
      <div class="box-arrow arrow-direction-up arrow-position-right">
        .box-arrow.arrow-direction-up.arrow-position-right
      </div>
      <div class="box-arrow arrow-direction-left arrow-position-top">
        .box-arrow.arrow-direction-left.arrow-position-top
      </div>
      <div class="box-arrow arrow-direction-left arrow-position-bottom">
        .box-arrow.arrow-direction-left.arrow-position-bottom
      </div>
      <div class="box-arrow arrow-direction-down arrow-position-right">
        .box-arrow.arrow-direction-down.arrow-position-right
      </div>
      <div class="box-arrow arrow-direction-down arrow-position-left">
        .box-arrow.arrow-direction-down.arrow-position-left
      </div>
      <div class="box-arrow arrow-direction-right arrow-position-bottom">
        .box-arrow.arrow-direction-right.arrow-position-bottom
      </div>
      <div class="box-arrow arrow-direction-right arrow-position-top">
        .box-arrow.arrow-direction-right.arrow-position-top
      </div>
    {{/demo.example}}
  {{demo.snippet "box-arrows.scss"}}
{{/docs-demo}}

By default, the arrow fill will be white, but if the element in question has any of the theme colours applied as a backgroud, the arrow fill will take in that colour.

{{#docs-demo as |demo|}}
  {{#demo.example name="box-arrows-bg.hbs" class="box-arrow-bg-example"}}
      <div class="box-arrow arrow-direction-up arrow-position-left bg-success">
        .box-arrow.arrow-direction-up.arrow-position-left.bg-success
      </div>
      <div class="box-arrow arrow-direction-up arrow-position-right bg-warning">
        .box-arrow.arrow-direction-up.arrow-position-right.bg-warning
      </div>
    {{/demo.example}}
  {{demo.snippet "box-arrows-bg.hbs"}}
{{/docs-demo}}

# Spinner

Any element with the classes `.spinner.on` will have a spinning animation.

{{#docs-demo as |demo|}}
  {{#demo.example name="spinning-badge.hbs"}}
      <div class="spinner on badge badge-success">
        .spinner.on
      </div>
    {{/demo.example}}
  {{demo.snippet "spinning-badge.hbs"}}
{{/docs-demo}}

# Miscellaneous classes

    .inline-block

Applies `display: inline-block` to the element.

    .position-relative

Applies `position: relative` to the element.

    .hidden

Applies `display: none` to the element.

    .bg-transparent

Applies `background-color: transparent` to the element.

    .hover-pointer 

The cursor will be a pointer on hover of the element.

    .monospace
  
Applies the font family assigned to the `$monospace-font-family` variable to the element. The default value is `"Lucida Console", Monaco, "Courier New", Courier, monospace`.

# Other

All elements have `box-sizing: border-box`.

All elements with `role="button"` will have `cursor: pointer` in hover state.


## Mixins

The following mixins can be called from anywhere in your `SASS` code _after_ importing `ember-skeleton-variables`.

### Box shadow

The `box-shadow` mixin accepts two arguments- the position and opacity.

The default opacity is `0.16`.

There are 12 positions available:

{{#docs-demo as |demo|}}
  {{#demo.example name="box-shadow-mixin-examples.hbs"}}
    <div class="box-shadow-demo-top padding-lg margin-y-xl border">
      <code>@include .box-shadow(top)</code>
    </div>
    <div class="box-shadow-demo-bottom padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottom)</code>
    </div>
    <div class="box-shadow-demo-left padding-lg margin-y-xl border">
      <code>@include .box-shadow(left)</code>
    </div>
    <div class="box-shadow-demo-right padding-lg margin-y-xl border">
      <code>@include .box-shadow(right)</code>
    </div>
    <div class="box-shadow-demo-topInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(topInset)</code>
    </div>
    <div class="box-shadow-demo-bottomInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottomInset)</code>
    </div>
    <div class="box-shadow-demo-leftInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(leftInset)</code>
    </div>
    <div class="box-shadow-demo-rightInset padding-lg margin-y-xl border">
      <code>@include .box-shadow(rightInset)</code>
    </div>
    <div class="box-shadow-demo-bottomRight padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottomRight)</code>
    </div>
    <div class="box-shadow-demo-topRight padding-lg margin-y-xl border">
      <code>@include .box-shadow(topRight)</code>
    </div>
    <div class="box-shadow-demo-bottomLeft padding-lg margin-y-xl border">
      <code>@include .box-shadow(bottomLeft)</code>
    </div>
    <div class="box-shadow-demo-topLeft padding-lg margin-y-xl border">
      <code>@include .box-shadow(topLeft)</code>
    </div>
  {{/demo.example}}
  {{demo.snippet "box-shadow-mixin-usage.scss" label="scss"}}
  {{demo.snippet
    "box-shadow-mixin-examples.hbs"
    label="hbs"
    language="htmlbars"
  }}
{{/docs-demo}}

The mixin can be given a list of positions to add multiple box shadows to one element.

{{#docs-demo as |demo|}}
  {{#demo.example name="box-shadow-mixin-multiple-examples.hbs"}}
    <div class="box-shadow-demo-multiple padding-lg margin-y-xl border">
      <code>@include box-shadow(topInset, rightInset, bottomInset, leftInset);</code>
    </div>
    {{/demo.example}}
  {{demo.snippet "box-shadow-mixin-mutliple.scss" label="scss"}}
  {{demo.snippet
    "box-shadow-mixin-multiple-examples.hbs"
    label="hbs"
    language="htmlbars"
  }}
{{/docs-demo}}

Opacity can also be passed as the second argument. The default is `0.16`.

{{#docs-demo as |demo|}}
  {{#demo.example name="box-shadow-mixin-opacity-examples.hbs"}}
    <div class="box-shadow-demo-bottomRight-opacity-10 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.1);</code>
    </div>
    <div class="box-shadow-demo-bottomRight-opacity-30 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.3);</code>
    </div>
    <div class="box-shadow-demo-bottomRight-opacity-50 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.5);</code>
    </div>
    <div class="box-shadow-demo-bottomRight-opacity-70 padding-lg margin-y-xl border">
      <code>@include box-shadow(bottomRight, 0.7);</code>
    </div>
    {{/demo.example}}
  {{demo.snippet "box-shadow-mixin-opacity.scss" label="scss"}}
  {{demo.snippet
    "box-shadow-mixin-opacity-examples.hbs"
    label="hbs"
    language="htmlbars"
  }}
{{/docs-demo}}