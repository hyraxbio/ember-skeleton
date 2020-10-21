# Robotise string

Accepts a string as the first argument, and a separator as an optional second argument, which defaults to `_` if absent. `

{{#docs-demo as |demo|}}
  {{#demo.example name="robotise-string-basic"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Custom separator</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{ember-skeleton/robotise-string person.name}}</td>
            <td>{{ember-skeleton/robotise-string person.name "---"}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "robotise-string-basic" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-statuses-two.js" label="Model" language="javascript"}}
{{/docs-demo}}