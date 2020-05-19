# Page layouts

## Sidebar layout

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

## Panel layout

Created a layout with a horizontal panel spanning the full width of the screen. The content is centred within it. Invoked as below.

  {{#docs-demo as |demo|}}
    {{#demo.example name="panel-layout.hbs" class="layout-container"}}
      {{#ember-skeleton/panel-layout/outer-wrapper}}
        Content here.
      {{/ember-skeleton/panel-layout/outer-wrapper}}
    {{/demo.example}}
    {{demo.snippet "panel-layout.hbs" }}
  {{/docs-demo}}

## Content wrapper

To be used inside either of the they panel or sidebar layouts. Creates what you could think of as the main content area of the page, and implements text styles for "main content" text.

Accepts one argument- the main title to be displayed on the page.

{{#docs-demo as |demo|}}
  {{#demo.example name="content-wrapper-panel-layout.hbs" class="layout-container"}}
    {{#ember-skeleton/panel-layout/outer-wrapper}}
      {{#ember-skeleton/content-wrapper title="Panel Layout"}}
        <div class="text-column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
          
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      {{/ember-skeleton/content-wrapper}}
    {{/ember-skeleton/panel-layout/outer-wrapper}}
  {{/demo.example}}
  {{demo.snippet "content-wrapper-panel-layout.hbs" }}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name="content-wrapper-sidebar-layout.hbs" class="layout-container"}}
    {{#ember-skeleton/sidebar-layout/outer-wrapper}}
      {{#ember-skeleton/content-wrapper title="Sidebar Layout"}}
        <div class="text-column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
          
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      {{/ember-skeleton/content-wrapper}}
    {{/ember-skeleton/sidebar-layout/outer-wrapper}}
  {{/demo.example}}
  {{demo.snippet "content-wrapper-sidebar-layout.hbs" }}
{{/docs-demo}}