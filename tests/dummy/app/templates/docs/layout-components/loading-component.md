# Loading component

This is what will display in the main content area of your layout when in loading state. See {{link-to "page loading state" "docs.page-loading-state"}} on how to show and hide the loading component.

# Loading component

To create your own loading component, you can either create a component in your app with the path `ember-skeleton/loading-page`, or specify a custom path in the `loadingComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

## loadingProps

When inserting either the `ember-skeleton/panel-layout` or `ember-skeleton/loading-layout` components, you can supply a hash as the `loadingProps` property, and that hash will be available in your loading component.

{{#docs-snippet name="loadingProps"}}
  {{#ember-skeleton/sidebar-layout/outer-wrapper 
      loadingProps=(hash 
        userName="Ron Swanson"
      )
    }}
  {{/ember-skeleton/sidebar-layout/outer-wrapper}}
{{/docs-snippet}}

{{#docs-snippet name="loadingPropsUsage" title="Your loading component"}}
  {{loadingProps.userName}}
{{/docs-snippet}}