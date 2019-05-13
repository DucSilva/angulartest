import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserContact } from '../_core/model/usercontact.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
