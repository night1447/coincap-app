import { rootReducerType } from '../store/reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
export default useTypedSelector;

