import { Alert, Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSwapiPerson from './useSwapiPerson';

const PersonDetailsPage = () => {
  const { id } = useParams();
  const {
    data,
    isInitialLoading: isLoading,
    error,
  } = useSwapiPerson({
    id: Number.parseInt(id ?? ''),
  });
  return (
    <div className="flex-1 p-6">
      <Spin spinning={isLoading}>
        {error ? (
          <Alert type="error" message={error.message} />
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </Spin>
    </div>
  );
};

export default PersonDetailsPage;
