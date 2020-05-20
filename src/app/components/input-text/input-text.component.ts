import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Input()
  label: string;

  @Input()
  controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
