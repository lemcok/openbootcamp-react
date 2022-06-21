import { Contact } from '../interfaces/Contact';
import { ComponentB } from './ComponentB';

const contacts: Contact[] = [
   {
      id: '1',
      name: 'Juan',
      lastname: 'Perez',
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

export const ComponentA = () => {
   return (
      <div className='p-4 grid gap-3'>
         <h1 className='text-center text-[2.5rem] text-gray-800'>Contacts</h1>
         {contacts.map((contact) => (
            <ComponentB key={contact.id} contact={contact} />
         ))}
      </div>
   );
};
