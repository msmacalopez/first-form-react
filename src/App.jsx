import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const forElem = event.currentTarget;
  //   const formData = new FormData(forElem);
  //   const email = formData.get("email_name");
  //   //gather the info from the form
  //   //submit to the backend: sanitize and save, etc
  //   formElem.reset();
  // }

  function signUp(formData) {
    const email = formData.get("email_name");
    const password = formData.get("password_name");
    console.log(email, password);
  }
  //
  return (
    <section>
      <h1>Sign Up Form</h1>
      {/* <form action="" method="POST" onSubmit={handleSubmit}> */}
      <form action={signUp}>
        <label htmlFor="email_id">Email: </label>
        <input
          type="email"
          name="email_name"
          id="email_id"
          placeholder="john@example.com"
        />
        <br />
        <br />
        <label htmlFor="password_id">Password: </label>
        <input
          type="password"
          name="password_name"
          id="password_id"
          placeholder="*******"
        />
        <br />
        <br />
        <button>Submit</button>
        <hr />
      </form>
    </section>
  );
}
////////////////////////////check if updates in github
export default App;
