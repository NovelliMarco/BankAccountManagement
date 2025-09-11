import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, untracked } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { TransactionList } from '../../shared/transaction-list/transaction-list';
import { eTransactionType, Transaction } from '../../models/transaction';
import { Account } from '../../services/account';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TransactionList],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  saldoDisponibile = 1520.75;
  saldoContabile = 1520.75;

  operazioni: Transaction[] = [];

  showFilters = false;
  user!: User | null;

  constructor(private authService: Auth, private accountService: Account) {
    this.user = this.authService.loggedUser();
  }

  ngOnInit(): void {
    this.accountService.getAccountTransactions().subscribe();
  }

  private transactionsEffect = effect(() => {
    this.operazioni = this.accountService.accountTransactions();
  });

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
