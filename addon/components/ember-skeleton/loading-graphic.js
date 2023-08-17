import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/loading-graphic';

@templateLayout(layout)
@tagName('')
export default class LoadingGraphic extends Component {}
