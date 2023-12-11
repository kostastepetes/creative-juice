# Creative Juice

Creative Juice is an online platform that different creative people can join and connect with other creatives. Enabling an unlimited knowledge exchange, idea-sharing and inspiration environment where like-minded people can network with each other online or face-to-face over coffee.

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kostastepetes/creative-juice">
    <img src="src\assets\Creative Juice Logo 4.png" alt="Logo" width="300" height="300">
  </a>

  <h3 align="center">Creative Juice</h3>

  <p align="center">
    🥤 Creative Juice is an online platform that connects creative people and allows them to exchange knowledge and ideas online or face-to-face over coffee.
    <br />
    <a href="https://github.com/kostastepetes/creative-juice"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://creative-juice-dev.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/kostastepetes/creative-juice/issues">Report Bug</a>
    ·
    <a href="https://github.com/kostastepetes/creative-juice/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Creative Juice is an online platform that different creative people can join and connect with other creatives. Enabling an unlimited knowledge exchange, idea-sharing and inspiration environment where like-minded people can network with each other online or face-to-face over coffee. Made with Vite + Vue 3 + Bootstrap 5 + GSAP + Supabase.

### Built With


* [![Vue][Vue]][Vue-url]
* [![Supabase][Supabase]][Supabase-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

  * npm
  ```sh
  npm create vite@latest creative-juice --template vue
  ```
  
  * npm
  ```sh
  npm install @supabase/supabase-js boostrap
  ```
  

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kostastepetes/creative-juice.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Gain Access to Supabase

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_For more examples, please refer to the [Documentation](https://github.com/kostastepetes/creative-juice)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Finish initial development sprint
- [x] Add Documentation
- [ ] Add more feautres


See the [open issues](https://github.com/kostastepetes/creative-juice/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

LinkedIn - [@kostastepetes](https://www.linkedin.com/in/kostas-tepetes) 

Project Link: [https://github.com/kostastepetes/creative-juice](https://github.com/kostastepetes/creative-juice)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kostastepetes/creative-juice.svg?style=for-the-badge
[contributors-url]: https://github.com/kostastepetes/creative-juice/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kostastepetes/creative-juice.svg?style=for-the-badge
[forks-url]: https://github.com/kostastepetes/creative-juice/network/members
[stars-shield]: https://img.shields.io/github/stars/kostastepetes/creative-juice.svg?style=for-the-badge
[stars-url]: https://github.com/kostastepetes/creative-juice/stargazers
[issues-shield]: https://img.shields.io/github/issues/kostastepetes/creative-juice.svg?style=for-the-badge
[issues-url]: https://github.com/kostastepetes/creative-juice/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kostas-tepetes
[Vue]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Supabase]: https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge
[Supabase-url]: https://supabase.com/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/



# Documentation

- Backend
    - Supabase Schema
    - Tables
        - Users
        - Profiles
        - Locations
        - CoffeeRequests
        - Chat
        - Waitlist
    - supabase.js
    - Project Init
    - Git Init
- Frontend
    - App.vue
    - main.js

 - Components
    - Section.vue
    - Infobar.vue
    - Info.vue
    - Navbar.vue
    - Footer.vue
    - Avatar.vue
    - BackgroundImage.vue
    - Login.vue
    - Register.vue
    - Chat.vue
    - CoffeeRequest.vue
    - Waitlist.vue

 - Views
    - Homepage
    - About
    - Auth
    - Account
    - Profile
    - Community
    - Discover
    - SubmitLocation

# Backend:

The backend is entirely based on Supabase which is a Postgres Firebase alternative that provides database, auth, realtime APIs all hosted on cloud with the free tier option plan etc.

### Supabase Tables:

**Users:**

```sql
create table
  public."Users" (
    created_at timestamp with time zone not null default now(),
    email text null,
    password text null,
    username text null,
    id uuid not null,
    constraint Users_pkey primary key (id),
    constraint Users_id_fkey foreign key (id) references "Profiles" (id)
  ) tablespace pg_default;
```

**Profiles:**

```sql
create table
  public."Profiles" (
    created_at timestamp with time zone not null default now(),
    username text null,
    bio text null,
    project_url1 text null,
    portfolio text null,
    avatar_url text null,
    background_url text null,
    updated_at timestamp with time zone null,
    id uuid not null,
    project_url2 text null,
    project_url3 text null,
    job text null,
    constraint Profiles_pkey primary key (id)
  ) tablespace pg_default;
```

**Locations:**

```sql
create table
  public."Locations" (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    name text null,
    description text null,
    contact_info text null,
    address text null,
    "imageUrl" text null,
    city text null,
    type text null,
    approved boolean null default false,
    constraint Locations_pkey primary key (id)
  ) tablespace pg_default;
```

**Coffee Requests:**

```sql
create table
  public."Coffee Requests" (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    message text null,
    sender text null,
    receiver text null,
    location text null,
    constraint Coffee Requests_pkey primary key (id)
  ) tablespace pg_default;
```

**Chat:**

```sql
create table
  public."Chats" (
    id bigint generated by default as identity,
    timestamp timestamp with time zone not null default now(),
    message text null,
    sender text null,
    recipient text null,
    read boolean null,
    constraint Chats_pkey primary key (id)
  ) tablespace pg_default;
```

**Waitlist:**

```sql
create table
  public."Waitlist" (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    name text null,
    email text null,
    city text null,
    constraint Waitlist_pkey primary key (id)
  ) tablespace pg_default;
```

**supabase.js:**

The provided code is initializing a Supabase client, which is used to interact with a Supabase project.

`import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)`

Here's a step-by-step explanation:

1. `import { createClient } from '@supabase/supabase-js'`: This line imports the `createClient` function from the `@supabase/supabase-js` package. This function is used to create a new Supabase client.

1. `const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL`: This line retrieves the Supabase URL from the environment variables (the .env file of the project). This URL is specific to your Supabase project and is used to connect to your database.

1. `const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY`: This line retrieves the Supabase anonymous key from the environment variables (the .env file of the project). This key is also specific to your Supabase project and is used to authenticate requests.

1. `export const supabase = createClient(supabaseUrl, supabaseAnonKey)`: This line creates a new Supabase client using the previously retrieved Supabase URL and anonymous key. The `createClient` function returns a client object that provides methods to interact with your Supabase project, such as querying your database or managing user authentication.

This code is typically placed in a separate module that is imported wherever a Supabase client is needed. This allows the same Supabase client to be used across different parts of your application, ensuring consistent behavior.

## Project Init:

1. **Create a new Vue project with Vite**

`Use the following command to create a new Vue project with Vite:`

    `npm create vite@latest creative-juice --template vue`

You will be prompted to pick a preset. You can choose to create the project with TypeScript, Vue Router.

2. **Navigate to the project directory and install dependencies**

`Change to the newly created project directory and install the necessary dependencies:`

    `cd creative-juice
     npm install`

Then, start the development server:

    `npm run dev`

3. **Install Supabase**

`Supabase is an open-source Firebase alternative. To install Supabase in your project, use the following command:`

    `npm install @supabase/supabase-js`

4. **Install Bootstrap**

`Bootstrap is a popular CSS framework that can be used to build responsive layouts. Install Bootstrap in your project using the following command:`

    `npm install bootstrap`

After installing Bootstrap, you need to import it in your main.js file:

    `import 'bootstrap/dist/css/bootstrap.css'`

## Git Init:

### Create a new repository on the command line

```
echo "# creativejuice" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/kostastepetes/creativejuice.git
  git push -u origin main
```

### …or push an existing repository from the command line

```
git remote add origin https://github.com/kostastepetes/creativejuice.git
git branch -M main
git push -u origin main
```

# Frontend:

The frontend is made with Vue 3 + Boostrap 5 + GSAP and communicates with the Supabase backend.

**App.vue:**

The App.vue of the project is a Vue.js component that uses the Supabase library for user authentication. It sets up a session and listens for changes in the authentication state.

Let's break it down:

`<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from './supabase'

const session = ref()`

In the above code, the `onMounted` and `ref` functions are imported from Vue.js. The `onMounted` function is a lifecycle hook that runs after the component is mounted, and `ref` is used to create reactive references. The `supabase` object is imported from a local file. A `session` reference is created, which will hold the current session data.

`onMounted(() => {
 supabase.auth.getSession().then(({ data }) => {
   session.value = data.session
 })

 supabase.auth.onAuthStateChange((_, _session) => {
   session.value = _session
 })
})
</script>`

In the `onMounted` function, two operations are performed:

1. `supabase.auth.getSession()` is called to get the current session. The returned session data is assigned to `session.value`.
2. `supabase.auth.onAuthStateChange()` is used to listen for changes in the authentication state. Whenever the authentication state changes (e.g., a user logs in or out), the new session data is assigned to `session.value`.

`<template>
 <div>
   <router-view v-if="session" :session="session" />
   <router-view v-else />
 </div>
</template>`

In the template, two `router-view` components are used. The first one is only rendered if `session` is truthy (i.e., a user is logged in), and it receives the current `session` as a prop. The second `router-view` is rendered if `session` is falsy (i.e., no user is logged in) and does not receive any props.

This code is a common pattern for handling user authentication in a Vue.js application using Supabase. The session data is used to control the visibility and behavior of certain parts of the application based on the user's authentication status

**main.js:**

The main.js file is a Vue.js application setup file. It imports various dependencies, sets up routing, and initializes the Vue application.

Let's break it down:

`import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'
import Account from './views/Account.vue'
import Auth from './views/Auth.vue'
import Homepage from './views/Homepage.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Community from './views/Community.vue'
import Discover from './views/Discover.vue'
import SubmitLocation from './views/SubmitLocation.vue'
import Chat from './components/Chat.vue'
import CoffeeRequest from './components/CoffeeRequest.vue'
import Waitlist from './components/Waitlist.vue'
import App from './App.vue'`

In the above code, several Vue.js components are imported. These components are used to build the application's user interface. The `createApp` function is imported from Vue.js to create the application instance. The `createRouter` and `createWebHistory` functions are imported from `vue-router` to set up routing. The `style.css` and `bootstrap.min.css` files are imported for styling. The `App.vue` file is the root component of the application.

`import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)`

This code imports the Font Awesome library and adds the solid, regular, and brand icons to the library. The `FontAwesomeIcon` component is imported to use the icons in the Vue.js components.

`const routes = [
   { path: '/account', component: Account },
   { path: '/auth', component: Auth },
   { path: '/about', component: About },
   { path: '/:username', component: Profile },
   { path: '/community', component: Community},
   { path: '/discover', component: Discover},
   { path: '/submit-location', component: SubmitLocation},
   { path: '/chat/:username', component: Chat, name: 'Chat' },
   { path: '/coffee-request', component: CoffeeRequest, name: 'CoffeeRequest' },
   { path: '/waitlist', component: Waitlist, name: 'Waitlist' },
   { path: '/', component: Homepage }
]

const router = createRouter({
 history: createWebHistory(),
 routes
})`

In this part, the application's routes are defined in an array. Each route is an object that maps a URL path to a Vue.js component. The `createRouter` function is used to create a router instance with the defined routes and the `createWebHistory` function for history mode.
`const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')`

Finally, the Vue.js application is created with the root component `App.vue`. The router is added to the application with `app.use(router)`, and the `FontAwesomeIcon` component is globally registered with `app.component('font-awesome-icon', FontAwesomeIcon)`. The application is then mounted to a DOM element with the id `app`

### Components:

**Section.vue**:

The provided code is a Vue.js component that uses the GreenSock Animation Platform (GSAP) to animate elements on the page.

In the template, a Bootstrap-styled layout is defined. The layout consists of two columns. The first column contains a header, subheader, and a call-to-action button. The second column contains an image. The `ref` attribute is used to create references to these columns. These references are used to animate the columns using GSAP.

`<script>
import { onMounted, ref, nextTick } from "vue";
import { gsap } from "gsap";

export default {
 name: 'Section',
 props: ['headerText', 'subheaderText', 'ctaText'],
 setup() {
   const col1 = ref(null);
   const col2 = ref(null);

   onMounted(async () => {
     await nextTick(); // wait for the next DOM update cycle

     gsap.from(col1.value, { x: "-100%", duration: 1 });
     gsap.from(col2.value, { x: "100%", duration: 1 });
   });

   return { col1, col2 };
 },
};
</script>`

In the script, the `onMounted` and `ref` functions are imported from Vue.js. The `gsap` object is imported from the `gsap` package. The `onMounted` function is a lifecycle hook that runs after the component is mounted. The `ref` function is used to create reactive references.

In the `setup` function, two `ref` references are created for the two columns. The `onMounted` function is used to animate the columns when the component is mounted. The `gsap.from` function is used to animate the columns. The `col1` column is animated to slide in from the left, and the `col2` column is animated to slide in from the right

**Infobar.vue:**

The Infobar.vue is a Vue.js component that displays different content based on the `session` prop.

In the template, two `div` elements are defined. The first `div` is rendered if the `session` prop is truthy (i.e., a user is logged in). The second `div` is rendered if the `session` prop is falsy (i.e., no user is logged in). The second `div` contains a paragraph and a button. The paragraph displays the `infoText` prop, and the button displays the `ctaText` prop and links to the URL specified by the `url` prop

`<script>
export default {
 name: 'InfoBar',
 props: ['session', 'infoText', 'ctaText', 'url']
}
</script>`

In the script, the `InfoBar` component is defined. The component accepts four props: `session`, `infoText`, `ctaText`, and `url`. The `session` prop is used to determine whether to display the first or second `div` in the template. The `infoText`, `ctaText`, and `url` props are used to customize the content of the second `div`

**Info.vue:**

The Info.vue is a Vue.js component that displays three sections of information.

In the template, three sections of information are defined. Each section consists of an image and a text block. The image and text block are arranged in a row using Bootstrap's grid system. The text block contains a header and a paragraph. The header and paragraph are centered vertically in the text block.

`<script>
import { onMounted, ref } from "vue";

export default {
 name: 'Info'
};
</script>`

In the script, the `Info` component is defined. The `onMounted` and `ref` functions are imported from Vue.js, but they are not used in this component. The `name` property is set to 'Info'

**Navbar.vue:**

The Navbar.vue is a Vue.js component that represents a navigation bar. The navigation bar includes links to various pages and a sign-out button that is only visible when a user is logged in.



In the template, a Bootstrap-styled navigation bar is defined. The navigation bar includes a logo, a button for toggling the navigation links on smaller screens, and a list of navigation links. The list includes links to the 'Community', 'Discover', and 'About' pages. There are also links to the user's profile and account pages, and a sign-out button. The sign-out button and the user-specific links are only displayed when a user is logged in, as determined by the `session` prop.

The script does the following:

1. Imports necessary functions from Vue and other packages. The `ref`, `watch`, `toRefs`, `useRouter`, and `defineProps` functions are imported from Vue.js. The `supabase` object is imported from the `supabase` package.
2. Defines the `session` prop using `defineProps()`. This prop is expected to be passed from a parent component and is used to determine whether a user is logged in.
3. Converts the `session` prop to a reactive reference using `toRefs()`.
4. Defines a `username` ref that will be used to store the username of the logged-in user.
5. Uses the `watch()` function to observe changes in the `session` prop. When the `session` prop changes, it fetches the username of the user from a 'Profiles' table in a Supabase database and assigns it to the `username` ref.
6. Creates a `router` object using `useRouter()`. This object is used to navigate to different routes.
7. Defines a `signOut` function that signs out the user and navigates to the 'auth' page.
8. Exposes the `username` and `signOut` refs to the template using `defineExpose()`. This allows these refs to be accessed in the template

**Footer.vue:**

The footer is styled using Bootstrap classes like `d-flex`, `flex-wrap`, `justify-content-between`, `align-items-center`, `py-4`, `my-4`, `border-top`, `col-md-4`, `ms-3`, `list-unstyled`, and `d-flex`. These classes are used for layout and styling purposes.

The `font-awesome-icon` component is used to display social media icons. The `:icon` attribute is a shorthand for `v-bind:icon`, which is a directive used to reactively update an HTML attribute. In this case, it binds the `icon` attribute to an array of strings `['fab', 'linkedin']` and `['fab', 'instagram']` .

The script section contains the JavaScript code for the component. In this case, it's very simple and just contains a `name` property for the component. The `name` property is used to identify the component in the Vue.js ecosystem.

**Avatar.vue:**

Props and Emits:

The `defineProps` and `defineEmits` functions are used to declare the props and events that the component can accept and emit. In this case, the component accepts `path`, `size`, and `hideUpload` as props, and emits `upload` and `update:path` events.

Reactivity:

The `ref` function from Vue is used to create reactive references. In this case, `uploading`, `src`, and `files` are reactive references. When their values change, Vue will automatically update the DOM to reflect the changes.

Methods:

The `downloadImage` and `uploadAvatar` functions are methods that handle the downloading and uploading of avatar images. They use the `supabase` client to interact with a storage bucket named 'avatars'. The `uploadAvatar` method also uses the `emit` function to emit the `upload` and `update:path` events when an image is successfully uploaded.

Watch:

The `watch` function is used to observe changes in the `path` prop. When `path` changes, the `downloadImage` function is called to download the new avatar image.

The template section defines the HTML structure of the component. It displays an avatar image if `src` is truthy, and a placeholder div otherwise. It also provides an upload button that triggers the `uploadAvatar` method when a file is selected. The button's text changes based on whether an upload is in progress

**BackgroundImage.vue:**

Props and Emits:

The `defineProps` and `defineEmits` functions are used to declare the props and events that the component can accept and emit. In this case, the component accepts `path`, `size`, and `hideUpload` as props, and emits `upload` and `update:path` events.

Reactivity:

The `ref` function from Vue is used to create reactive references. In this case, `uploading`, `src`, and `files` are reactive references. When their values change, Vue will automatically update the DOM to reflect the changes.

Methods:

The `downloadImage` and `uploadbackgroundImage` functions are methods that handle the downloading and uploading of background images. They use the `supabase` client to interact with a storage bucket named 'background_images'. The `uploadbackgroundImage` method also uses the `emit` function to emit the `upload` and `update:path` events when an image is successfully uploaded.

Watch:

The `watch` function is used to observe changes in the `path` prop. When `path` changes, the `downloadImage` function is called to download the new background image.

The template section defines the HTML structure of the component. It displays a background image if `src` is truthy, and a placeholder div otherwise. It also provides an upload button that triggers the `uploadbackgroundImage` method when a file is selected. The button's text changes based on whether an upload is in progress.

**Login.vue:**

The template section defines the HTML structure of the component. It contains a form with two input fields for email and password, and a submit button. The `v-model` directive is used to create two-way data bindings on the form input fields, which means that the data in the Vue component's state will be updated whenever the user types into these fields, and vice versa.

The script section contains the JavaScript code for the component. It imports the `ref` function from Vue, which is used to create reactive data, and the `supabase` client for interacting with the backend. It also imports the `useRouter` function from `vue-router`, which is used to programmatically navigate to different routes.

The `setup` function is the entry point for using the Composition API in Vue. Inside this function, two reactive references, `email` and `password`, are created using the `ref` function. The `useRouter` function is also called to get the `router` instance.

The `handleSignin` function is defined to handle the form submission. It uses the `supabase` client to authenticate the user with the provided email and password. If the authentication is successful, it uses the `router` instance to navigate to the home page. If an error occurs during the authentication, it displays an alert with the error message.

Finally, the `setup` function returns an object with the `email`, `password`, and `handleSignin` properties, which makes them available in the template

**Register.vue:**

The template section defines the HTML structure of the component. It contains a form with two input fields for email and password, and a submit button. The `v-model` directive is used to create two-way data bindings on the form input fields, which means that the data in the Vue component's state will be updated whenever the user types into these fields, and vice versa.

The script section contains the JavaScript code for the component. It imports the `ref` function from Vue, which is used to create reactive data, and the `supabase` client for interacting with the backend. It also imports the `useRouter` function from `vue-router`, which is used to programmatically navigate to different routes.

The `setup` function is the entry point for using the Composition API in Vue. Inside this function, two reactive references, `email` and `password`, are created using the `ref` function. The `useRouter` function is also called to get the `router` instance.

The `handleSignup` function is defined to handle the form submission. It uses the `supabase` client to sign up the user with the provided email and password. If the sign-up is successful, it uses the `router` instance to navigate to the account page. If an error occurs during the sign-up, it displays an alert with the error message.

Finally, the `setup` function returns an object with the `email`, `password`, and `handleSignup` properties, which makes them available in the template

**Chat.vue:**

The template section defines the HTML structure of the component. It contains a chat interface with a list of messages and an input field for sending new messages. The `v-for` directive is used to render a list of messages, and the `v-model` directive is used to create two-way data bindings on the input field, which means that the data in the Vue component's state will be updated whenever the user types into this field, and vice versa.

The script section contains the JavaScript code for the component. It imports the `ref`, `onMounted`, `onUnmounted`, `inject`, and `toRefs` functions from Vue, which are used to create reactive data, handle lifecycle hooks, inject dependencies, and convert an object to a reactive object. It also imports the `supabase` client for interacting with the backend.

The `setup` function is the entry point for using the Composition API in Vue. Inside this function, two reactive references, `messages` and `newMessage`, are created using the `ref` function. The `useRoute` and `useRouter` functions are also called to get the `route` and `router` instances.

The `onMounted` lifecycle hook is used to fetch the chat messages from the backend when the component is mounted. It also subscribes to the 'Chats' channel to receive real-time updates. The `onUnmounted` lifecycle hook is used to remove the subscription when the component is unmounted.

The `sendMessage` function is defined to handle the sending of new messages. It uses the `supabase` client to insert the new message into the database. If the insertion is successful, it clears the input field and updates the `hasNewMessages` variable.

Finally, the `setup` function returns an object with the `messages`, `newMessage`, `sendMessage`, and `goBack` properties, which makes them available in the template.

**CoffeeRequest.vue:**

The template section defines the HTML structure of the component. It contains a form with three select fields for user, location, and date-time, and a textarea for additional message. The `v-model` directive is used to create two-way data bindings on the form fields, which means that the data in the Vue component's state will be updated whenever the user types into these fields, and vice versa.

The script section contains the JavaScript code for the component. It imports the `ref`, `onMounted`, and `toRefs` functions from Vue, which are used to create reactive data and handle lifecycle hooks. It also imports the `supabase` client for interacting with the backend and the `useRouter` function from `vue-router`, which is used to programmatically navigate to different routes.

The `setup` function is the entry point for using the Composition API in Vue. Inside this function, several reactive references are created using the `ref` function. The `useRouter` function is also called to get the `router` instance.

The `onMounted` lifecycle hook is used to fetch the user and location data from the backend when the component is mounted.

The `sendRequest` function is defined to handle the form submission. It uses the `supabase` client to send a chat message to the selected user and to write the coffee request to the "Coffee Requests" table.

Finally, the `setup` function returns an object with the `users`, `locations`, `selectedUser`, `selectedLocation`, `selectedDateTime`, `additionalMessage`, `sendRequest`, and `goBack` properties, which makes them available in the template

**Waitlist.vue:**

The template section defines the HTML structure of the component. It contains a form with three input fields for name, email, and city. The `v-model` directive is used to create two-way data bindings on the form fields, which means that the data in the Vue component's state will be updated whenever the user types into these fields, and vice versa.

The script section contains the JavaScript code for the component. It imports the `ref` function from Vue, which is used to create reactive data, and the `supabase` client for interacting with the backend. It also imports the `useRouter` function from `vue-router`, which is used to programmatically navigate to different routes.

The `setup` function is the entry point for using the Composition API in Vue. Inside this function, three reactive references, `name`, `email`, and `city`, are created using the `ref` function. The `useRouter` function is also called to get the `router` instance.

The `submitForm` function is defined to handle the form submission. It uses the `supabase` client to insert the form data into the 'Waitlist' table. If the insertion is successful, it sets the `formSubmitted` variable to `true` .

Finally, the `setup` function returns an object with the `name`, `email`, `city`, `formSubmitted`, `submitForm`, and `goBack` properties, which makes them available in the template.

### Views:

**Homepage.vue:**

This Vue.js script is a component for displaying a landing page. It uses the Supabase library for user authentication and the Vue Router for navigation.

The `<script setup>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue, Vue Router, and other modules.
- The `useRouter` function is used to create a router instance.
- A `ref` constant is declared to hold the session information.
- The `onMounted` function is used to fetch the session information from the Supabase database when the component is mounted.

The `<template>` section of the code is the HTML markup for the Vue component. It contains several components and elements for displaying the landing page.

- The `Navbar` component is displayed at the top of the page. It receives the `session` prop which contains information about the current user session.
- The `Section`, `Infobar`, `Info`, and `Footer` components are displayed in the body of the page. Each component likely displays a different part of the landing page.

The `<style scoped>` section is where you would put any CSS styles that are specific to this Vue component. In this case, no styles are defined

The `onMounted` function is used to fetch the session information from the Supabase database when the component is mounted. It uses the `getSession` method from the Supabase client to fetch the current session. If there is a session, it sets the `session` constant to the session data. It also sets up a listener for the `onAuthStateChange` event, which is triggered whenever the authentication state changes. When the authentication state changes, it updates the `session` constant with the new session data.

**About.vue:**

This Vue.js script is a component for displaying an 'About' page. It uses the Supabase library for user authentication, the Vue Router for navigation, and the GSAP library for animations.

The `<template>` section of the code is the HTML markup for the Vue component. It contains a `Navbar` component, several sections with text and images, and a `Footer` component.

- The `Navbar` component is displayed at the top of the page. It receives the `session` prop which contains information about the current user session.
- The `div` elements are used to display the sections of the 'About' page. Each section contains a title, a paragraph, and an image.
- The `Footer` component is displayed at the bottom of the page.

The `<script>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue, Vue Router, GSAP, and other modules.
- The `onMounted`, `ref`, and `nextTick` functions from Vue are used to create a lifecycle hook and two-way data bindings.
- The `supabase` constant is imported from the Supabase library.
- The `gsap` constant is imported from the GSAP library.
- The `Navbar` and `Footer` components are imported from other modules.
- The `setup` function is used to define the component's reactive data and lifecycle hooks.
- The `onMounted` function is used to fetch the session information from the Supabase database and animate the sections when the component is mounted.
- The `nextTick` function is used to wait for the next DOM update cycle to complete before animating the sections.
- The `gsap.from` function is used to animate the sections from a certain state to their current state.

**Auth.vue:**

This Vue.js code is a simple component that toggles between a `Register` and `Login` component based on the value of `isSignUp`.

The `<template>` section of the code is the HTML markup for the Vue component. It contains a `div` that conditionally renders either the `Register` or `Login` component based on the value of `isSignUp`.

- The `v-if="isSignUp"` directive checks if `isSignUp` is true. If it is, the `Register` component is rendered. If `isSignUp` is false, the `v-else` directive triggers and the `Login` component is rendered instead , .
- The button in the `div` with class `text-center` toggles the value of `isSignUp` when clicked. This is done using the `@click` directive, which is a shorthand for `v-on:click`. The `@click` directive is used to handle click events in Vue , .
- The button's text is also conditionally rendered based on the value of `isSignUp`. If `isSignUp` is true, the button displays "Already have an account? Sign In". If `isSignUp` is false, the button displays "Don't have an account yet? Sign Up" .

The `<script>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import the `ref` function from Vue and the `Register` and `Login` components.
- The `export default` statement is used to export the Vue component as a module.
- The `components` property is used to declare the `Register` and `Login` components as child components of this Vue component.
- The `setup` function is a new feature in Vue 3 that is used to define the reactive data and functions for the component. In this case, it declares `isSignUp` as a reactive reference that is initially set to true.
- The `return` statement in the `setup` function makes `isSignUp` available to the template.

**Account.vue:**

This Vue.js script is a component for editing a user's profile. It uses the Supabase library for user authentication and database operations.

The `<script setup>` section is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue, Vue Router, and other modules.
- The `defineProps` function is used to define the `session` prop.
- The `useRouter` function is used to create a router instance.
- Several `ref` constants are declared to hold the user's profile information.
- The `onMounted` function is used to call the `getProfile` function when the component is mounted.
- The `getProfile` function is used to fetch the user's profile information from the Supabase database.
- The `updateProfile` function is used to update the user's profile information in the Supabase database.
- The `updateUser` function is used to update the user's information in the Supabase database.
- The `signOut` function is used to sign out the user and redirect them to the authentication page.
- The `updateUserAndProfile` function is used to update both the user's profile information and the user's information in the Supabase database.

The `<template>` section of the code is the HTML markup for the Vue component. It contains a form for editing the user's profile information.

- The `h2` element displays the title of the page.
- The `form` element contains several input fields for editing the user's profile information.
- The `Avatar` and `BackgroundImage` components are used to display and edit the user's avatar and background image.
- The `input` and `select` elements are used to edit the user's email, username, occupation, bio, project URLs, portfolio URL, and job.
- The `button` elements are used to submit the form, go back to the previous page, and sign out the user

**Profile.vue:**

This Vue.js code is a component that displays a user's profile. The profile includes the user's avatar, background image, username, bio, job, projects, portfolio, and a link to chat with the user.

The `<template>` section of the code is the HTML markup for the Vue component. It contains several child components and elements that display the user's profile information.

- The `Navbar` component is displayed at the top of the page. It receives the `session` prop which contains information about the current user session.
- The `BackgroundImage` and `Avatar` components display the user's background image and avatar, respectively. They receive several props, including `path` (the URL of the image), `size` (the size of the image), and `hideUpload` (a boolean indicating whether the image upload feature should be hidden).
- The `router-link` element is used to navigate to the 'Chat' route. It is conditionally rendered based on whether a `session` exists. The `class` attribute is dynamically bound to the `new-messages` class if `hasNewMessages` is true.
- The `card` elements display the user's bio, job, projects, and portfolio. The `a` elements inside the `card` elements are used to link to the user's projects and portfolio.

The `<script setup>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue, Vue Router, and other modules.
- The `route` and `router` constants are created using the `useRoute` and `useRouter` functions from Vue Router.
- Several `ref` constants are declared to hold the user's profile information.
- The `props` constant is declared to define the `session` prop.
- The `checkForNewMessages` function is defined to check for new messages for the user.
- The `onMounted` and `watch` functions are used to fetch the user's profile information when the component is mounted and whenever the `username` changes.
- The `onBeforeUnmount` function is used to clear the interval for checking new messages when the component is unmounted.
- The `goToChat` function is defined to navigate to the 'Chat' route and reset the `hasNewMessages` value.

The `<style scoped>` section is where you would put any CSS styles that are specific to this Vue component. In this case, several styles are defined for the `h1`, `.edit-profile-button`, `.username-line`, `.profile-container`, `.background-image`, `.avatar-container`, `.info-container`, and `.new-messages` selectors

**Community.vue:**

This Vue.js script is a component for displaying a list of profiles. It uses the Supabase library for user authentication and database operations.

The `<template>` section of the code is the HTML markup for the Vue component. It contains a form for searching profiles by occupation and a list of profiles.

- The `Navbar` component is displayed at the top of the page. It receives the `session` prop which contains information about the current user session.
- The `button` element is used to navigate to the 'CoffeeRequest' route when clicked.
- The `input` and `select` elements are used to filter the profiles by search term and occupation.
- The `v-for` directive is used to render a list of profiles. Each profile is displayed in a `card` element that contains an image, a title, and a description.
- The `router-link` element is used to navigate to the profile page of each user when the card is clicked.

The `<script setup>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue, Vue Router, and other modules.
- The `useRouter` function is used to create a router instance.
- Several `ref` constants are declared to hold the profiles, search term, occupation, and session information.
- The `onMounted` function is used to fetch the profiles from the Supabase database when the component is mounted.
- The `downloadImage` function is used to download the avatar image for each profile.
- The `filteredProfiles` computed property is used to filter the profiles based on the search term and occupation.
- The `goToCoffeeRequest` function is used to navigate to the 'CoffeeRequest' route.

**Discover.vue:**

This Vue.js script is a component for displaying a list of locations. It uses the Supabase library for database operations.

The `<template>` section of the code is the HTML markup for the Vue component. It contains a form for filtering locations by type and a list of locations.

- The `Navbar` component is displayed at the top of the page. It receives the `session` prop which contains information about the current user session.
- The `select` element is used to filter the locations by type.
- The `router-link` element is used to navigate to the 'Submit a Place/Event' page when clicked.
- The `v-for` directive is used to render a list of locations. Each location is displayed in a `card` element that contains an image, a title, a description, an address, a city, a type, and a link to check it out.

The `<script setup>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue and other modules.
- Several `ref` constants are declared to hold the locations, type, and session information.
- The `onMounted` function is used to fetch the locations from the Supabase database when the component is mounted.
- The `filteredLocations` computed property is used to filter the locations based on the type.

**SubmitLocation.vue:**

This Vue.js script is a component for submitting a location or event. It uses the Supabase library for database operations.

The `<template>` section of the code is the HTML markup for the Vue component. It contains a form for submitting a location or event.

- The `h1` and `h5` elements display the title and subtitle of the page.
- The `form` element contains several input fields for submitting the location or event information.
- The `button` elements are used to submit the form and go back to the previous page.
- The `div` element is used to display a thank you message after the form is submitted.

The `<script setup>` section of the code is the JavaScript for the Vue component.

- The `import` statements at the top import several functions and components from Vue and other modules.
- The `useRouter` function is used to create a router instance.
- A `ref` constant is declared to hold the location information.
- The `submitForm` function is used to insert the location information into the Supabase database.
- The `goBack` function is used to navigate to the previous page.

The `<style scoped>` section is where you would put any CSS styles that are specific to this Vue component. In this case, no styles are defined.

The `submitForm` function is an asynchronous function that inserts the location information into the Supabase database. It uses the `insert` method from the Supabase client to insert the location object into the 'Locations' table in the database. If there is an error, it logs the error message to the console. If there is no error, it resets the location object and sets `submitted` to true.

The `goBack` function is used to navigate to the previous page. It uses the `go` method from the router instance to navigate to the previous page in the history stack.

The `v-model` directive is used to create two-way data bindings on form input, textarea, and select elements. It automatically updates the location object whenever the user types into the input fields.

The `v-if` directive is used to conditionally render the form based on the value of `submitted`. If `submitted` is false, the form is rendered. If `submitted` is true, a thank you message is displayed.

The `required` attribute is used to specify that an input field must be filled out before submitting the form.