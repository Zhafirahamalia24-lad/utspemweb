export default function ContactForm() {
return (
<form className="space-y-4 mt-4">
<input
type="text"
placeholder="Nama"
className="w-full border p-3 rounded"
/>
<input
type="email"
placeholder="Email"
className="w-full border p-3 rounded"
/>
<textarea
placeholder="Pesan"
className="w-full border p-3 rounded"
rows="5"
></textarea>
<button className="bg-green-600 text-white px-6 py-3 rounded">
Kirim Pesan
</button>
</form>
);
}
