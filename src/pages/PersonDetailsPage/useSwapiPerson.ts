import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';

interface IProps {
  id?: number;
}

const useSwapiPerson = ({ id }: IProps) => {
  return useQuery<any, Error>({
    queryKey: ['people', id],
    queryFn: () => {
      return fetch(`https://swapi.dev/api/people/${id}/`).then((it) => it.json());
    },
    staleTime: 24 * 60 * 60 * 1000,
    enabled: _.isNumber(id) && !_.isNaN(id),
  });
};
export default useSwapiPerson;
