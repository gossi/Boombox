import Ember from 'ember';

export default Ember.Controller.extend({
	library: Ember.inject.service(),

	actions: {
		changeLibrary(lib) {
			this.get('library').setLibrary(lib);
		}
	}
});
