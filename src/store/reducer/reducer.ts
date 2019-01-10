
import { IState, IAction } from '../types/types';

const defaultState: IState = {
    error: false,
    loading: false,
    repoList: []
};

const defaultAction: IAction = {
    type: '@@INIT'
}

export default (state: IState = defaultState, action: IAction = defaultAction): IState => {
    switch (action.type) {
        default:
            return state;
    }
}
