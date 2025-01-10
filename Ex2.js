// Khai báo thư viện
const library = {
    Science: { total: 120, borrowed: 30 },
    Literature: { total: 80, borrowed: 25 },
    Math: { total: 100, borrowed: 10 },
    History: { total: 90, borrowed: 50 },
  };
  // Tính tổng số sách
  let totalBooks = 0;
  for (const loaiSach in library) {
    totalBooks += library[loaiSach].total - library[loaiSach].borrowed;
  }
  // Tìm loại sách có tỷ lệ mượn cao nhất
  let highestBorrowedRate = 0;
  let highestBorrowedloaiSach = '';
  for (const loaiSach in library) {
    const borrowedRate = library[loaiSach].borrowed / library[loaiSach].total;
    if (borrowedRate > highestBorrowedRate) {
      highestBorrowedRate = borrowedRate;
      highestBorrowedloaiSach = loaiSach;
    }
  }
  console.log("Loại sách có tỷ lệ mượn cao nhất:", highestBorrowedloaiSach);
  console.log("Tỷ lệ mượn:", highestBorrowedRate);
  console.log("Tổng số sách hiện có:", totalBooks);