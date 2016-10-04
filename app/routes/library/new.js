import Ember from 'ember';
import RollbackRoute from 'boombox/mixins/rollback-route';

export default Ember.Route.extend(RollbackRoute, {
	model() {
		return this.store.createRecord('library');
	},

	actions: {
		add(folder) {
			this.modelFor(this.routeName).get('folders').pushObject(folder);
		},

		remove(folder) {
			this.modelFor(this.routeName).get('folders').removeObject(folder);
		},

		save() {
			this.modelFor(this.routeName).save().then(() => {
				history.back();
			});
		},

		cancel() {
			history.back();
		}
	}
});
