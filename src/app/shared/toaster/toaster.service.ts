import { Injectable } from '@angular/core';
import { ToasterService, Toast } from 'angular5-toaster';
@Injectable()
export class ToastWrapperService {

    constructor(private toasterService: ToasterService) {

    }

    POP(toast: Toast) {
        this.toasterService.pop(toast);
    }
}

    // type: string;
    // title?: string;
    // body?: any;
    // toastId?: string;
    // toastContainerId?: number;
    // onShowCallback?: OnActionCallback;
    // onHideCallback?: OnActionCallback;
    // timeout?: number;
    // timeoutId?: number | null;
    // bodyOutputType?: BodyOutputType;
    // clickHandler?: ClickHandler;
    // showCloseButton?: boolean;
    // closeHtml?: string;
    // toasterConfig?: ToasterConfig;
    // data?: any;