const validateForm = (id:string, value:string) => {
  switch(id){
      case 'name':
            if(value.length === 0) return 'Name is required'
            if(value.length <= 3) return 'Name should be at least 4 character long'
            return ''
      case 'email':
            if(value.length === 0) return 'Email is required'
            if(!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(value)) return 'Email is invalid'
            return ''
      case 'mobile':
            if(value.length === 0) return 'Mobile number is required'
            if(!/^[0-9]*$/.test(value)) return 'Mobile number is invalid'
            if(value.length !== 10) return 'Mobile number must be 10 digit long'
            return ''
      case 'message':
            if(value.length === 0) return "Message is required"
            return ''
      default:
            return ''
  }
}

export {validateForm}