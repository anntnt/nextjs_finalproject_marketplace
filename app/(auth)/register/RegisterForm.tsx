'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { date } from 'zod';
import { getSafeReturnToPath } from '../../../util/validation';
import ErrorMessage from '../../ErrorMessage';
import type { RegisterResponseBody } from '../api/register/route';

type Props = { returnTo?: string | string[] };

export default function RegisterForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('bd ' + birthday);
    console.log('emailAddress ' + emailAddress);
    console.log('lastName ' + lastName);
    console.log('firstName ' + firstName);

    const response = await fetch('api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        emailAddress,
        birthday,
        gender,
        userAddress,
      }),
    });

    const data: RegisterResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // router.push(`/profile/${data.user.username}`);

    // This is not a secure returnTo
    // if (props.returnTo) {
    //   console.log('Checks Return to: ', props.returnTo);
    //   router.push(props.returnTo || `/profile/${data.user.username}`);
    // }

    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );

    router.refresh();
  }

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={async (event) => await handleRegister(event)}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username*
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            required
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password*
            <input
              type="password"
              value={password}
              required
              onChange={(event) => setPassword(event.currentTarget.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First name*
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last name*
            <input
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email address*
            <input
              value={emailAddress}
              type="email"
              onChange={(event) => setEmailAddress(event.currentTarget.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Birth date*
            <input
              value={birthday}
              type="date"
              onChange={(event) => setBirthday(event.currentTarget.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Gender
            <select
              id="countries"
              value={gender}
              onChange={(event) => setGender(event.currentTarget.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Please select one...</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Address
            <input
              value={userAddress}
              onChange={(event) => setUserAddress(event.currentTarget.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-1000 focus:border-blue-1000 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-1000 dark:focus:border-blue-1000"
            />
          </label>
        </div>
        <div className="mb-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Apply to Sell on Vilya
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              required
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree to the Privacy Policy*
            </label>
          </div>
        </div>
        <div className="mb-5">
          <button className="text-white bg-blue-1000 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Register
          </button>
        </div>

        {errors.map((error) => (
          <div className="mb-5">
            <div className="error" key={`error-${error.message}`}>
              <ErrorMessage>{error.message}</ErrorMessage>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
