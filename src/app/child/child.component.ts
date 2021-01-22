import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
 @Input() data: any[];
  @Input() itemTemplate: TemplateRef<HTMLElement>; 
  // a template reference of a HTML element
  constructor() { }

  ngOnInit() {
  }

}