# Replace string

Receives a string to search for as the first argument, and then either a search tem and a replace term (simple search), or an array of search and replace hashes (advanced search). Note that the value of the `default` hash will be returned if the string is not found in any of the hashes.

Note that the helper only looks for an exact matches- it does not replace text within string that is being searched.

## Simple Usage

The example below replaces "Andy Dwyer" with "Andrew Dwyer".

{{#docs-demo as |demo|}}
  {{#demo.example name="replace-string-basic"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{ember-skeleton/replace-string person.name "Andy Dwyer" "Andrew Dwyer"}}</td>
            <td>{{person.status}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "replace-string-basic" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-status-numbers.js" label="Model" language="javascript"}}
{{/docs-demo}}

## Advanced Usage

Th example below replaces numerical statuses with string statuses.

{{#docs-demo as |demo|}}
  {{#demo.example name="replace-string-advanced"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>
            {{ember-skeleton/replace-string person.status 
              advanced=(array 
                (hash
                  find="-1"
                  replace="absent"
                )
                (hash
                  find="0"
                  replace="failed"
                )
                (hash
                  find="1"
                  replace="passed"
                )
              )
            }}
            </td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "replace-string-advanced" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-status-numbers.js" label="Model" language="javascript"}}
{{/docs-demo}}

## Array

Note that you can pass an array as the `find` property in your advanced search hashes. The examples below replaces both "0" and "-1" with "false", and "1" with "true".

{{#docs-demo as |demo|}}
  {{#demo.example name="replace-string-array-simple"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Passed</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{ember-skeleton/replace-string person.status (array "-1" "0") "false"}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "replace-string-array-simple" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-status-numbers.js" label="Model" language="javascript"}}
{{/docs-demo}}

Using a find array with the `advanced` hash:

{{#docs-demo as |demo|}}
  {{#demo.example name="replace-string-array"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Passed</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>
            {{ember-skeleton/replace-string person.status 
              advanced=(array 
                (hash
                  find=(array "-1" "0")
                  replace="false"
                )
                (hash
                  find="1"
                  replace="true"
                )
              )
            }}
            </td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "replace-string-array" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-status-numbers.js" label="Model" language="javascript"}}
{{/docs-demo}}

## Fallback

You can pass a `fallback` string to the helper. If no matches are found, the fallback dtring will be returned.
  
The example below replaces "1" with "passed" and everything else with "did not pass".

{{#docs-demo as |demo|}}
  {{#demo.example name="replace-string-fallback-simple"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Passed</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>{{ember-skeleton/replace-string person.status "1" "passed" fallback="did not pass"}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "replace-string-fallback-simple" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-status-numbers.js" label="Model" language="javascript"}}
{{/docs-demo}}

Using `fallback` with the `advanced` hash:

{{#docs-demo as |demo|}}
  {{#demo.example name="replace-string-fallback"}}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Passed</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as | person |}}
          <tr>
            <td>{{person.name}}</td>
            <td>
            {{ember-skeleton/replace-string person.status 
              advanced=(array 
                (hash
                  find="1"
                  replace="passed"
                )
              )
              fallback="did not pass"
            }}
            </td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "replace-string-fallback" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-status-numbers.js" label="Model" language="javascript"}}
{{/docs-demo}}

If there are no matches and no `fallback` is passed, the original string is returned.