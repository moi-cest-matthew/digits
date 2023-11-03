import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class ContactsCollection {
  constructor() {
    this.name = 'Contacts'; // Rename the collection to Contacts
    this.collection = new Mongo.Collection(this.name);

    // Define the new schema with the specified fields
    this.schema = new SimpleSchema({
      firstName: String, // Add firstName field
      lastName: String, // Add lastName field
      address: String, // Add address field
      image: String, // Add image field
      description: String, // Add description field
      owner: String, // Add owner field
    });

    this.collection.attachSchema(this.schema);

    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Contacts = new ContactsCollection();
