# Robotise string

Accepts a string as the first argument, and a separator as an optional second argument, which defaults to `_` if absent. `

## Example
{{#docs-demo as |demo|}}
  {{#demo.example name="robotise-string"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Custom separator</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{nameVersions.unchanged}}</td>
          <td>{{nameVersions.default}}</td>
          <td>{{nameVersions.customSeparator}}</td>
        </tr>
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "robotise-string-util.js" label="Controller"}}
  {{demo.snippet "robotise-string" label="Template" language="htmlbars"}}
  {{demo.snippet "names.js" label="Model" language="javascript"}}
{{/docs-demo}}