import Ember from 'ember';
const dialog = require('electron').remote.dialog;

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
		save() {
			this.sendAction('save', this.get('library'));
		},

		cancel() {
			this.sendAction('cancel');
		},

		delete() {
			this.sendAction('delete');
		},

		add() {
			dialog.showOpenDialog({properties: ['openDirectory']}, (paths) => {
				if (paths.length && paths.length > 0) {
					const path = paths[0];
					const library = this.get('library');
					let exists = false;
					library.get('folders').forEach((folder) => {
						if (folder.get('path') == path) {
							exists = true;
						}
					});

					if (!exists) {
						const folder = this.get('store').createRecord('folder', {
							path: path
						});
						folder.save();
						// library.get('folders').pushObject(folder);
						this.sendAction('add', folder);
					}
				}
			});
		},

		remove() {
			const paths = document.querySelector('#librarypaths');
			if (paths.value) {
				this.get('store').findRecord('folder', paths.value).then((folder) => {
					this.sendAction('remove', folder);
					folder.deleteRecord();
					// this.get('library').get('folders').removeObject(folder);
				});
			}
		}
	}
});
