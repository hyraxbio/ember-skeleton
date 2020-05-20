# Material Card

Adds static classes to a component to give it rounded corners, large padding, a border and box shadow effect. 

## Options

* `depth` Default is 1, max is 5. Sets the depth of the box shadow based on the Google Material Design spec.
* `borderColorProp` When passed, the component leverages the `ember-skeleton/theme-color-string` helper to apply a custom border colour, based on the `borderColorProp`.
* `themeColorStringHash` Allows you to pass a hash of custom string associations to be used by the `ember-skeleton/theme-color-string` helper when returning the border colour. In the example below, the class `border-success` will be added if `someProp` evaluates to "ok".
* `materialCardHoverEffect` Determines whether or not effects will be applied when the user hovers obver the card.

## Usage in HBS

    {{#ember-skeleton/material-card
      materialCardHoverEffect=true
      borderColorProp=someProp
      depth=2
      themeColorStringHash=(hash
        ok="success"
      )
    }}
      ...
    {{/ember-skeleton/material-card}}

# Usage by Class Extension

You can make any component into a material card component by extending the material-card component class.

    // component JS
    import MaterialCard from 'ember-skeleton/components/ember-skeleton/material-card';

    export default MaterialCard.extend({
      ...
    });