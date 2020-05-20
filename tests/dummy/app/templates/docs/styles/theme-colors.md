# Theme colours

A map of theme colours colours in the `$theme-colors` variable. This is borrowed from Bootstrap.

{{docs-snippet name="default-bootstrap-colours.scss" language="sass"}}

## Theme color CSS selectors

The Ember Skeleton `SASS` code will create multiple CSS style rules for each of the selectors listed below- one for each item in the `$theme-colors` map. Each rule will apply the colour in the appropriate way.

    .alert-*
    .badge-*
    .bg-*
    .text-*
    .list-group-item-*
    .fill-*
    .stroke-*
    .btn-*
    .btn-outline-*

## Bootstrap YIQ threshold

Some bootstrap components apply bootstrap colours tot he backgrounds of elements that will have text in theme- for example `.badge-*` and `.btn-*`. In order for such text to remain readable, it may need to be dark in some cases, and light in others.

Note that the Tripadvisor badge has dark text above, while the Reddit badge has white text.

Both a light and dark text color are defined by the `$yiq-text-dark` and `$yiq-text-light` variables.

The `$yiq-contrasted-threshold` variable is a measure of when a colour is light enough to require dark text on top of it. It can be anything from 0 to 255. The default is 160.

The higher this value is, the lighter a background is allowed to be, while still maintaining light text on top of it. Att 255 text will always be white, and at 0, text will always be dark.