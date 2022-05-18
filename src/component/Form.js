import React from "react"

export default function App() {
    
    /**
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If 
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    const [form, setForm] = React.useState({
      email: "",
      password: "",
      repassword: "",
      newsletter: false
    })

    const handleChange = (event) => {
      const {name, value, type, checked} = event.target;
      setForm(prevState => {
        return {
          ...prevState,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (form.password == form.repassword) {
          console.log('Successfully signed up');
          if (form.newsletter) {
            console.log("Thanks for signing up for our newsletter!");
          }
        } else {
          console.error('Passwords to not match')
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="repassword"
                    value={form.repassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="newsletter"
                        checked={form.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
