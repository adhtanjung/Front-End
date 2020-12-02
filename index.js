const { privateDecrypt } = require("crypto");

const lelang = (n) => {
	let products = { baju: 10000, celana: 20000, kacamata: 30000 };

	for (let i = 1; i <= n; i++) {
		products.baju += Math.ceil(products.baju * 0.1);
		products.celana += Math.ceil(products.celana * 0.2);
		products.kacamata += Math.ceil(products.kacamata * 0.3);
	}
	return `Di menit ke-${n}
    Nama Barang: Baju, harga = Rp. ${products.baju.toLocaleString()}
    Nama Barang: Celana, harga = Rp. ${products.celana.toLocaleString()}
    Nama Barang: Kacamata, harga = Rp. ${products.kacamata.toLocaleString()}`;
};

console.log(lelang(1));
console.log(lelang(5));
console.log(lelang(10));
