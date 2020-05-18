# Ember skeleton service

Various addon related settings can be changed by extending the `ember-skeleton` service in `your-app/services/ember-skeleton.js`.

{{docs-snippet name="extend-ember-skeleton-service.js" language="javascript"}}

## Defaults

The default settings define the paths to the components for the heade and footer (These apply to both the sidebar and panel layouts) as well as the sidebar content and the sidebar toggling icon.

{{docs-snippet name="ember-skeleton-service-defaults.js" language="javascript"}}

## Theme color string defaults

Allows you to define default settings for use by the `ember-skeleton/theme-color-string` helper. The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

{{docs-snippet name="theme-color-string-defaults.js" language="javascript"}}

The above settings would allow the following three use cases. 

{{#docs-demo as |demo|}}
  {{#demo.example name="theme-color-string-default-badge.hbs"}}
    <b class="badge badge-{{ember-skeleton/theme-color-string "passed"}}">passed</b>
    <!-- OUTPUTS <b class="badge badge-success">passed</b>-->
    <b class="badge badge-{{ember-skeleton/theme-color-string "absent"}}">absent</b>
    <!-- OUTPUTS <b class="badge badge-warning">absent</b> -->
    <b class="badge badge-{{ember-skeleton/theme-color-string "failed"}}">failed</b>
    <!-- OUTPUTS <b class="badge badge-danger">failed</b> -->
  {{/demo.example}}
  {{demo.snippet "theme-color-string-default-badge.hbs"}}
{{/docs-demo}}

## Theme icon defaults

Allows you to define default settings for use by the `ember-skeleton/theme-icon-string` helper. The helper will check if the value of the first argument is present in any of the `matchStrings` arrays, and will return the corresponsing `returnString`.

{{docs-snippet name="theme-icon-defaults.js" language="javascript"}}

{{#docs-demo as |demo|}}
  {{#demo.example name="theme-icon-defaults-usage.hbs" class="theme-icons-demo"}}
    {{component (ember-skeleton/theme-icon "passed")}}
    {{!-- OUTPUTS {{svg/icons/icon-tick}} --}}
    {{component (ember-skeleton/theme-icon "absent")}}
    {{!-- OUTPUTS  {{svg/icons/icon-alert}} --}}

  {{/demo.example}}
  {{demo.snippet "theme-icon-defaults-usage.hbs"}}
{{/docs-demo}}



