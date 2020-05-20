# Spacers

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

## Padding examples

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

## Margin examples

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

## Height, width, max-width and max-height examples

{{#docs-demo as |demo|}}
  {{#demo.example name="height-width-max-height-max-width.hbs" class="height-width-demo"}} 
      <div class="max-width-xxl height-xxl"></div>
  {{/demo.example}}
  {{demo.snippet "height-width-max-height-max-width.hbs" }}
{{/docs-demo}}

## Extending spacers

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


## Additional spacing classes

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