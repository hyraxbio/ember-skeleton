# Layout components

## Header component

To create your own header component, you can either create a component in your app with the path `ember-skeleton/header`, or specify a custom path in the `headerComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

### headerProps

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

## Footer component

To create your own footer component, you can either create a component in your app with the path `ember-skeleton/footer`, or specify a custom path in the `footerComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

### footerProps

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

## Loading component

This is what will display in the main content area of your layout when in loading state. See {{link-to "page loading state" "docs.page-loading-state"}} on how to show and hide the loading component.

## Loading component

To create your own loading component, you can either create a component in your app with the path `ember-skeleton/loading-page`, or specify a custom path in the `loadingComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

### loadingProps

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

## Sidebar component

To create your own sidebar component, you can either create a component in your app with the path `ember-skeleton/sidebar`, or specify a custom path in the `sidebarContentComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.

### sidebarProps

When inserting the `ember-skeleton/sidebar-layout` component, you can supply a hash as the `sidebarProps` property, and that hash will be available in your sidebar component.

{{#docs-snippet name="sidebarProps"}}
  {{#ember-skeleton/sidebar-layout/outer-wrapper 
      sidebarProps=(hash 
        userName="Admin"
      )
    }}
  {{/ember-skeleton/sidebar-layout/outer-wrapper}}
{{/docs-snippet}}

{{#docs-snippet name="sidebarPropsUsage" title="Your sidebar component"}}
  {{sidebarProps.userName}} {{!-- Admin --}}
{{/docs-snippet}}

### collapseSideBarIconComponent

By default, the sidebar is collapsible, and features an expand/collapse icon, which rotates 180 degress when the sidebar is collapsed or expanded. 

To create your own icon, you can either create a component in your app with the path `ember-skeleton/svg/icon-collapse-sidebar`, or specify a custom path in the `collapseSideBarIconComponent` property in your {{link-to "app wide default options" "docs.default-options"}}.