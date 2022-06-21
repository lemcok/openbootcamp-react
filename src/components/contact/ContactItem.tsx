import { useState } from 'react';
import { Contact } from '../../interfaces/Contact';

interface props {
   contact: Contact;
}
export const ContactItem = ({ contact }: props) => {
   const [isConnect, setIsConnect] = useState(contact.online)

   return (
      <div className="flex items-center shadow bg-white p-3 rounded-full w-60">
         <PingAnimation status={ isConnect ? 'green' : 'red' } />
         <p>{`${contact.name} ${contact.lastname}`}</p>
         <button 
            className="bg-sky-400 p-1 rounded-lg ml-2 text-zinc-100 hover:bg-sky-500 px-2"
            onClick={()=> setIsConnect(!isConnect)}
         >
            { isConnect ? 'off' : 'on' }
         </button>
      </div>
   );
};

interface props1 {
   status: 'green' | 'red';
}

const PingAnimation = ({ status = 'green' }: props1) => {
   return (
      <span className="flex h-3 w-3 mr-1 align-baseline">
         <span
            className={`bg-green-400 animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75`}
         ></span>
         <span
            className={`bg-green-400 relative inline-flex rounded-full h-3 w-3 `}
         ></span>
      </span>
   );
};
