import {useAvatarContext} from './AvatarContext';
import {useCercleContext} from './CercleContext';
import {useDateOfBirthContext} from './DateOfBirthContext';
import {useEmpreinteVocalContext} from './EmpreinteVocalContext';
import {useGenreContext} from './GenreContext';
import {useUserContext} from './UserContext';

export const useMainContext = () => {
  const cercleContext = useCercleContext();
  const userContext = useUserContext();
  const avatarContext = useAvatarContext();
  const genreContext = useGenreContext();
  const empreinteVocalContext = useEmpreinteVocalContext();
  const dateOfBirthContext = useDateOfBirthContext();

  return {
    ...cercleContext,
    ...userContext,
    ...avatarContext,
    ...genreContext,
    ...empreinteVocalContext,
    ...dateOfBirthContext,
  };
};
