import Route from '@ember/routing/route';
import PeopleAndVotes from '../../../mixins/model-data/people-and-votes';

export default Route.extend(PeopleAndVotes, {});
