# Layout components

## Sidebar layout

Includes a sidebar to the left, and a main content section to the right. The content is aligned to the left of the main content section.

Invoked as below. If content header is true, the class `content-header` is added to the wrapper div, and the styles add additional padding to the top of the right hand section (The main section) allowing an additional fixed bar to be placed at the top of the section.

    {{#ember-skeleton/sidebar-layout/outer-wrapper contentHeader=true}}
    ...
    {{/ember-skeleton/sidebar-layout/outer-wrapper}}

## Panel layout

Created a layout with a horizontal panel spanning the full width of the screen. The content is centred within it. Invoked as below.

    {{#ember-skeleton/panel-layout/outer-wrapper}}
    ...
    {{/ember-skeleton/panel-layout/outer-wrapper}}

## Content wrapper

To be used inside either of the they panel or sidebar layouts. Creates what you could think of as the main content area of the page, and implements text styles for "main content" text.

Accepts one argument- the main title to be displayed on the page.
