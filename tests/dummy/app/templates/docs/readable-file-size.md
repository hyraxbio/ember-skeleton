# Readable file size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

{{#docs-demo as |demo|}}
  {{#demo.example name="readable-file-size"}}
    {{ember-skeleton/readable-file-size 2345234534}}<br>
    {{ember-skeleton/readable-file-size 2230000000}}<br>
    {{ember-skeleton/readable-file-size 1230000001}}  
  {{/demo.example}}

  {{demo.snippet "readable-file-size"}}
{{/docs-demo}}
