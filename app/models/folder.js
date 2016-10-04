import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
	path: DS.attr('string'),
	library: DS.belongsTo('library')
});
