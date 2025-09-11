import {Component, effect, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, Location, NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {eTransactionType, Transaction} from '../../../models/transaction';
import {Account} from '../../../services/account';
import {Auth} from '../../../services/auth';
import {User} from '../../../models/user';

@Component({
  selector: 'card-detail-transaction',
  templateUrl: './card-detail-transaction.html',
  imports: [
    NgClass,
    DatePipe,
    CurrencyPipe,
    DecimalPipe
  ],
  styleUrls: ['./card-detail-transaction.scss']
})
export class Transazioni implements OnInit {
  searchTerm: string = '';

  transactions: Transaction[] = [
    { code: 'T001', reason: 'Pagamento stipendio', type: { id: eTransactionType.STIPENDIO, description: 'Stipendio' }, amount: 1500, date: '2025-09-10' },
    { code: 'T002', reason: 'Acquisto auto', type: { id: eTransactionType.AUTOMOBILE, description: 'Automobile' }, amount: -8000, date: '2025-09-09' },
    { code: 'T003', reason: 'Spesa supermercato', type: { id: eTransactionType.SPESA, description: 'Spesa' }, amount: -150, date: '2025-09-08' },
    { code: 'T004', reason: 'Pagamento bolletta luce', type: { id: eTransactionType.UTENZE, description: 'Utenze' }, amount: -60, date: '2025-09-07' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void { }

  filteredTransactions(): Transaction[] {
    if (!this.searchTerm) return this.transactions;
    const term = this.searchTerm.toLowerCase();
    return this.transactions.filter(t => t.reason.toLowerCase().includes(term));
  }

  tornaIndietro(): void {
    this.router.navigate(['/my-card']); // o window.history.back()
  }


}
