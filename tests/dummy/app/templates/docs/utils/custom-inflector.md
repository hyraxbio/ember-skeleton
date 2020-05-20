# Custom Inflector

Determines whether the singular or plural version of a word should be used. Accepts a number as the first argument, ad a hash of the singular and plural versions of the work or phrase.

The plural version is optional- if not passed, the plural version of the phrase defaults to the singular version with 's' appended.

## Import the util

{{docs-snippet name="import-custom-inflector-util.js"}}

## Usage

{{#docs-demo as |demo|}}
  {{#demo.example name="custom-inflector-basic"}}
    <ul> 
      {{#each defaultPlural as |sentence|}}
        <li>{{sentence}}</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "custom-inflector-util-default-plural.js" label="Controller" language="javascript"}}
  {{demo.snippet "custom-inflector-basic" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-votes.js" label="Model" language="javascript"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="custom-inflector-advanced"}}
    <ul> 
      {{#each customPlural as |sentence|}}
        <li>{{sentence}}</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "custom-inflector-util-custom-plural.js" label="Template" language="javascript"}}
  {{demo.snippet "names-and-votes.js" label="Model" language="javascript"}}
{{/docs-demo}}