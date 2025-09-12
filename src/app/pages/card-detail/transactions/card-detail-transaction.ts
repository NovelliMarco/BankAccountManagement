import { Component, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Transaction } from '../../../models/transaction';
import { TransactionList } from '../../../shared/transaction-list/transaction-list';
import { Card } from '../../../services/card';

@Component({
  selector: 'card-detail-transaction',
  templateUrl: './card-detail-transaction.html',
  imports: [CommonModule, TransactionList],
  styleUrls: ['./card-detail-transaction.scss'],
})
export class Transazioni implements OnInit {
  showFilters = false;
  operazioni: Transaction[] = [];

  constructor(private router: Router, private cardService: Card) {}

  ngOnInit(): void {
    this.cardService.getCardTransactions().subscribe();
  }

  private transactionsEffect = effect(() => {
    this.operazioni = this.cardService.cardTransactions();
  });

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  goBack(): void {
    this.router.navigate(['/my-card']);
  }
}
