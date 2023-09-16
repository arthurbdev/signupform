
const pass = document.querySelector("#pass")
const confirmPass = document.querySelector("#confirmPass")
const errorMsg = document.querySelector("#errorMsg")

let ifClickedConfirm = false

comparePass = () => {
  if (!ifClickedConfirm) {
    return
  }
  let passText = pass.value
  let confirmPassText = confirmPass.value
  if(passText === confirmPassText) {
    pass.classList.remove("error")
    confirmPass.classList.remove("error")
    errorMsg.style.visibility = "hidden"
  }
  else if (passText !== confirmPassText) {
    pass.classList.add("error")
    confirmPass.classList.add("error")
    errorMsg.style.visibility = "visible"
  }
}
  
confirmPass.addEventListener('keyup', () => ifClickedConfirm = true)
confirmPass.addEventListener('keyup', comparePass)
pass.addEventListener('keyup', comparePass)
