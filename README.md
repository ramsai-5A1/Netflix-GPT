# Netflix GPT

- create react app
- configure and set-up tailwindcss
- Routing of App
- Header
- Login form
- Sign up form
- Form validation
- useRef Hook
- Added Backend for 2 apis (login and signup using jwt and express server)
- Then added redux store and stored the data (token info) in redux user-slice
- Bugfix: Redirect user to /browse page, if token is valid otherwise redirect to /login page
- Get data (movies list) from backend api
- Created custom-hook to get and store in redux-store
- Planning for MainContainer and SecondaryContainer
- Fetch Data for Trailer video and store it in redux-store
- Embedded youtube video and made it autoplay and mute
- Tailwind classes to make MainContainer awesome
- Build SecondaryComponent
- Build Movie list
- Build Movie card
- Backend apis for movies and trailers
- Made browser page amazing with tailwindcss
- usePopularMovies custom-hook
- GPT search feature
- GPT search bar
- added multi-lingual feature to GPT search page
- Gpt search api call (to local backend since openAi api didn't worked out to me)
- memoization
- Adding .env file (adding it to .gitignore)
- Made our site responsive


<!-- react 2
java 3
aws
springboot 2
mariadb
db
kafka
oops

react 18
why react ? why not angular ?
nextjs (server side rendering) -->




# Features

- Login/signup
    - sign in/sign up form
    - redirect to browse page
- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N

- NetflixGPT
    - Search Bar
    - Movie Suggestions