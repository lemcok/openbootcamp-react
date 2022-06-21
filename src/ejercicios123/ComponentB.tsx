import { useState } from 'react';
import { Contact } from '../interfaces/Contact';

interface props {
   contact: Contact;
}
export const ComponentB = ({ contact }: props) => {
   const [status, setStatus] = useState(contact.online);

   const handleChangeStatus = () => {
      setStatus(!status);
   };
   return (
      <div className="border shadow p-3 rounded-xl bg-white">
         <div className="inline-flex gap-5">
            <h2 className='text-gray-700'>{`${contact.name} ${contact.lastname}`}</h2>
            <button
               className={`${ status ? 'bg-green-400' : 'bg-red-400' } text-xs text-gray-700 py-1 px-2 rounded`}
               onClick={handleChangeStatus}
            >
               {status ? 'Connect' : 'Disconnect'}
            </button>
         </div>
         <h4 className="text-sm text-gray-500">
            {!status ? 'En Linea' : 'No Disponible'}
         </h4>
      </div>
   );
};
