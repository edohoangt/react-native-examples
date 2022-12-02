import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
  setExpenses: (expenses) => {},
}); // default value

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "UPDATE":
      const toUpdateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const toUpdateExpense = state[toUpdateExpenseIndex];
      const updatedItem = { ...toUpdateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[toUpdateExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        data: expenseData,
      },
    });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
    setExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
