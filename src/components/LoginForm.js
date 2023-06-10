import React from 'react'

export default function LoginForm({handleSubmit, buttonText}) {
  const onSubmit = e => {
    e.preventDefault()

    const {username, password} = e.target.elements

    handleSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">
          Username
          <input id="username" name="username" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input id="password" name="password" type="password" />
        </label>
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}
