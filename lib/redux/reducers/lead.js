export default (state = {
    email: null, name: null
  }, { type, payload }) => {
    switch (type) {
      case 'SIGNUP_LEAD':
        let { email } = payload
        return {
          ...state,
          email
        }
      case 'SIGNUP_LEAD_NAME':
        let { name } = payload
        return {
          ...state,
          name
        }
      default:
        return state
    }
  }
  export function signupLead ({email}) {
    return {
      type: 'SIGNUP_LEAD',
      payload: {
        email
      },
      meta: {
        analytics: {
          event: `Signed Up`,
          value: email
        }
      }
    }
  }

  export function signupLeadName ({name}) {
    return {
      type: 'SIGNUP_LEAD_NAME',
      payload: {
        name
      },
      meta: {
        analytics: {
          event: `Signed Up`,
          value: name
        }
      }
    }
  }