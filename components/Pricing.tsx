import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Basic',
    price: 15,
    features: ['1 hour court rental', 'Locker room access', 'Equipment rental available'],
  },
  {
    name: 'Pro',
    price: 25,
    features: ['2 hour court rental', 'Locker room access', 'Equipment included', 'Pro shop discount'],
  },
  {
    name: 'Elite',
    price: 40,
    features: ['3 hour court rental', 'Locker room access', 'Equipment included', 'Pro shop discount', 'Personal coach session'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the Perfect Plan for You
          </p>
          <p className="mt-4 text-xl text-gray-500">
            We offer flexible pricing options to suit your needs and playing style.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-sm text-gray-500">For the {plan.name.toLowerCase()} padel enthusiast.</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/hour</span>
                </p>
                <Button className="mt-8 block w-full" size="lg">
                  Book Now
                </Button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;