import Link from "next/link";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../src/components/layout";
import axios from "axios";

export default function Home({users}) {
    // const [users, setUsers] = useState([])
    //
    // useEffect(() => {
    //     async function readUsers() {
    //         console.log('calisti')
    //         const requestConfig = {
    //             method: 'get',
    //             url: 'http://localhost:8000/users'
    //         }
    //         const response = await axios.request(requestConfig)
    //         console.log(response.data)
    //         setUsers(response.data)
    //     }
    //
    //     readUsers()
    // }, [])

    return <Layout>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Home</h1>
        <Link href="/about"><a>About</a></Link>
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    id
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    username
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    email
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    status
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.username}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      {user.status}
                                    </span>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

Home.getInitialProps = async () => {
    console.log('calisti')
    const requestConfig = {
        method: 'get',
        url: 'http://localhost:8000/users'
    }
    const response = await axios.request(requestConfig)
    return {users: response.data}
}