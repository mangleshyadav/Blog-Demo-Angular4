import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input('page') page: number;
    @Input('count') count: number;
    @Input('pages') pages: number;
    @Input() loading: boolean;
    @Input() pagesToShow: number;


    @Output() goPrev = new EventEmitter<boolean>();
    @Output() goNext = new EventEmitter<boolean>();
    @Output() goPage = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    getMin(): number {
        return 1;
    }

    getMax(): number {
        let max = 10
        if (max > this.page) {
            max = this.page;
        }
        return max;
    }
    totalPages(): number {
        return this.page || 0;
    }
    onPage(n: number): void {
        this.goPage.emit(n);
    }

    onPrev(): void {
        this.goPrev.emit(true);
    }

    onNext(next: boolean): void {
        this.goNext.emit(next);
    }

    lastPage(): boolean {
        return this.page > this.pages;
    }


}