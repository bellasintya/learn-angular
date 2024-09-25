import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomButtonComponent } from '../demo/components/custom-button/custom-button.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(CustomButtonComponent) customButton!: CustomButtonComponent;

    onSave() {
        console.log('Save button clicked!');
        // Add your save logic here, such as calling a service or updating a form
    }

    saveNow() {

    }

    deleteRow() {
        
    }

    columns = [
        { header: 'Nama Barang', field: 'goodsName', sortable: true },
        { header: 'Gambar', field: 'picture', isImage: true },
        { header: 'Harga', field: 'price', sortable: true  },
        { header: 'Satuan', field: 'unit', sortable: true  },
        { header: 'Stok', field: 'stock', sortable: true  },
    ];

    data = [
        {
            id: "1234",
            goodsName: "Keranjang Piknik",
            picture: "assets/images/keranjang_buah.jpg",
            price: "Rp500.000,00",
            unit: "Pcs",
            stock: "12",
        },
        {
            id: "2345",
            goodsName: "Karpet Piknik",
            picture: "assets/images/karpet_piknik.jpg",
            price: "Rp65.000,00",
            unit: "Pcs",
            stock: "65",
        },
        {
            id: "3456",
            goodsName: "Tenda Mini",
            picture: "assets/images/tenda_piknik.jpg",
            price: "Rp700.000,00",
            unit: "Pcs",
            stock: "5",
        }
    ];


    tableActions = [
        {
            label: 'Edit',
            icon: 'assets/icons/pencil.svg',
            color: 'success',
            callback: (row: any) => this.handleEdit(row)
        },
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
