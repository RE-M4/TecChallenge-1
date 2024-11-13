import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { RouterModule } from '@angular/router';
import { Order } from '../../models/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 3;
  orders: Array<Order> = new Array<Order>();

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
      this.getAllOrders();
  }

  public getAllOrders(): void {
    this.ordersService.getOrders(this.currentPage, this.pageSize).subscribe(data => {
      this.orders = data.orders;
      this.totalItems = data.meta.totalItems;
      this.totalPages = data.meta.totalPages;
    })
  }

  public onPageChange(page: number): void {
    this.currentPage = page;
    this.getAllOrders(); 
  }
}
