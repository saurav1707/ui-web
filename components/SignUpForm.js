export default function SignUpForm ({lead, signup, signupName}) {
    console.log('signup')
    console.log(signup)
    console.log(signupName)
    function submit(e) {
      e.preventDefault()
      let email = e.target.elements.email.value
      if (email) {
        signup({email})
      } else {
        alert("Email is Required")
      }
    }
    function submitName(e) {
        e.preventDefault()
        let name = e.target.elements.name.value
        if (name) {
          signupName({name})
        } else {
          alert("name is Required")
        }
      }
    return (
      <div>
        {typeof lead.email === 'string' && lead.email.length > 0 ? 
        <p>Hello {lead.email}</p>
        :
            (typeof lead.name === 'string' && lead.name.length > 0 ? 
                <p>Hello {lead.name}</p>
                :
                <div>
                    <form onSubmit={submit}>
                    <input name="email" type="email" placeholder="Enter your email..." />
                    <button>Submit</button>
                    </form>
                    <form onSubmit={submitName}>
                        <input name="name" type="name" placeholder="Enter your name..." />
                        <button>Submit</button>
                    </form>
                </div>
            )
        
        }
      </div>
    )
  }