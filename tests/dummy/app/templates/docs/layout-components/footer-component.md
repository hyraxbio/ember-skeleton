# Footer component

To create your own footer component, you can either create a component in your app with the path `ember-skeleton/footer`, or specify a custom path in the `footerComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

## footerProps

When inserting either the `ember-skeleton/panel-layout` or `ember-skeleton/footer-layout` components, you can supply a hash as the `footerProps` property, and that hash will be available in your footer component.

{{#docs-snippet name="footerProps"}}
  {{#ember-skeleton/sidebar-layout/outer-wrapper 
      footerProps=(hash 
        userName="Ron Swanson"
      )
    }}
  {{/ember-skeleton/sidebar-layout/outer-wrapper}}
{{/docs-snippet}}

{{#docs-snippet name="footerPropsUsage" title="Your footer component"}}
  {{footerProps.userName}}
{{/docs-snippet}}