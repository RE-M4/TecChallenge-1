import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  order: Order = new Order();
  orderId: string | null = null;

  constructor(private ordersService: OrdersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.orderId = params.get('id');
        if(this.orderId === null) {
          this.router.navigate(['/orders']);
        } else {
          this.getOrderById(this.orderId);
        }
      })
  }

  getOrderById(id: string): void {
    this.ordersService.getOrderById(id).subscribe(data => {
      this.order = data;
    })
  }

  deleteOrder(id: String): void {
    this.ordersService.deleteOrder(id).subscribe(() => {
      this.router.navigate(['/orders']);
    })
  }
}
