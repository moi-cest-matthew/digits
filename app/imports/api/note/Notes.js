import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class NotesCollection {
  constructor() {
    this.name = 'Notes'; // Rename the collection to Notes
    this.collection = new Mongo.Collection(this.name);

    // Define the new schema with the specified fields
    this.schema = new SimpleSchema({
      note: String,
      contactID: String,
      owner: String,
      createdAt: Date,
    });

    this.collection.attachSchema(this.schema);

    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Notes = new NotesCollection();
