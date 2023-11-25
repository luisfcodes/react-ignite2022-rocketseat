import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: Date;
}

interface CreateTransactionData {
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionData) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const { data } = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(data);
  }

  async function createTransaction(transaction: CreateTransactionData) {
    const { category, description, price, type } = transaction;

    const { data } = await api.post("/transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((oldTransactions) => [data, ...oldTransactions]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
