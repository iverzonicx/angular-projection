import { ChildComponent } from './../child/child.component';
import { Component, ViewChild, TemplateRef, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('refChild') refChild:TemplateRef<any> | undefined
  @ViewChild(ChildComponent) a:TemplateRef<any> | undefined

  @ViewChildren(ChildComponent) childrenComp:QueryList<any> | undefined
  @ViewChildren('refChild') childrenRef:QueryList<any> | undefined

  
  ngOnInit(): void {
      // console.log('refChild', this.refChild)
      // console.log('a', this.a)
  }

  ngAfterViewInit(): void {
      console.log('refChild', this.refChild)
      console.log('a', this.a)
      console.log('childrenComp', this.childrenComp?.toArray())
      console.log('childrenRef', this.childrenRef?.toArray())
  }
}
