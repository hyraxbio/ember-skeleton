## Helpers

### Humanise String

Accepts a string as the first argument.

Replaces underscores with spaces in the string, and applies one of three casing functions: 

* `titleCase (default)`
* `sentenceCase`
* `lowerCase`

#### Examples

`{{ember-skeleton/humanise-string "Action_required"}}`

**`// Action Required`**

`{{ember-skeleton/humanise-string "Action_required" "sentenceCase"}}`

**`// Action required`**

`{{ember-skeleton/humanise-string "Action_required" "lowerCase"}}`

**`// action required`**

`{{ember-skeleton/humanise-string "Action_required" "upperCase"}}`

**`// ACTION REQUIRED`**

#### Usage in JavaScript

```
import { humaniseString } from 'ember-skeleton/helpers/ember-skeleton/humanise-string';
...
humaniseString(['action_required', 'sentenceCase']);
```

### Theme Color String

The purpose of this helper is to output the bootstrap classes that apply colours to various elements. See [Bootstrap colours](https://getbootstrap.com/docs/4.1/utilities/colors/). For example, with the default Boostrap colour definitions, text with the class `text-success` will displsy in green.

<div class="ember-skeleton-styles">
  {{#docs-demo as |demo|}}
    {{#demo.example name="bootstrap-text-primary"}}
      <p class="text-primary">.text-primary</p>
    {{/demo.example}}
    {{demo.snippet "bootstrap-text-primary"}}
  {{/docs-demo}}
</div>

<div class="ember-skeleton-styles">
  {{#docs-demo as |demo|}}
    {{#demo.example name="bootstrap-text-success"}}
      <div class="badge badge-success">Success badge</div>
    {{/demo.example}}
    {{demo.snippet "bootstrap-text-success"}}
  {{/docs-demo}}
</div>

However, your data may use different terms- for example the status of an item might be `ok` or `complete`. We can use this helper to retur th string `success` when given either `ok` or `complete`, so display the status in green.

We do this by passing the helper the value to use as the first argument, and then a hash which maps strings to the names of Bootstrap colours.

Thye example below 

<div class="ember-skeleton-styles">
{{#docs-demo as |demo|}}
  {{#demo.example name="theme-color-string.hbs"}}
    <div class="text-{{ember-skeleton/theme-color-string "ok" complete="success" ok="success" failed="danger"}}">Status ok</div>
    <div class="text-{{ember-skeleton/theme-color-string "absent" absent="secondary" ok="success"  failed="danger" default="primary"}}">Status absent</div>
    <div class="text-{{ember-skeleton/theme-color-string "bad" complete="success" ok="success" bad="danger"}}">Status failed</div>
  {{/demo.example}}

  {{demo.snippet "theme-color-string.hbs"}}
{{/docs-demo}}
</div>

Receives a string and returns another string, based on the settings in the ember-skeleton service (If they exist) and the hash passed when calling the helper in a template.

`{{ember-skeleton/theme-color-string "present" present="success" absent="danger"}}`

**`// success`**

`{{ember-skeleton/theme-color-string "absent" present="success" absent="danger"}}`

**`// danger`**

#### Default associations

These can be set in `app/services/ember-skeleton` in the consuming app, as shown below. Note that you can also override `defaultThemeColorString`, which is what the helper will return if the string passed does not match anything in the default settings, nor in the hash passed to the helper. 

    import Service from '@ember/service';

    export default Service.extend({
      init() {
        this._super(...arguments);
        this.themeColorStringDefaults = [{
          returnString: 'success',
          matchStrings: ['complete', 'active', 'accepted']
        },
        {
          returnString: 'warning',
          matchStrings: ['absent']
        },
        {
          returnString: 'danger',
          matchStrings: ['failed', 'error', 'revoked', 'rejected']
        },
        {
          returnString: 'gray-medium',
          matchStrings: ['pending', 'processing']
        }];
      },
      ...
      defaultThemeColorString: 'gray-medium',
    });

`{{ember-skeleton/theme-color-string "complete"}}`

**`// success`**

`{{ember-skeleton/theme-color-string "unmatched-string"}}`

**`// gray-medium`** (Because of `defaultThemeColorString: 'gray-medium'`)

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