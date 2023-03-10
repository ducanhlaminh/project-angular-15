function FormatPrice(price: number = 20) {
        return Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
        }).format(price);
}

export default FormatPrice;
