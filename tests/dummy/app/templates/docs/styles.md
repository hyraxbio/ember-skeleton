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

### Cutomising the default boostrap theme colours

By default, bootstrap includes a map of scss colours in the `$theme-colors` variable. See `app/styles/ember-skeleton/variables/_bootstrap-theme-colors.scss`. The default `$theme-colors` map includes the following colours: 

    "primary", "secondary", "success", "info", "warning", "danger", "light", "dark", "gray-extra-light", "gray-light", "gray-medium:, "gray-dark", "white"

When generating CSS, bootstrap will include a version of each of the classes below for each colour defined in `$theme-colors`:

    alert-*, badge-*, bg-*, text-*, list-group-item-*, fill-*, stroke-*, btn-*, btn-outline-*, 

For example, with the Boostrap text component, the following classes will be created. Bootstrap SCSS will apply the mapped colour as the colour of the text.

    text-primary, .text-secondary, .text-success, .text-info, .text-warning, .text-danger, .text-light, .text-dark, .text-gray-extra-light, .text-gray-light, .text-gray-medium, .text-gray-dark, .text-white

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

For a second example, with the Boostrap badge component, the following classes will be created. Bootstrap SCSS will apply the mapped colour as the background of the badge.

    badge-primary, .badge-secondary, .badge-success, .badge-info, .badge-warning, .badge-danger, .badge-light, .badge-dark, .badge-gray-extra-light, .badge-gray-light, .badge-gray-medium, .badge-gray-dark, .badge-white

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
  {{#demo.example name="overlay-colours.hbs"}}
    <div class="bg-secondary padding-md flex flex-wrap">
      <div class="overlay-bg-white-10 padding-lg rounded text-white margin-md">overlay-bg-white-10</div>
      <div class="overlay-bg-white-30 padding-lg rounded text-white margin-md">overlay-bg-white-30</div>
      <div class="overlay-bg-white-50 padding-lg rounded text-white margin-md">overlay-bg-white-50</div>
      <div class="overlay-bg-black-10 padding-lg rounded text-white margin-md">overlay-bg-black-10</div>
      <div class="overlay-bg-black-30 padding-lg rounded text-white margin-md">overlay-bg-black-30</div>
      <div class="overlay-bg-black-50 padding-lg rounded text-white margin-md">overlay-bg-black-50</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "overlay-colours.hbs"}}
{{/docs-demo}}

The `$overlay-colors` map can be extended in a similar way to `$theme-colors`. Additionally, you can customise the levels that are included. Note the the colours must be defined in `RGB` format.

{{docs-snippet name="custom-overlay-colors.scss" language="css"}}

{{#docs-demo as |demo|}}
  {{#demo.example name="custom-overlay-colours.hbs"}}
    <div class="bg-gray-extra-light padding-md flex flex-wrap">
      <div class="overlay-bg-green-10 padding-lg rounded margin-md">overlay-bg-green-10</div>
      <div class="overlay-bg-green-30 padding-lg rounded margin-md">overlay-bg-green-30</div>
      <div class="overlay-bg-green-50 padding-lg rounded margin-md">overlay-bg-green-50</div>
      <div class="overlay-bg-green-80 padding-lg rounded margin-md">overlay-bg-green-80</div>
      <div class="overlay-bg-red-10 padding-lg rounded text-white margin-md">overlay-bg-red-10</div>
      <div class="overlay-bg-red-30 padding-lg rounded text-white margin-md">overlay-bg-red-30</div>
      <div class="overlay-bg-red-50 padding-lg rounded text-white margin-md">overlay-bg-red-50</div>
      <div class="overlay-bg-red-80 padding-lg rounded margin-md">overlay-bg-red-80</div>
      <div class="overlay-bg-blue-10 padding-lg rounded text-white margin-md">overlay-bg-blue-10</div>
      <div class="overlay-bg-blue-30 padding-lg rounded text-white margin-md">overlay-bg-blue-30</div>
      <div class="overlay-bg-blue-50 padding-lg rounded text-white margin-md">overlay-bg-blue-50</div>
      <div class="overlay-bg-blue-80 padding-lg rounded margin-md">overlay-bg-blue-80</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "custom-overlay-colours.hbs"}}
{{/docs-demo}}

### Flashing buttons

Add the class `flashing` to any element with the `btn` and `btn-*` classes, and it will flash form outline state to normal state.

{{#docs-demo as |demo|}}
  {{#demo.example name="flashing-button.hbs"}}
    <button class="btn btn-primary flashing">Flashing button</button>
  {{/demo.example}}
  {{demo.snippet "flashing-button.hbs"}}
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

## Mixins

### Box shadow

The `box-shadow` mixin accepts two arguments- the position and opacity.

The default opacity is 0.16.

There are 9 positions available:

`top`, `bottom`, `left`, `right`, `topInset`, `bottomInset`, `leftInset`, `rightInset`, `bottomRight`

Add a single shadow with the default opacity.

`@include box-shadow(bottomRight);`

Multiple shadows can be added to one element, with a custom opacity.

`@include box-shadow((leftInset, topInset, bottom), 0.2);`

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

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-xxl.hbs"}}
    <div class="bg-gray-medium padding-xxl">
      <div class="bg-gray-extra-light">padding-xxl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-xxl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-md.hbs"}}
    <div class="bg-gray-medium padding-md">
      <div class="bg-gray-extra-light">padding-md</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-md.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-x-xl.hbs"}}
    <div class="bg-gray-medium padding-x-xl">
      <div class="bg-gray-extra-light">padding-x-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-x-xl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-y-xl.hbs"}}
    <div class="bg-gray-medium padding-y-xl">
      <div class="bg-gray-extra-light">padding-y-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-y-xl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="padding-left-xl.hbs"}}
    <div class="bg-gray-medium padding-left-xl">
      <div class="bg-gray-extra-light">padding-left-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "padding-left-xl.hbs" }}
{{/docs-demo}}

### Margin examples
{{#docs-demo as |demo|}}
  {{#demo.example name="margin-xl.hbs"}}
    <div class="bg-gray-medium">
      <div class="margin-xl badge badge-gray-dark">margin-xl</div>
      <div class="margin-xl badge badge-gray-dark">margin-xl</div>
      <div class="margin-xl badge badge-gray-dark">margin-xl</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "margin-xl.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-sm.hbs"}}
    <div class="bg-gray-medium">
      <div class="margin-sm badge badge-gray-dark">margin-sm</div>
      <div class="margin-sm badge badge-gray-dark">margin-sm</div>
      <div class="margin-sm badge badge-gray-dark">margin-sm</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "margin-sm.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-x-lg.hbs"}}
    <div class="bg-gray-medium">
      <div class="margin-x-lg badge badge-gray-dark">margin-x-lg</div>
      <div class="margin-x-lg badge badge-gray-dark">margin-x-lg</div>
      <div class="margin-x-lg badge badge-gray-dark">margin-x-lg</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "margin-x-lg.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-y-lg.hbs"}}
    <div class="bg-gray-medium">
      <div class="margin-y-lg badge badge-gray-dark">margin-y-lg</div>
      <div class="margin-y-lg badge badge-gray-dark">margin-y-lg</div>
      <div class="margin-y-lg badge badge-gray-dark">margin-y-lg</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "margin-y-lg.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="margin-bottom-lg-margin-right-lg.hbs"}}
    <div class="bg-gray-medium">
      <div class="margin-bottom-lg margin-right-lg badge badge-gray-dark">margin-bottom-lg margin-right-lg</div>
      <div class="margin-bottom-lg margin-right-lg badge badge-gray-dark">margin-bottom-lg margin-right-lg</div>
      <div class="margin-bottom-lg margin-right-lg badge badge-gray-dark">margin-bottom-lg margin-right-lg</div>
    </div>
  {{/demo.example}}
  {{demo.snippet "margin-bottom-lg-margin-right-lg.hbs" }}
{{/docs-demo}}

### Height, width, max-width and max-height examples

{{#docs-demo as |demo|}}
  {{#demo.example name="height-width-max-height-max-width.hbs"}}
    <div class="bg-gray-medium padding-xl">
      <code>.height-xxl.max-width-xxl</code>  
      <div class="max-width-xxl height-xxl bg-gray-dark "></div>
    </div>
  {{/demo.example}}
  {{demo.snippet "height-width-max-height-max-width.hbs" }}
{{/docs-demo}}

### Extending spacers

Add additional spacers to the `$spacers` map in your `scss` code, *before* you import `ember-skeleton-variables`, and ten use in your templates as shown below.

{{#docs-demo as |demo|}}
  {{#demo.example name="extending-spacers.hbs"}}
    <div class="bg-gray-medium padding-xxxl">
      <div class="height-xxxxl width-xxxxl bg-gray-dark"></div>
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
  {{#demo.example name="last-child-margin-bottom.hbs"}}
    <div class="bg-gray-medium padding-sm">
      <div class="margin-bottom-xl last-child-margin-bottom-0 bg-gray-light">margin-bottom-xl last-child-margin-bottom-0</div>
      <div class="margin-bottom-xl last-child-margin-bottom-0 bg-gray-light">margin-bottom-xl last-child-margin-bottom-0</div>
      <div class="margin-bottom-xl last-child-margin-bottom-0 bg-gray-light">margin-bottom-xl last-child-margin-bottom-0</div>
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

{{docs-snippet name="text-align-classes.scss"}}

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
  {{#demo.example name="card-box-shaow-default.scss"}}
    <div class="card-box-shadow rounded padding-lg margin-bottom-lg">
      .card-box-shadow
    </div>
    <div class="card-box-shadow card-box-shadow-hover-effect rounded padding-lg margin-bottom-lg">
      .card-box-shadow.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-2 card-box-shadow-hover-effect rounded padding-lg margin-bottom-lg">
      .card-box-shadow.card-box-shadow-level-2.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-3 card-box-shadow-hover-effect rounded padding-lg margin-bottom-lg">
      .card-box-shadow.card-box-shadow-level-3.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-4 card-box-shadow-hover-effect rounded padding-lg margin-bottom-lg bg-transparent">
      .card-box-shadow.card-box-shadow-level-4.card-box-shadow-hover-effect
    </div>
    <div class="card-box-shadow card-box-shadow-level-5 card-box-shadow-hover-effect rounded padding-lg margin-bottom-lg bg-white">
      .card-box-shadow.card-box-shadow-level-5.card-box-shadow-hover-effect
    </div>
  {{/demo.example}}
  {{demo.snippet "card-box-shaow-default.scss"}}
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

The cursor will be a pointer on hover.
