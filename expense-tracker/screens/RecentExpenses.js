import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../utils/http";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function RecentExpenses() {
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpenses(expenses);
      } catch (e) {
        setError("Could not fetch expenses.");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  if (error && !isFetching) {
    return (
      <ErrorOverlay
        message={error}
        onConfirm={() => {
          setError(null);
        }}
      />
    );
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
