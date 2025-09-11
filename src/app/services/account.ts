import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { eTransactionType, Transaction } from '../models/transaction';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable()
export class Account {
  constructor(private http: HttpClient) {}

  private readonly mockedAccountTransactions: Transaction[] = [
    {
      reason: 'Stipendio',
      amount: 2000,
      date: '10/10/2025',
      code: 'TR0000001',
      type: { id: eTransactionType.STIPENDIO, description: 'Stipendio' },
    },
    {
      reason: 'Supermercato',
      amount: -85.4,
      date: '10/10/2025',
      code: 'TR0000002',
      type: { id: eTransactionType.SPESA, description: 'Spesa' },
    },
    {
      reason: 'Bolletta luce',
      amount: -120.6,
      date: '10/10/2025',
      code: 'TR0000003',
      type: { id: eTransactionType.UTENZE, description: 'Utenze' },
    },
    {
      reason: 'Rimborso assicurazione',
      amount: 50.0,
      date: '10/10/2025',
      code: 'TR0000004',
      type: { id: eTransactionType.AUTOMOBILE, description: 'Automobile' },
    },
  ];

  private _accountTransactions: WritableSignal<Transaction[]> = signal<Transaction[]>([]);
  accountTransactions = this._accountTransactions.asReadonly();
  private setTransactions(transactions: Transaction[]) {
    this._accountTransactions.set(transactions);
  }

  getAccountTransactions() {
    return this.http.post<Transaction[]>(`${environment.apiUrl}/account/transactions`, {}).pipe(
      tap({
        next: (t) => this.setTransactions(t),
        error: () => this.setTransactions(this.mockedAccountTransactions),
      })
    );
  }
}
