export default function PropertyCard({ title, price, image }) {
return (
<div className="bg-white shadow rounded-lg overflow-hidden">
<img src={image} alt={title} className="w-full h-48 object-cover" />
<div className="p-4">
<h3 className="text-xl font-semibold mb-2">{title}</h3>
<p className="font-bold text-lg mb-4">{price}</p>
<button className="bg-blue-600 text-white px-4 py-2 rounded">Detail</button>
</div>
</div>
);
}
