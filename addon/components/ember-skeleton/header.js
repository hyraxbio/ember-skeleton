import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/header';

@templateLayout(layout)
@tagName('')
export default class Header extends Component {}
