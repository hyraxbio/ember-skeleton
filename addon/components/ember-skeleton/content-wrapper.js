import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/content-wrapper';

@tagName('')
@templateLayout(layout)
export default class ContentWrapper extends Component {}
