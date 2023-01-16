import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-view-example',
  templateUrl: './view-example.component.html',
  styleUrls: ['./view-example.component.scss']
})
export class ViewExampleComponent {
  @ViewChild('thisTemplate') temp: TemplateRef<any> | undefined

}
