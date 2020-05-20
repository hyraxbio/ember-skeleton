# Readable file size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

{{#docs-demo as |demo|}}
  {{#demo.example name="readable-file-size"}}
  {{#each model as |fileSize|}}
    {{ember-skeleton/readable-file-size fileSize}}<br>
  {{/each}}
  {{/demo.example}}
  {{demo.snippet "readable-file-size"}}
  {{demo.snippet "filesizes.js" label="Model" language="javascript"}}
{{/docs-demo}}

## Rendering bug

Note that versions of Ember lower than 3.18.0 you get unexpected results with long integers, when the integer is passed directly into the helper. The bug does not occur when the argument is in a property as above.

{{#docs-demo as |demo|}}
  {{#demo.example name="readable-file-size-bug"}}
    {{ember-skeleton/readable-file-size 2000000000}} (Should be 2.00GB)<br>
  {{/demo.example}}
  {{demo.snippet "readable-file-size-bug"}}
{{/docs-demo}}

