import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, OnDestroy, ViewChild, ViewContainerRef, SimpleChanges, OnChanges } from '@angular/core';
import { ContentComponent } from 'src/app/pages/content/content.component'; // Importe o caminho correto para o ContentComponent
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-comp-dinamico',
  templateUrl: './comp-dinamico.component.html',
  styleUrls: ['./comp-dinamico.component.css']
})

export class CompDinamicoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() switchCondition: string | undefined;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  private componentRef: ComponentRef<any> | null = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.renderComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['switchCondition'] && !changes['switchCondition'].firstChange) {
      const newSwitchCondition = changes['switchCondition'].currentValue;
      this.switchCondition = newSwitchCondition; // Força a atualização da propriedade
      this.renderComponent();
    }
    if (changes['switchCondition'] && !changes['switchCondition'].firstChange) {
      this.renderComponent();
    }
  }

  private renderComponent(): void {
    let componentType: any;


    switch (this.switchCondition) {
      case 'content':
        componentType = ContentComponent;
        break;
        case 'calendar':
          componentType = CalendarComponent;
          break;
      default:
        componentType = ContentComponent;
        break;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    if (this.componentRef) {
      this.componentRef.destroy();
    }

    this.componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  
}
