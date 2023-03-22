

export const Validation=({min=0,max=100})=>{

    return[
    
  {
    validationType:"nameValidation",
    regex:"^[a-zA-Z]\\S$",
    errordisplayType:"Alphabetic string that may include _ and - having a length of 2 to 32 characters"
  },
  {
    validationType:"emailValidation",
    regex:"^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
    errordisplayType:"Please include an'@' in the email address"
  },
  {
    validationType:"numberValidation",
    regex:"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
    errordisplayType:"Phone number must have 10 digits"
  },
  {
    validationType:"commentsValidation",
    regex:`^\\w{${min},${max}}$`,
    errordisplayType:`You have type only ${max} letters`
  },
]
}