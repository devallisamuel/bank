import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Details } from '../details';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
cards:Details[] = [];
errorMessage = '';
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getDetails().subscribe
    ({
      next: details => this.cards = details,
      error: err => this.errorMessage = err
    });
  }

}
