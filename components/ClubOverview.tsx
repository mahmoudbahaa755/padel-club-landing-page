import { Clock, Users, Dumbbell } from 'lucide-react';

const ClubOverview = () => {
  return (
    <section id="overview" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Club Overview</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience Padel at Its Finest
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our state-of-the-art facilities and services are designed to provide you with the ultimate padel experience.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Extended Hours</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Open daily from 6 AM to 11 PM, giving you ample time to play at your convenience.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Professional Coaching</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our experienced coaches offer personalized training sessions for players of all levels.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Dumbbell className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Modern Facilities</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Enjoy our 8 professional-grade courts, locker rooms, and a fully-equipped pro shop.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ClubOverview;