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
    // const email = formData.get("email_name");
    // const password = formData.get("password_name");
    // const description = formData.get("description");
    // const emplStatus = formData.get("commonName");
    // const availability = formData.getAll("availability");
    // const favColor = formData.get("favColor");
    // console.log(
    //   email,
    //   password,
    //   description,
    //   emplStatus,
    //   availability,
    //   favColor
    // );
    const data = Object.fromEntries(formData);
    const availability = formData.getAll("availability");
    const allData = { ...data, availability };
    console.log(allData);
  }
  //
  return (
    <section>
      <h1>Sign Up Form</h1>
      {/* <form action="" method="POST" onSubmit={handleSubmit}> */}
      <form action={signUp}>
        {/* //Email  */}
        <label htmlFor="email_id">Email: </label>
        <input
          type="email"
          name="email_name"
          id="email_id"
          defaultValue="saved@email.com"
          placeholder="john@example.com"
        />

        {/* //Password  */}
        <label htmlFor="password_id">Password: </label>
        <input
          type="password"
          name="password_name"
          id="password_id"
          placeholder="*******"
          defaultValue="2232323"
        />

        {/* //TextArea  */}
        <label htmlFor="description_id">Description: </label>
        <textarea name="description" id="description_id"></textarea>

        {/* //Radio buttons  */}
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="commonName" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="commonName" value="part-time" />
            Part-Time
          </label>
          <label>
            <input
              type="radio"
              name="commonName"
              value="full-time"
              defaultChecked={true}
            />
            Full-Time
          </label>
        </fieldset>

        {/* //Checkbox  */}
        <fieldset>
          <legend>Availability:</legend>
          <label>
            <input type="checkbox" name="availability" value="monday" />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              name="availability"
              value="tuesday"
              defaultChecked={true}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              name="availability"
              value="wednesday"
              defaultChecked={true}
            />
            Wednesday
          </label>
        </fieldset>

        {/* /Dropdown  */}
        <label htmlFor="favColor_id">Select your favorite colour</label>
        <select name="favColor" id="favColor_id" defaultValue="def" required>
          <option value="def" disabled>
            --Choose colour--
          </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>

        <button>Submit</button>
        <hr />
      </form>
    </section>
  );
}
export default App;
