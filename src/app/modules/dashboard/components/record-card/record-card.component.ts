import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../../../core/models/record.interface';
import { environment } from '../../../../../environments/environment';
import { getRateClass } from '../../../../core/utils/getRateClass';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss'],
})
export class RecordCardComponent implements OnInit {
  @Input() record!: Record;
  IMAGE_URI: string = environment.API_IMAGE;
  constructor() {}

  ngOnInit(): void {}

  calculateRate(rate: number) {
    return getRateClass(rate);
  }
}
