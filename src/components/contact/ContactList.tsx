import { Contact } from '../../interfaces/Contact';
import { ContactItem } from './ContactItem';
const contacts: Contact[] = [
   {
      id: '1',
      name: 'juan',
      lastname: 'perez',
      email: 'juanp@example.com',
      online: true,
   },
   {
      id: '2',
      name: 'Camila',
      lastname: 'Savage',
      email: 'juanp@example.com',
      online: false,
   },
   {
      id: '3',
      name: 'Damaris',
      lastname: 'Tello',
      email: 'juanp@example.com',
      online: true,
   },
];
export const ContactList = () => {
   return (
      <div className="w-auto bg-slate-300 rounded-lg p-6 grid gap-3">
         {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
         ))}
      </div>
   );
};
