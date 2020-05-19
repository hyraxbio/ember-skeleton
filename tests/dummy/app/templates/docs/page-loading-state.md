# Page loading state

Ember skeleton can be configured so that the main content area of your layouts shows a loading component when model data is being fetched,  or in fact at any time you choose.

## The `hideContent` prop

The layouts resposnd to the `hideContent` property in the `emberSkeleton` service. Thus, you can inject that service into any component, route, controller or service. The example below shows how the loading state can be swtiched on when a network request is sent, and then switched off after it has completed. 

{{docs-snippet name="hide-content-explicit.js"}}

## Automatically toggling the loading state

To automatically toggle the loading state of your layouts when Ember data is fetching data, define the `loading` action in your application route.

{{docs-snippet name="loading-state-application-route.js" title="routes/application.js"}}

## Customising the loading component

See {{link-to "layout components" "docs.layout-components"}} on how to customise your loading UI.
