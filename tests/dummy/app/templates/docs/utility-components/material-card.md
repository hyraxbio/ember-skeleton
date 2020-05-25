# Material Card

Adds static classes to a component to give it rounded corners, large padding, a border and box shadow effect. 

## Basic usage

{{#docs-demo as |demo|}}
  {{#demo.example name="material-card-basic.hbs"}}
    {{#ember-skeleton/material-card}}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}
    {{/demo.example}}
  {{demo.snippet "material-card-basic.hbs" }}
{{/docs-demo}}

## Depth

The `depth` prop sets the depth of the box shadow based on the Google Material Design spec. The default is `1`, max is `5`. 

{{#docs-demo as |demo|}}
  {{#demo.example name="material-card-depth.hbs"}}
    {{#ember-skeleton/material-card
      depth=1
      class="margin-bottom-lg"
    }}
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}

    {{#ember-skeleton/material-card
      depth=2
      class="margin-bottom-lg"
    }}
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}

    {{#ember-skeleton/material-card
      depth=3
      class="margin-bottom-lg"
    }}
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}

    {{#ember-skeleton/material-card
      depth=4
      class="margin-bottom-lg"
    }}
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}

    {{#ember-skeleton/material-card
      depth=5
      class="margin-bottom-lg"
    }}
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}
  {{/demo.example}}
  {{demo.snippet "material-card-depth.hbs" }}
{{/docs-demo}}

## Hover effect

If the `materialCardHoverEffect` prop is `true`, a hover effect will be applied when the user hovers over the card.

{{#docs-demo as |demo|}}
  {{#demo.example name="material-card-hover.hbs"}}
    {{#ember-skeleton/material-card
      materialCardHoverEffect=true
    }}
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}
    {{/demo.example}}
  {{demo.snippet "material-card-hover.hbs" }}
{{/docs-demo}}

## Theme color integration

Uses the {{link-to "defined theme colours" "docs.styles.theme-colors"}} along with {{link-to "theme color string helper" "docs.helpers.theme-color-string"}} to apply a coloured borde to the car, based on the `borderColorProp`.

The simplest scenario is when `borderColorProp` is the name of one of the theme colours.

{{#docs-demo as |demo|}}
  {{#demo.example name="material-card-theme-color-border.hbs"}}
    {{#ember-skeleton/material-card
      borderColorProp="danger"
    }}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    {{/ember-skeleton/material-card}}
  {{/demo.example}}
  {{demo.snippet "material-card-theme-color-border.hbs" }}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
{{/docs-demo}}

The second scenario is where the `borderColorProp` is not one of the {{link-to "defined theme colours" "docs.styles.theme-colors"}}, but it is handled by the theme color string defaults in `config/environment.js`.

{{#docs-demo as |demo|}}
  {{#demo.example name="material-card-theme-colors.hbs"}}
    {{#each model as | person |}}
      {{#ember-skeleton/material-card
        borderColorProp=person.status
        class="margin-bottom-lg"
      }}
        {{person.name}} | {{person.status}}
      {{/ember-skeleton/material-card}}
    {{/each}}
  {{/demo.example}}
  {{demo.snippet "material-card-theme-colors.hbs" }}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
  {{demo.snippet name="theme-color-string-app-defaults.js" language="javascript" label="config/environment.js"}}
{{/docs-demo}}

You can pass a hash of custom theme color string associations using the `themeColorStringHash` prop. Note that you can also pass `fallback="..."` to this hash to provide a fallback border color. See the {{link-to "theme color string helper docs" "docs.helpers.theme-color-string"}} for more.

{{#docs-demo as |demo|}}
  {{#demo.example name="material-card-theme-custom-colors.hbs"}}
    {{#each model as | person |}}
      {{#ember-skeleton/material-card
        borderColorProp=person.status
        themeColorStringHash=(hash
          passed="info"
          absent="gray-medium"
          failed="secondary"
        )
        class="margin-bottom-lg"
      }}
        {{person.name}} | {{person.status}}
      {{/ember-skeleton/material-card}}
    {{/each}}
  {{/demo.example}}
  {{demo.snippet "material-card-theme-custom-colors.hbs" }}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
{{/docs-demo}}

## Usage by class extension

You can make any component into a material card component by extending the material-card component class.

{{#docs-snippet name="material-card-class-extension"}}
  import MaterialCard from 'ember-skeleton/components/ember-skeleton/material-card';

  export default MaterialCard.extend({
    ...
  });
{{/docs-snippet}}