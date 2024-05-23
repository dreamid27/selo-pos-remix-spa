// wrapper.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { makeElectricContext } from 'electric-sql/react';
import { ElectricDatabase, electrify } from 'electric-sql/wa-sqlite';
import { Electric, schema } from 'src/generated/client/index';

import supabase from '~/utils/supabaseProvider';

const { ElectricProvider, useElectric } = makeElectricContext<Electric>();

export const ElectricWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [electric, setElectric] = useState<Electric>();

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const { data } = await supabase.auth.getSession();

      // Initiate your Electric database
      const conn = await ElectricDatabase.init('electric.db');
      const electric = await electrify(conn, schema, {
        url: 'http://localhost:5133',
      });

      await electric.connect(
        `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcxNjQyNTcxMiwiZXhwIjoxNzI2NDI5MzEyfQ.y0HLh6BQAFONaAQDmj2WmXC_c4zCMV-NIrurcOMmzqM`
      );

      console.log('masukine');

      if (!isMounted) {
        return;
      }

      setElectric(electric);
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);

  if (electric === undefined) {
    return null;
  }

  return <ElectricProvider db={electric}>{children}</ElectricProvider>;
};

export { ElectricWrapper as ElectricProvider, useElectric };
