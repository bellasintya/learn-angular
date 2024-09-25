import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('Save button clicked!');
    // Add your save logic here, such as calling a service or updating a form
}

  saveNow() {

  }
  
  deleteRow() {
      
  }
  
  columns = [
      { header: 'Waktu Pembelian', field: 'dateTime', sortable: true },
      { header: 'Nomor Invoice', field: 'invoiceNo', sortable: true },
      { header: 'Nama Produk', field: 'goodsName', sortable: true  },
      { header: 'Pembayaran', field: 'paymentType', sortable: true  },
      { header: 'Status', field: 'status', sortable: true  },
  ];
  
  data = [
      {
          id: "01234",
          dateTime: "23 September 2024 11:25 AM",
          invoiceNo: "77097010",
          goodsName: "Keranjang Piknik, Tenda Mini",
          paymentType: "Bank Transfer",
          status: "Paid",
      },
      {
        id: "01235",
        dateTime: "24 September 2024 11:25 AM",
        invoiceNo: "77097011",
        goodsName: "Tenda Mini",
        paymentType: "COD",
        status: "Paid",
      },
      {
        id: "01236",
        dateTime: "25 September 2024 11:25 AM",
        invoiceNo: "77097012",
        goodsName: "Karpet Piknik",
        paymentType: "E-Money",
        status: "Paid",
      },
      {
        id: "01237",
        dateTime: "26 September 2024 11:25 AM",
        invoiceNo: "77097013",
        goodsName: "Tenda Mini, Karpet Piknik",
        paymentType: "Paylater",
        status: "Credit",
      },
    ];
  
  
    tableActions = [
        {
            label: 'Delete',
            icon: 'assets/icons/trash.svg',
            color: 'warning',
            callback: (row: any) => this.handleDelete(row)
        }
    ];
  
    handleEdit(row: any) {
    console.log('Edit clicked for:', row);
    // Handle edit logic here
    }
  
    handleDelete(row: any) {
    console.log('Delete clicked for:', row);
    // Handle delete logic here
    }
  
    actions = "Pilih"
  
    isModalVisible = false; // State to control modal visibility
  
    openModal() {
        this.isModalVisible = true; // Open the modal
    }
  
    onModalClose() {
        this.isModalVisible = false; // Handle modal close event
    }
  
    onModalConfirm() {
        console.log('Modal confirmed!'); // Handle modal confirm event
        this.isModalVisible = false; // Close modal after confirmation
    }

}

