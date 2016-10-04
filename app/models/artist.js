import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
	title: DS.attr('string'),
	library: DS.belongsTo('library'),
	albums: DS.hasMany('album'),
	songs: DS.hasMany('song')
});
