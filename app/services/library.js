import Ember from 'ember';

export default Ember.Service.extend({
	current: null,

	setLibrary(library) {
		this.set('current', library);
	}
});
