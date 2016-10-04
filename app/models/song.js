import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
	title: DS.attr('string'),
	number: DS.attr('number'),
	year: DS.attr('number'),
	artist: DS.belongsTo('artist'),
	album: DS.belongsTo('album'),
	genre: DS.belongsTo('genre')
});
