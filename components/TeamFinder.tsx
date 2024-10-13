"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface Person {
  name: string;
  email: string;
  phone: string;
  team: string;
  requestType: string;
}

const TeamFinder = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [team, setTeam] = useState<string | undefined>();
  const [requestType, setRequestType] = useState<string | undefined>();
  const [people, setPeople] = useState<Person[]>([]);

  const handleFormSubmit = () => {
    if (!name || !email || !phone || !team || !requestType) {
      toast({
        title: "Submission Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const newPerson: Person = { name, email, phone, team, requestType };
    setPeople([...people, newPerson]);

    toast({
      title: "Submission Successful",
      description: `You have successfully submitted your details for ${requestType}.`,
    });

    // Clear form fields
    setName("");
    setEmail("");
    setPhone("");
    setTeam(undefined);
    setRequestType(undefined);
  };

  return (
    <section id="team-finder" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Team Finder
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find Your Team
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Enter your details to find and join a team.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Team
            </label>
            <Select onValueChange={setTeam}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Team A">Team A</SelectItem>
                <SelectItem value="Team B">Team B</SelectItem>
                <SelectItem value="Team C">Team C</SelectItem>
                <SelectItem value="Team D">Team D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Request Type
            </label>
            <Select onValueChange={setRequestType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Challenge">Challenge</SelectItem>
                <SelectItem value="Teammate">Teammate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-8">
          <Button onClick={handleFormSubmit} className="w-full">
            Submit
          </Button>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-extrabold text-gray-900">
            People Looking for a Challenge or Teammate
          </h3>
          <ul className="mt-4 space-y-4">
            {people.map((person, index) => (
              <li key={index} className="p-4 bg-white rounded-md shadow-sm">
                <p className="text-lg font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="text-sm text-gray-500">{person.email}</p>
                <p className="text-sm text-gray-500">{person.phone}</p>
                <p className="text-sm text-gray-500">
                  Preferred Team: {person.team}
                </p>
                <p className="text-sm text-gray-500">
                  Request Type: {person.requestType}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamFinder;
