import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { eTransactionType, Transaction } from '../models/transaction';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable()
export class Card {
  constructor(private http: HttpClient) {}

  private readonly mockedCardTransactions: Transaction[] = [
    {
      reason: 'Supermercato',
      amount: -85.4,
      date: '10/10/2025',
      code: 'TR0000001',
      type: { id: eTransactionType.SPESA, description: 'Spesa' },
    },
    {
      reason: 'Rimborso assicurazione',
      amount: 50.0,
      date: '10/10/2025',
      code: 'TR0000002',
      type: { id: eTransactionType.AUTOMOBILE, description: 'Automobile' },
    },
  ];

  private _cardTransactions: WritableSignal<Transaction[]> = signal<Transaction[]>([]);
  cardTransactions = this._cardTransactions.asReadonly();
  private setTransactions(transactions: Transaction[]) {
    this._cardTransactions.set(transactions);
  }

  getCardTransactions() {
    return this.http.post<Transaction[]>(`${environment.apiUrl}/card/transactions`, {}).pipe(
      tap({
        next: (t) => this.setTransactions(t),
        error: () => this.setTransactions(this.mockedCardTransactions),
      })
    );
  }
}
