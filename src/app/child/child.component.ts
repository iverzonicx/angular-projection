import { AfterViewInit, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() input: TemplateRef<any> | undefined
  
  ngOnInit(): void {
    // console.log(this.input)
  }

  ngAfterViewInit(): void {
    // console.log(this.input)
  }


}
