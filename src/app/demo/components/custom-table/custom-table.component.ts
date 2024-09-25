import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';

interface TableAction {
  label: string;
  icon: string;
  color: string;
  callback: (row: any) => void; // Function to call when the action is triggered
}


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})


export class CustomTableComponent {
  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
    this.updatePagination();
  }

  @Input() columns: Array<{ header: string, field: string, isImage?: boolean, sortable?: boolean }> = [];
  @Input() data: any[] = [];
  @Input() actions: TableAction[] = []; // Accepts a list of actions from the parent component
  @Input() emptyMessage: string = 'No data available';
  @Input() imgClass: string = 'td-img';
  @Input() itemsPerPage: number = 5; 

  paginatedData: any[] = []; // Data for the current page
  pageSizes = [5, 10, 20]; // Options for number of items per page
  pageSize = 5; // Default number of items per page
  currentPage = 1; // Current page number
  startEntry = 0; // Starting entry number for display
  totalPages = 0; // Total number of pages
  endEntry = 0; // Ending entry number for display


  // Sorting
  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  // Pagination

  convertCurrencyStringToNumber(currencyString: string): number {
    let cleanedString = typeof currencyString === "string" ? currencyString.replace('Rp', '').trim() : currencyString;
    const withoutThousandSeparator = typeof cleanedString === "string" ? cleanedString.replace(/\./g, '') : cleanedString;
    const finalString =  typeof withoutThousandSeparator === "string" ? withoutThousandSeparator.replace(',', '.') : withoutThousandSeparator;
    return parseFloat(finalString);
  }

  get sortedData() {

    this.data = this.data.map(item => ({
      ...item,
      price: item.price,
      numberPrice: this.convertCurrencyStringToNumber(item.price), // Convert price to number
      stock: Number(item.stock),   // Convert stock to number
    }));

    let sortedData = [...this.data];

    if (this.sortedColumn === 'price') {
      this.sortedColumn = 'numberPrice';
    }

    if (this.sortedColumn) {
    
      sortedData.sort((a, b) => {
        const aValue = a[this.sortedColumn];
        const bValue = b[this.sortedColumn];

        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    if (this.sortedColumn === 'numberPrice') {
      this.sortedColumn = 'price';
    }

    return sortedData.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }


  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  sort(column: string) {
    if (this.sortedColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        this.sortedColumn = column;
        this.sortDirection = 'asc';
    }
    this.data = this.sortedData;
  }


  handleAction(action: TableAction, row: any) {
    action.callback(row); // Call the provided callback function
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.paginatedData = this.paginationService.paginate(this.data, this.currentPage, this.pageSize);
    this.updateEntryRange();
  }

  updateEntryRange() {
    this.startEntry = (this.currentPage - 1) * this.pageSize + 1;
    this.endEntry = Math.min(this.currentPage * this.pageSize, this.data.length);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  firstPage() {
    this.currentPage = 1;
    this.updatePagination();
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.updatePagination();
  }
 
  onPageSizeChange() {
    this.currentPage = 1; // Reset to the first page when the page size changes
    this.updatePagination();
  }
  
}
