import React from 'react';
import { useQuery } from 'react-query';
import { NumberedList } from '../lists/numbered';
import { fetchClients } from '../../api/clientsApi/clients-api';
import { SmallClientListItem } from './small-list-item';

const ClientList = () => {
  const {
    data: clients,
    isLoading,
    isSuccess,
    isError,
  } = useQuery('clients', fetchClients);

  return (
    <>
      {isError ? <p>There was a problem with fetching clients</p> : null}
      {isLoading ? <p>Fetching clients</p> : null}
      {isSuccess ? (
        <NumberedList
          items={clients}
          sourceName="client"
          // @ts-ignore
          ItemComponent={SmallClientListItem}
        />
      ) : null}
    </>
  );
};

export default ClientList;
