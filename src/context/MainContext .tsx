import {useCercleContext} from './CercleContext';
import {useUserContext} from './UserContext';

export const useMainContext = () => {
  const cercleContext = useCercleContext();
  const userContext = useUserContext();

  return {
    ...cercleContext,
    ...userContext,
  };
};
