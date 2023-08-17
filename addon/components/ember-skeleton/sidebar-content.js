import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/sidebar-content';

@tagName('')
@templateLayout(layout)
export default class SidebarContent extends Component {}
