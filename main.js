function copyText() {
  // Get the text field
  var codeText = document.getElementsByClassName("code");

  // Copy the text inside the text field
  navigator.clipboard.writeText(codeText.textContent);

  // Alert the copied text
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Copied !",
  });
  console.log(codeText.textContent);
}