import Ember from 'ember';
import RollbackRoute from 'boombox/mixins/rollback-route';

export default Ember.Route.extend(RollbackRoute, {
	model() {
		return this.store.createRecord('library');
	},

	actions: {
		add(folder) {
			const model = this.modelFor(this.routeName);
			if (model.get('isNew')) {
				model.save().then(() => {
					model.pushObject(folder);
				})
			} else {
				this.modelFor(this.routeName).pushObject(folder);
			}
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
			const model = this.modelFor(this.routeName);
			if (!model.get('isNew')) {
				model.destroyRecord();
			}
			history.back();
		}
	}
});
