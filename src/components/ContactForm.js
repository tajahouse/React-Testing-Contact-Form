import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            data-testid="firstName"
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p data-testid="nameError">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
            data-testid="lastName"
          />
          {errors.lastName && (
            <p data-testid="lastNameError">Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input name="email" ref={register({ required: true })} 
          data-testid="email"/>
          {errors.email && (
            <p data-testid="emailError">Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })}
          data-testid="message" />
        </div>

        {data && (
          <pre  data-testid="confirm" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <button type="submit" data-testid="button" />
      </form>
    </div>
  );
};

export default ContactForm;
