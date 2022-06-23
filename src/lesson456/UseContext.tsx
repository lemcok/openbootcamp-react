import { createContext, useContext, useState } from 'react';

type UserContextProps = {
   data: SessionState;
};
export const UserContext = createContext<UserContextProps>(
   {} as UserContextProps
);

//=========================================================

const Component1 = () => {
   const { data } = useContext(UserContext);
   return (
      <div className="border p-3 shadow rounded-md">
         <h1 className="text-[2rem] text-sky-600">component 1</h1>
         <h1>
            session: <pre>{data.session}</pre>
         </h1>
         <h1>
            El token: <pre>{data.token}</pre>
         </h1>
      </div>
   );
};

//=========================================================

const Component2 = () => {
   const { data } = useContext(UserContext);
   return (
      <div className="border p-3 shadow">
         <h1 className="text-[2rem] text-sky-600">component 2</h1>
         <h1>
            session: <pre>{data.session}</pre>
         </h1>
         <h1>
            El token: <pre>{data.token}</pre>
         </h1>
      </div>
   );
};
//=========================================================

interface SessionState {
   token: string;
   session: number;
}

export const MiComponenteConContexto = () => {
   const [sessionData, setSessionData] = useState<SessionState>({
      token: 'tokenejemplo',
      session: 1,
   });
   const handleUpdateSession = () => {
      setSessionData({ token: 'JWT123456', session: sessionData.session + 1 });
   };
   return (
      <UserContext.Provider
         value={{
            data: sessionData,
         }}
      >
         <Component1 />
         <Component2 />
         <hr />
         <div>
            <button
               className="bg-sky-500 py-1 px-2 rounded-lg text-white hover:bg-sky-700 transition-all"
               onClick={handleUpdateSession}
            >
               Aztualizar session
            </button>
         </div>
      </UserContext.Provider>
   );
};

//==========================================================
