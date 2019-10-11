Ember Skeleton
==============================================================================

Provides some basic layout components and generic SASS stylesheets.

Installation
------------------------------------------------------------------------------

```
ember install ember-skeleton
```


Usage
------------------------------------------------------------------------------

## Components

### Material Card

Adds static classes to a component to give it rounded corners, large padding, a border and box shadow effect. 

#### Options

* `depth` Default is 1, max is 5. Sets the depth of the box shadow based on the Google Material Design spec.
* `borderColorProp` When passed, the component leverages the `ember-skeleton/theme-color-string` helper to apply a custom border colour, based on the `borderColorProp`.
* `themeColorStringHash` Allows you to pass a hash of custom string associations to be used by the `ember-skeleton/theme-color-string` helper when returning the border colour. In the example below, the class `border-success` will be added if `someProp` evaluates to "ok".
* `materialCardHoverEffect` Determines whether or not effects will be applied when the user hovers obver the card.

#### Usage in HBS

    {{#ember-skeleton/material-card
      materialCardHoverEffect=true
      borderColorProp=someProp
      depth=2
      themeColorStringHash=(hash
        ok="success"
      )
    }}
      ...
    {{/ember-skeleton/material-card}}

#### Usage by Class Extension

You can make any component into a material card component by extending the material-card component class.

    // component JS
    import MaterialCard from 'ember-skeleton/components/ember-skeleton/material-card';

    export default MaterialCard.extend({
      ...
    });

When inserting the relevant component there are options.



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

#### Usage in JavaScript

```
import { humaniseString } from 'ember-skeleton/helpers/ember-skeleton/humanise-string';
...
humaniseString(['action_required', 'sentenceCase']);
```

### Theme Color String

Receives a string and returns another string, based on the settings in the ember-skeleton service (If they exist) ans the hash passed when calling the helper in a template.

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

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-skeleton`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).