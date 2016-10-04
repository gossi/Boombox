import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
	title: DS.attr('string'),
	folders: DS.hasMany('folder'),
	artists: DS.hasMany('artist')
});
