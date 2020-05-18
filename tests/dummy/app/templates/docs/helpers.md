# Helpers

## Humanise String

Accepts a string as the first argument.

Replaces underscores with spaces in the string, and applies one of three casing functions: 

* `titleCase (default)`
* `sentenceCase`
* `lowerCase`

### Examples

`{{ember-skeleton/humanise-string "Action_required"}}`

**`// Action Required`**

`{{ember-skeleton/humanise-string "Action_required" "sentenceCase"}}`

**`// Action required`**

`{{ember-skeleton/humanise-string "Action_required" "lowerCase"}}`

**`// action required`**

`{{ember-skeleton/humanise-string "Action_required" "upperCase"}}`

**`// ACTION REQUIRED`**

### Usage in JavaScript

```
import { humaniseString } from 'ember-skeleton/helpers/ember-skeleton/humanise-string';
...
humaniseString(['action_required', 'sentenceCase']);
```

## Theme Color String

### Use case

The styles documentation outlines how you can define a map of theme colours, which then generates classes for displaying a range of UI elements in any of the defined colours. See "Theme colours" and "Theme colour CSS selectors" in {{link-to "Styles" "docs.styles"}}.

Often we want to associate strings in our data with certain colours- for example, a green badge for a data item with a status of `complete` and a red badge for an item with a status of `failed`, as below.

<div class="ember-skeleton-styles">
  {{#docs-demo as |demo|}}
    {{#demo.example name="bootstrap-badges"}}
      <div class="badge badge-success">complete</div>
      <div class="badge badge-warning">absent</div>
      <div class="badge badge-danger">failed</div>
    {{/demo.example}}
    {{demo.snippet "bootstrap-badges"}}
  {{/docs-demo}}
</div>

With the badges above, the green and red backgrounds come form the `badge-success` and `badge-danger` classes respectively.

But when using dynamic data, for example in the loop below, hard coding the class of the badge doesn't work- notice how each status below appears in a green badge.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data"}}
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
            <td><b class="badge badge-success">{{person.status}}</b></td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data"}}
{{/docs-demo}}

Likewise, simply passing in the status as he relevant part of the badge doesn't work, because there are no theme colours named `passed`, `failed` or `absent`.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data-raw-status"}}
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
            <td><b class="badge badge-{{person.status}}">{{person.status}}</b></td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data-raw-status" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
  
{{/docs-demo}}

### Basic usage

The `ember-skeleton/theme-color-string` helper accepts a string as the first arguemnt (`person.status` in the example below), and a hash of key value pairs, where each key is a potential value of `person.status` and each value is one othe the defined theme colours. The helper returns the relevant theme colour, and this, the badges below display correctly.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data-parsed-status"}}
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
            <td><b class="badge badge-{{ember-skeleton/theme-color-string person.status complete="success" absent="warning" failed="danger"}}">{{person.status}}</b></td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data-parsed-status" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
{{/docs-demo}}

### Setting default string/theme-colour associations

It is likely that most colour/string associations will remain consistent throughout your app- for example that `passed` will always use the `success` colour and `failed` will always use the `danger` colour.

To avoid having to explicitly pass these associations to the helper every time it is used, a set of defaults can be defined by extending the `ember-skeleton` service in your app, as show below.

{{docs-snippet name="extend-ember-skeleton-service.js" language="javascript"}}

You can then define default associations.

{{docs-snippet name="theme-color-string-defaults.js" language="javascript"}}

The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data-default-status"}}
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
            <td><b class="badge badge-{{ember-skeleton/theme-color-string person.status}}">{{person.status}}</b></td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data-default-status" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
  {{demo.snippet name="theme-color-string-defaults.js" language="javascript" label="your-app/services/ember-skeleton.js"}}
{{/docs-demo}}

Note that where a key value pair passed to the helper conflicts with a default association in the ember-skeleton service, the default association will be overriden.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data-default-overridden"}}
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
            <td><b class="badge badge-{{ember-skeleton/theme-color-string person.status absent="info"}}">{{person.status}}</b></td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data-default-overridden" label="Template" language="htmlbars"}}
  {{demo.snippet "names-and-statuses.js" label="Model" language="javascript"}}
  {{demo.snippet name="theme-color-string-defaults.js" language="javascript" label="your-app/services/ember-skeleton.js"}}
{{/docs-demo}}

Note that you can set the `fallback` property to `true` on one of the default associatiosn defined in the `ember-skeleton` service, and that returnString of that object will be returned if no matches are found.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data-default-fallback-service"}}
      <b class="badge badge-{{ember-skeleton/theme-color-string "missing"}}">missing</b>
    {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data-default-fallback-service" label="Template" language="htmlbars"}}
  {{demo.snippet name="theme-color-string-defaults.js" language="javascript" label="your-app/services/ember-skeleton.js"}}
{{/docs-demo}}

You can also pass a fallback colour directly to the helper then invoking it. This fallback will take precendence over the fallback in your default associations.

{{#docs-demo as |demo|}}
  {{#demo.example name="bootstrap-badges-dynamic-data-default-fallback"}}
      <b class="badge badge-{{ember-skeleton/theme-color-string "missing" fallback="primary"}}">missing</b>
    {{/demo.example}}
  {{demo.snippet "bootstrap-badges-dynamic-data-default-fallback" label="Template" language="htmlbars"}}
  {{demo.snippet name="theme-color-string-defaults.js" language="javascript" label="your-app/services/ember-skeleton.js"}}
{{/docs-demo}}

#### Usage in JavaScript

```
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
...
themeColorString(['test'], {test: 'completed'});
```

Note that if you have defined `themeColorStringDefaults` in the `emberSkeleton` service of the consuming app, this will not be available to the helper when calling it in JavaScript. To make these available, include them in the hash passed to the helper, with the key `defaultAssotiations`.

```
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
import { inject as service } from '@ember/service';

...
emberSkeleton: service(),
themeColorString(['test'], {defaultAssociations: this.get('emberSkeleton.themeColorStringDefaults')});
```

### Custom Inflector

Determines whether the singular or plural version of a word should be used. Accepts a number as the first argument, ad a hash of the singular and plural versions of the work or phrase.

The plural version is option- if not passed, the plural version of the phrase defaults to the singular version with 's' appended.

`{{ember-skeleton/custom-inflector 1 singular="mouse" plural="mice"}}`

**`// mouse`**

`{{ember-skeleton/custom-inflector 2 singular="mouse" plural="mice"}}`

**`// mice`**

#### Usage in JavaScript

```
import { customInflector } from 'ember-skeleton/helpers/ember-skeleton/custom-inflector';
...
customInflector([number], {singular:"item was", plural:"items were"});
```

### Readable File Size

Returns a human readable filesize, after receiving a number of bytes as the only argument.

`{{ember-skeleton/readable-file-size 2345345234}}`

#### Usage in JavaScript

```
import { readableFileSize } from 'ember-skeleton/helpers/ember-skeleton/readable-file-size';
...
readableFileSize([23523532345]);
```
### Replace String

Receives a string to search for as the first argument, and then either a search tem and a replace term (simple search), or an array of search and replace hashes (advanced search). Note that the value of the `default` hash will be returned if the string is not found in any of the hashes.

#### Simple Usage

`{{ember-skeleton/replace-string "spain" "spain" "europe"}}`

**`// europe`**

#### Advanced Usage

    {{ember-skeleton/replace-string "qc_pending" 
      advanced=(array 
        (hash
          find="spain"
          replace="europe"
        )
        (hash
          find="south-africa"
          replace="africa"
        )
      )
    }}

Note that you can pass an array as the `find` property in your advanced search hashes.

    {{ember-skeleton/replace-string "south-africa" 
      advanced=(array 
        (hash
          find=(array "spain" "italy" "france")
          replace="europe"
        )
        (hash
          find=(array "south-africa" "ethiopia" "namibia")
          replace="africa"
        )
      ) default="unknown"
    }}

**`// africa`**

#### Default

`{{ember-skeleton/replace-string "not-a-real-country" "spain" "europe" default="unknown"}}`

**`// unknown`**

If there are no matches and no default is passed, the original string is returned.

`{{ember-skeleton/replace-string "not-a-real-country" "spain" "europe"}}`

**`// not-a-real-country`**


{{#docs-snippet name="your-snippet-name" unindent=true language="javascript"}}
  import Service from '@ember/service';

  export default Service.extend({
    init() {
      this._super(...arguments);
      this.themeColorStringDefaults = [{
        returnString: 'success',
        matchStrings: ['success', 'ok', 'passed', 'active']
      },
      {
        returnString: 'warning',
        matchStrings: ['warning', 'absent']
      },
      {
        returnString: 'danger',
        matchStrings: ['danger', 'failed', 'error']
      },
      {
        returnString: 'gray-medium',
        matchStrings: ['pending']
      }];
    },
{{/docs-snippet}}

<div class="ember-skeleton-styles">
{{#docs-demo as |demo|}}
  {{#demo.example name="theme-color-string-error.hbs"}}
    <!-- <div class="badge badge-{{ember-skeleton/theme-color-string "error"}}">Name</div> -->
  {{/demo.example}}

  {{demo.snippet "theme-color-string-error.hbs"}}
{{/docs-demo}}
</div>

### Readable file size

<div class="ember-skeleton-styles">
{{#docs-demo as |demo|}}
  {{#demo.example name="readable-file-size"}}
    {{ember-skeleton/readable-file-size 2345234534}}<br>
    {{ember-skeleton/readable-file-size 2230000000}}<br>
    {{ember-skeleton/readable-file-size 1230000001}}  
  {{/demo.example}}

  {{demo.snippet "readable-file-size"}}
{{/docs-demo}}
</div>