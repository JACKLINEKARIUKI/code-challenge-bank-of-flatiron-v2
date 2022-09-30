import React, { useState, useEffect, useMemo } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data));
  }, []);

  const transactionsList = useMemo(
    () =>
      transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(search.toLowerCase())
      ),
    [transactions, search]
  );

  return (
    <div>
      <Search filter={setSearch} />
      <AddTransactionForm
        addTransaction={setTransactions}
        transactions={transactions}
      />
      <TransactionsList transactions={transactionsList} />
    </div>
  );
}

export default AccountContainer;
