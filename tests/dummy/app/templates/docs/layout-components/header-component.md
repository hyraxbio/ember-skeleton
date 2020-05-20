# Header component

To create your own header component, you can either create a component in your app with the path `ember-skeleton/header`, or specify a custom path in the `headerComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

## headerProps

When inserting either the `ember-skeleton/panel-layout` or `ember-skeleton/sidebar-layout` components, you can supply a hash as the `headerProps` property, and that hash will be available in your header component.

{{#docs-snippet name="headerProps"}}
  {{#ember-skeleton/sidebar-layout/outer-wrapper 
      headerProps=(hash 
        userName="Ron Swanson"
      )
    }}
  {{/ember-skeleton/sidebar-layout/outer-wrapper}}
{{/docs-snippet}}

{{#docs-snippet name="headerPropsUsage" title="Your header component"}}
  {{headerProps.userName}}  {{!-- Ron Swanson --}}
{{/docs-snippet}}