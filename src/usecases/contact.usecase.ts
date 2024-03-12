import { ContactCreate, ContactRepository } from "../interfaces/contact.interface";
import { ContactsRepositoryPrisma } from "../repositories/contacts.repository";

export class ContactUseCase {
    private contactRepository: ContactRepository

    constructor() {
        this.contactRepository = new ContactsRepositoryPrisma()
    }

    async create({ email, name, phone, userEmail }: ContactCreate) {

    }
}