import "@emailjs/browser/dist/email"
import { emailValidator, requiredValidator } from "../../utils/form-validators"

const EMAILJS_ID = import.meta.env.PUBLIC_EMAILJS_ID
const CONTACT_SERVICE = import.meta.env.PUBLIC_CONTACT_SERVICE
const TEMPLATE_ID = import.meta.env.PUBLIC_TEMPLATE_ID
const IP_API_KEY = import.meta.env.PUBLIC_IP_API_KEY
const IP_API = `https://api.ipregistry.co/?key=${IP_API_KEY}`
const EMAIL_API = "https://api.emailjs.com/api/v1.0/email/send"

const thanksMessage = document.getElementById("thanks-message")
const loadingSpinner = document.getElementById("loading-spinner")

document
  .getElementById("contact_form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault()
    const inputElements = {
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      subject: document.getElementById("subject"),
      message: document.getElementById("message"),
    }
    const formData = new FormData(e.target)

    let errors = false

    for (const [key, value] of formData) {
      if (!value.toString().length && inputElements[key]) {
        inputElements[key].classList.add("is-invalid")
        errors = true
      }
      if (
        ["name", "subject", "message"].includes(key) &&
        !requiredValidator(value.toString())
      ) {
        inputElements[key].classList.add("is-invalid")
        errors = true
      }
      if (key === "email" && !emailValidator(value.toString())) {
        inputElements[key].classList.add("is-invalid")
        errors = true
      }
    }

    if (errors) return

    let location
    loadingSpinner.style.display = "flex"

    await fetch(IP_API)
      .then((res) => res.json())
      .then(
        (payload) =>
          (location = `${payload.location.country.flag.emoji} ${payload.location.city}, ${payload.location.latitude} ${payload.location.longitude}`)
      )

    var data = {
      service_id: CONTACT_SERVICE,
      template_id: TEMPLATE_ID,
      user_id: EMAILJS_ID,
      template_params: {
        location: String(location),
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      },
    }

    await fetch(EMAIL_API, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        thanksMessage.style.display = "block"
        Object.values(inputElements).forEach((input) => {
          input.classList.remove("is-valid", "is-invalid")
        })
      })
      .catch(function (err) {
        alert(`Something went wrong!! Please try again. ${err}`)
      })
      .finally(() => {
        loadingSpinner.classList.add('hidden')
        e.target.reset()
      })
  })
