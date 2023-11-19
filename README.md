# Netflix-GPT

-- Install tailwind for the design

## Planning:
Login & SignUp <br>
  - Sign In / Sign Up form
  - redirect to Browse page
  - Browse (after authentication)
      - Header
      - Main Movie
          - Tailer in Background
          - Title & Description
          - Movie Suggestion
              - MovieLists

    - Netflix GPT
      - Search Bar
      - Movie Suggestion
      - Movie API for suggestion
     

    # React-Router-DOM:
    
    npm i -D react-router-dom

```
    import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
```


# Conditional Rendering for the Sign In and Sign Up Form:
```
const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="./src/assets/netflix_body.jpg" alt="body_logo" />
      </div>
      <form className="p-12 absolute bg-black w-3/12 mx-auto left-0 right-0 my-36 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="User Name"
            className="p-4 my-3 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:text-gray-400"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );

```
# Form Validation & making use of hook useRef:




# Firebase

npm install firebase<br>
Firebase config :
```
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpI2KCcD0vZeIUAlIR5SkeNmDr4FMX8Y",
  authDomain: "netflix-gpt-5a224.firebaseapp.com",
  projectId: "netflix-gpt-5a224",
  storageBucket: "netflix-gpt-5a224.appspot.com",
  messagingSenderId: "282318624266",
  appId: "1:282318624266:web:111ab2be71c4545864f1f3",
  measurementId: "G-QHX13LLXWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

npm install -g firebase-tools
firebase login
firebase init
firebase deploy



making use fo useRef hook to get the value and transfering that value of SignIn form for validation:<br>
also that value we get from useRef from signUp page we send to firebase Auth API for authentication if that value is signedup or not<br>
storing value in the firebase storage<br>
as soon as firebase auth api authenticate, immidiately store that value in the redux store so we can make use of it later
