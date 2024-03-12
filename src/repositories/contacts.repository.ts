import { Contact, ContactCreate, ContactRepository } from "../interfaces/contact.interface";

export class ContactsRepositoryPrisma implements ContactRepository {
    create(data: ContactCreate): Promise<Contact> {
        
    }
}