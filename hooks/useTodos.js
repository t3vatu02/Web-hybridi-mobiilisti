import { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {

    case 'ADD':
      if (!action.payload.trim()) return state;
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload,
          done: false
        }
      ];

    case 'TOGGLE':
      return state.map(t =>
        t.id === action.payload
          ? { ...t, done: !t.done }
          : t
      );

    case 'REMOVE':
      return state.filter(t => t.id !== action.payload);

    default:
      return state;
  }
}

export function useTodos() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = (text) => {
    dispatch({ type: 'ADD', payload: text });
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return { tasks, addTask, toggleTask, removeTask };
}
