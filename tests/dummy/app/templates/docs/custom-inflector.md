# Custom Inflector

Determines whether the singular or plural version of a word should be used. Accepts a number as the first argument, ad a hash of the singular and plural versions of the work or phrase.

The plural version is optional- if not passed, the plural version of the phrase defaults to the singular version with 's' appended.

{{#docs-demo as |demo|}}
  {{#demo.example name="custom-inflector-basic"}}
    <ul> 
      {{#each model as |person|}}
        <li>{{person.name}} has {{person.votes}} {{ember-skeleton/custom-inflector person.votes singular="vote"}}.</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "custom-inflector-basic" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-votes.js" label="Model" language="javascript"}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="custom-inflector-advanced"}}
    <ul> 
      {{#each model as |person|}}
        <li>{{person.name}} has been voted for {{ember-skeleton/custom-inflector person.votes singular="once" plural="several times"}}.</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "custom-inflector-advanced" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-votes.js" label="Model" language="javascript"}}
{{/docs-demo}}