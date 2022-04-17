import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[850px] grid grid-cols-1 lg:grid-cols-3 gap-10 p-10'>
            <div className='rounded-lg shadow-2xl shadow-orange-200 border-2 border-orange-200 p-5'>
                <h1 className='text-2xl mb-2'>➤ Difference between `authorization` and `authentication`.</h1>
                <p className='text-lg'> <span className='underline font-bold mr-2'>Ans:</span>
                    Authorization is a process to give access someone for the specific resources.
                    <br />
                    Authentication is a process to identify or verify someone.
                </p>
            </div>

            <div className='rounded-lg shadow-2xl shadow-orange-200 border-2 border-orange-200 p-5'>
                <h1 className='text-2xl mb-2'>➤ Why are you using `firebase`? What other options do you have to implement authentication?</h1>
                <p className='text-lg'> <span className='underline font-bold mr-2'>Ans:</span>We are using Firebase because it is easy to use. Ther are some alternatives to firebase. They are: <span className='font-semibold'>Parse</span>, <span className='font-semibold'>Back4App</span>, <span className='font-semibold'>AWS Amplify</span>, <span className='font-semibold'>Kuzzle</span>, <span className='font-semibold'>Couchbase</span>  etc.</p>
            </div>

            <div className='rounded-lg shadow-2xl shadow-orange-200 border-2 border-orange-200 p-5'>
                <h1 className='text-2xl mb-2'>➤ What other services does `firebase` provide other than authentication?</h1>
                <p className='text-lg'> <span className='underline font-bold mr-2'>Ans:</span>Although we are using Firebase for athentications, ther are more use case of firebase. they are:
                    <ul className='pl-10'>
                        <li className='list-disc'>Create a great onboarding flow.</li>
                        <li className='list-disc'>Progressively roll out new features.</li>
                        <li className='list-disc'>Follow the user journey across devices.</li>
                        <li className='list-disc'>Add chat to your app.</li>
                        <li className='list-disc'>Optimize ads based on user behavior.</li>
                        <li className='list-disc'>Process third-party payments without a server.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;