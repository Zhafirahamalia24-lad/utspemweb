import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";


export default function Home() {
return (
<div>
<Hero />


<section className="py-16 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<PropertyCard title="Rumah Minimalis" price="750 Juta" image="/property1.jpg" />
<PropertyCard title="Apartemen Jakarta" price="1.2 M" image="/property2.jpg" />
<PropertyCard title="Villa Bandung" price="2.4 M" image="/property3.jpg" />
</div>
</section>
</div>
);
}
