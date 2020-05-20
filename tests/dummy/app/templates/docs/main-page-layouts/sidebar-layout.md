# Sidebar layout

Includes a sidebar to the left, and a main content section to the right. The content is aligned to the left of the main content section.

Invoked as below. If content header is true, the class `content-header` is added to the wrapper div, and the styles add additional padding to the top of the right hand section (The main section) allowing an additional fixed bar to be placed at the top of the section.

  {{#docs-demo as |demo|}}
    {{#demo.example name="sidebar-layout.hbs" class="layout-container"}}
      {{#ember-skeleton/sidebar-layout/outer-wrapper}}
        Content here.
      {{/ember-skeleton/sidebar-layout/outer-wrapper}}
    {{/demo.example}}
    {{demo.snippet "sidebar-layout.hbs" }}
  {{/docs-demo}}