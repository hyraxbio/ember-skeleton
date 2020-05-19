# Humanise string

Accepts a string as the first argument.

Replaces underscores with spaces in the string, and applies one of three casing functions: 

* `sentenceCase (default)`
* `titleCase`
* `lowerCase`
* `upperCase`

{{#docs-demo as |demo|}}
  {{#demo.example name="humanise-string-basic"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Titlecase</th>
          <th>Lowercase</th>
          <th>Uppercase</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{ember-skeleton/humanise-string person.status}}</td>
            <td>{{ember-skeleton/humanise-string person.status "titleCase"}}</td>
            <td>{{ember-skeleton/humanise-string person.status "lowerCase"}}</td>
            <td>{{ember-skeleton/humanise-string person.status "upperCase"}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "humanise-string-basic" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-statuses-two.js" label="Model" language="javascript"}}
{{/docs-demo}}