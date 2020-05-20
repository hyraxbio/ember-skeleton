# Odd or even

Accepts an integer as the first argument, and returns either `odd` or `even`.

## Import the util

{{docs-snippet name="import-odd-or-even-util.js"}}

## Usage

{{#docs-demo as |demo|}}
  {{#demo.example name="odd-or-even"}}
    <ul> 
      {{#each oddOrEvenVotes as |sentence|}}
        <li>{{sentence}}</li>
      {{/each}}
    </ul>
  {{/demo.example}}
  {{demo.snippet "odd-or-even-util.js" label="Controller" language="javascript"}}
  {{demo.snippet "odd-or-even" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-votes.js" label="Model" language="javascript"}}
{{/docs-demo}}
