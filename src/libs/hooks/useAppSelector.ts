import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";

export const useAppSelector = useSelector.withTypes<RootState>();
