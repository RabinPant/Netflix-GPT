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

### Conditional Rendering for the Sign in and Sign Up form 
