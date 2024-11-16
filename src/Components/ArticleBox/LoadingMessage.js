import React from 'react'

function LoadingMessage() {
     return (
          <div class="w-full p-6 bg-gray-100 rounded-lg shadow-lg">
               <h2 className='text-4xl'>The server is not running.</h2>
               <br></br>
               <h1 class="text-2xl font-semibold text-gray-800 mb-4">Installation Instructions</h1>
               <p class="text-lg text-gray-700 mb-2">
                    Follow these steps to set up and run the project locally.
               </p>

               <h2 class="text-xl font-semibold text-gray-800 mt-4 mb-2">1. Run the Server</h2>
               <p class="text-md text-gray-600 mb-4">
                    First, start the backend server by running the following command:
               </p>
               <pre class="bg-gray-200 p-4 rounded-md text-gray-800">
                    <code>node server.js</code>
               </pre>

               <h2 class="text-xl font-semibold text-gray-800 mt-4 mb-2">2. Run the App</h2>
               <p class="text-md text-gray-600 mb-4">
                    Once the server is running, open a new terminal window and run the following command to start the frontend app:
               </p>
               <pre class="bg-gray-200 p-4 rounded-md text-gray-800">
                    <code>npm start</code>
               </pre>

               <p class="text-md text-gray-600 mt-4">
                    After both steps are completed, the app should be up and running in your local environment and make Repubblica beautiful.
               </p>
          </div>

     )
}

export default LoadingMessage
