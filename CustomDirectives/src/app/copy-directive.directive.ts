import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCopyDirective]'
})
export class CopyDirectiveDirective {

  @Input('appCopyDirective') set appCopyDirective (n:any){
    console.log(n);
    
    for(let i=0 ; i<n;i++){
      this.VCRef.createEmbeddedView(this.tempRef);
    }
  };

  constructor(private tempRef:TemplateRef<any> , private VCRef:ViewContainerRef) {
    // console.log(this.n);
    
    // for(let i=0 ; i<this.n;i++){
    //   this.VCRef.createEmbeddedView(this.tempRef);
    // }
   }

}
