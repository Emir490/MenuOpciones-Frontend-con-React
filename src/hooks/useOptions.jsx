import { useContext } from 'react'
import OptionsContext from '../context/OptionsProvider';

const useOptions = () => {
  return useContext(OptionsContext)
}

export default useOptions;