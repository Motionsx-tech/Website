import ServiceList from '../components/ServiceList';
//import Pricing from '../components/Pricing';


export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <ServiceList />
     
    </div>
  );
}