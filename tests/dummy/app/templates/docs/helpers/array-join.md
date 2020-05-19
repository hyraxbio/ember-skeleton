# Array join

Pass an array as the forst argument and the join string as the second. You can optionally pass the named arg `finalJoinString` to use a different join string for the final item.

## Simple use
{{#docs-demo as |demo|}}
  {{#demo.example name="array-join"}}
    <h3>List of Parks and Rec characters</h3>
    {{ember-skeleton/array-join model.names " | "}}
  {{/demo.example}}
  {{demo.snippet "array-join" label="Template" language="htmlbars"}}
  {{demo.snippet "names.js" label="Model" language="javascript"}}
{{/docs-demo}}

## Custom `finalJoinString`
{{#docs-demo as |demo|}}
  {{#demo.example name="array-join-custom-final"}}
    My favourte characters are {{ember-skeleton/array-join model.names ", " finalJoinString=" and "}}.
  {{/demo.example}}
  {{demo.snippet "array-join-custom-final" label="Template" language="htmlbars"}}
  {{demo.snippet "names.js" label="Model" language="javascript"}}
{{/docs-demo}}
