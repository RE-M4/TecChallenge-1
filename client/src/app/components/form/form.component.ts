import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  isEditMode: boolean = false;
  order: Order = new Order();
  orderId: string | null = null;

  constructor(private ordersService: OrdersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.orderId = params.get('id');
        this.isEditMode = !!this.orderId;
      })
      if(this.isEditMode && this.orderId) {
        this.ordersService.getOrderById(this.orderId).subscribe(data => {
          this.order = data;
        })
      }
  }

  saveOrder(): void {
    if(this.isEditMode && this.orderId) {
      this.ordersService.updateOrder(this.orderId, this.order).subscribe(() => {
        this.router.navigate(['orders']);
      })
    } else {
      this.ordersService.createOrder(this.order).subscribe(() => {
        this.router.navigate(['orders']);
      })
    }
  }
}
