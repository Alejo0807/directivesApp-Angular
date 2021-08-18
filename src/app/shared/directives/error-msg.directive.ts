import { Directive, OnInit, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color: string = 'red';
  private _msg: string = 'Este campo es obligatorio';


  private htmlElement: ElementRef<HTMLElement>

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set msg(value: string) {
    this._msg = value;
    this.setMsg();
  }
  @Input() set valid(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.remove('hidden');
    } else {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
  }


  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setClass();
    this.setColor();
    this.setMsg();
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMsg() {
    this.htmlElement.nativeElement.textContent = this._msg
  }

}
