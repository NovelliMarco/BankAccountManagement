import { BaseItem } from './generics';

export interface Transaction {
  code: string;
  reason: string;
  type: TransactionType;
  amount: number;
  date: string;
}

export interface TransactionType {
  id: eTransactionType;
  description: string;
}

export enum eTransactionType {
  STIPENDIO = 1,
  AUTOMOBILE = 2,
  SPESA = 3,
  UTENZE = 4,
}
