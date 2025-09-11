import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { eTransactionType, Transaction } from '../../models/transaction';
import { RoundedIcon } from '../rounded-icon/rounded-icon';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule, RoundedIcon],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.scss',
})
export class TransactionList {
  @Input() transactions: Transaction[] = [];

  getIcon(type: eTransactionType) {
    switch (type) {
      case eTransactionType.AUTOMOBILE:
        return 'car';
      case eTransactionType.SPESA:
        return 'basket-shopping';
      case eTransactionType.STIPENDIO:
        return 'hand-holding-dollar';
      case eTransactionType.UTENZE:
        return 'lightbulb';
    }
  }
}
