# In array

The first argument is an array, and then second is the string to find in it. Returns `true` if it is present, and `false` if it is not.

{{#docs-demo as |demo|}}
  {{#demo.example name="in-array"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Senior</th>
          <th>Junior</th>
          <th>Intern</th>
        </tr>
      </thead>
      <tbody>
        {{#each model.all as | employee |}}
          <tr>
            <td>{{employee}}</td>
            <td>{{ember-skeleton/in-array model.seniorEmployees employee}}</td>
            <td>{{ember-skeleton/in-array model.juniorEmployees employee}}</td>
            <td>{{ember-skeleton/in-array model.interns employee}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
    {{#each model.all as | employee |}}
      
    {{/each}}
  {{/demo.example}}
  {{demo.snippet "in-array" label="Template" language="htmlbars"}}
  {{demo.snippet "employee-levels.js" label="Model" language="javascript"}}
{{/docs-demo}}
