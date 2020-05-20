# Readable file size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

## Import the util

{{docs-snippet name="import-readable-file-size-util.js"}}

## Usage

{{#docs-demo as |demo|}}
  {{#demo.example name="readable-file-size-util.hbs"}}
    <ul> 
      {{#each fileSizes as |fileSize|}}
        <li>{{fileSize}}</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "readable-file-size-util.js" label="Controller" language="javascript"}}
  {{demo.snippet "readable-file-size-util.hbs" label="Template" language="htmlbars"}}
  {{demo.snippet "filesizes.js" label="Model" language="javascript"}}
{{/docs-demo}}
