import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

//PouchDB.debug.enable('*');

var db = new PouchDB('local_pouch');

export default Adapter.extend({
  db: db
});
