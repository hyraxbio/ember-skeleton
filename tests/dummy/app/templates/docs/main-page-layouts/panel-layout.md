# Panel layout

Created a layout with a horizontal panel spanning the full width of the screen. The content is centred within it. Invoked as below.

  {{#docs-demo as |demo|}}
    {{#demo.example name="panel-layout.hbs" class="layout-container"}}
      {{#ember-skeleton/panel-layout/outer-wrapper}}
        Content here.
      {{/ember-skeleton/panel-layout/outer-wrapper}}
    {{/demo.example}}
    {{demo.snippet "panel-layout.hbs" }}
  {{/docs-demo}}