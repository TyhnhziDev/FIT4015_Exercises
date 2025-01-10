// Khai báo mảng 
const customers = [ 
  { name: 'Alice', orders: [120, 250, 320]},
  { name: 'Bob', orders: [50, 100, 40]},
  { name: 'Charlie', orders: [400, 500]},
];
//Khởi tạo mảng rỗng mới
const newCustomers = []; 
// Duyệt qua từng phần tử của mảng customers
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  let totalOrders = 0;
  for (let j = 0; j < customer.orders.length; j++) {
      totalOrders += customer.orders[j];
  }
newCustomers.push({name: customer.name,totalOrders});
}
// Sắp xếp mảng mới theo tổng giá trị đơn hàng từ cao đến thấp
newCustomers.sort((x, y) => y.totalOrders - x.totalOrders);
console.log(newCustomers); //In ra màn hình