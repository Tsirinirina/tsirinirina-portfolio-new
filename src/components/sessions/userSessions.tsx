"use client";

import { signOut, useSession } from "next-auth/react";

const UserSession = ({ children }: any) => {
  const { data } = useSession();

  return (
    <>
      <div>
        <div>{children}</div>
        <div>{JSON.stringify(data)}</div>
        <div>
          {data && <button onClick={() => signOut()}>Déconnexion</button>}
        </div>
      </div>
    </>
  );
};

export default UserSession;
