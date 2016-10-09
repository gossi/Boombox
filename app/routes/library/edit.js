import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('library', params.id);
	},

	actions: {
		add(folder) {
			console.log('add folder');
			this.modelFor(this.routeName).get('folders').pushObject(folder);
			console.log(this.modelFor(this.routeName).changedAttributes());
		},

		remove(folder) {
			this.modelFor(this.routeName).get('folders').removeObject(folder);
		},

		save() {
			console.log(this.modelFor(this.routeName).changedAttributes());
			this.modelFor(this.routeName).save().then(() => {
				history.back();
			});
		},

		delete() {
			this.modelFor(this.routeName).destroyRecord().then(() => {
				history.back();
			});
		},

		cancel() {
			history.back();
		}
	}
});
