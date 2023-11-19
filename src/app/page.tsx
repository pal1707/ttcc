"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl">
      <h1 className="text-3xl font-bold tracking-tight">Nextjs image gallery with user registration.</h1>
        <p className="mt-10 text-xl">
         The app is created using NextJs latest version. 
         The app uses TailwindCSS for styling
         The app uses API to fetch data from a API endpoint
        </p>
        <p className="mt-10 text-xl">
          Please click on the Gallery menu to view image gallery which is fetching the images from API endpoint.
        </p>
        <p className="mt-10 text-xl">
          To navigate to a registration form please click on "User Registration" link.
          It is a 3 step form for ease of use for the user.
          The form is validated using zod and React Hook Form.
          The test case is written in Jest and to run the test please run "npm run test" command.
        </p>
      </article>
    </main>
  );
}
