# Odd or even

Accepts an integer as the first argument, and returns either `odd` or `even`.

{{#docs-demo as |demo|}}
  {{#demo.example name="odd-or-even"}}
    <ul> 
      {{#each model as |person|}}
        <li>{{person.name}} has an <b>{{ember-skeleton/odd-or-even person.votes}}</b> number of votes.</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "odd-or-even" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-votes.js" label="Model" language="javascript"}}
{{/docs-demo}}
