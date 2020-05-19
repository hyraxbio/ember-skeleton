# Array join

Pass an array as the first argument and the join string as the second. You can optionally pass the named arg `finalJoinString` to use a different join string for the final item.

## Example
{{#docs-demo as |demo|}}
  {{#demo.example name="array-join"}}
    {{sentence}}
  {{/demo.example}}
  {{demo.snippet "array-join-util.js" label="Controller"}}
  {{demo.snippet "array-join" label="Template" language="htmlbars"}}
  {{demo.snippet "names.js" label="Model" language="javascript"}}
{{/docs-demo}}
