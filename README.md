# Stacks NextJS v13 Starter Template
### A Stacks starter template for NextJS version 13.

Inspired by the good folks at Hiro and their [Stacks Starter Packages](https://github.com/hirosystems/stacks.js-starters), I needed a project built using NextJS13.  The routing structure completely changed from NextJs 12 to 13. NextJS 13 also adds some great fetching, backend route creation, and MongoDb integration that was key for my project.

The template was built with NextJS v13.4 and React v18.2

### Installation & Running
The node_modules directory has been deleted for portability and version control. Clone the repo and then in the parent directory run the CL:

`% npm install`

Then you can compile that code and run a session on localhost:3000 using CL:

`% npm run dev`

### Known Issues
In the new NextJS 13, pages default to be Server-side components (SSC), which is a massive imporvement for SEO and load times. With the @stacks/connect-react, the <Connect /> component utilized React state, so any pages calling <Connect/> mut be converted to [client components](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components).

### Wishlist
I'd like to add a `StacksProvider` to this template that passes `userSession` through a context provider instead of exporting it from `ConnectWallet`, but I'm having a hard time destructuring any context props on the new `layout.jsx` page in Next13.  If anyone ever figures out a good way to do this, holla at your dev.

Please let me know how I can improve the template.

Happy Stacking
