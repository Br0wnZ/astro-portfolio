<h1 align="center">Portfolio Template For Developers</h1>

<br>

<p align="center">
<img src="https://img.shields.io/badge/Astro-8B73FE?style=for-the-badge&logo=astro&logoColor=white"></img>
<img src="https://img.shields.io/badge/javascript-F3DB1D?style=for-the-badge&logo=javascript&logoColor=black">
</p>

## Technology Used 🛠️

- [Astro](https://astro.build/) - web framework
- [SASS](https://sass-lang.com) - CSS Preprocessor
- [Tailwind](https://tailwindcss.com/) - Tailwind CSS

## Project Structure 📂

```
├── public
│ │ ├── img
│ │ ├── favicon.svg
├── src
│ ├── assets
│ │ ├── icons
│ │ ├── js
│ ├── components
│ ├── pages
│ ├── layouts
│ ├── utils
│ └── data.json
├── LICENSE
├── .gitignore
├── astro.config.mjs
├── pnpm-lock.yaml
├── package.json
└── tsconfig.json
├── README.md
```


## Getting Started with This Template

To start using this template, follow these steps:

1. **Fork Repository:**

2. **Edit Template:**

   - Modify the `data.json` file and include your images.

3. **Set Up Contact Form:**

   Ensure the contact form functionality:

   - Create accounts on [Email.js](https://emailjs.com) and [IP Registry](https://ipregistry.co).
   - Create a `.env` file in the project root with the following variables:
     ```env
     PUBLIC_EMAILJS_ID=your_emailjs_id
     PUBLIC_CONTACT_SERVICE=your_contact_service
     PUBLIC_TEMPLATE_ID=your_template_id
     PUBLIC_IP_API_KEY=your_ip_api_key
     ```
   - Replace `your_emailjs_id`, `your_contact_service`, `your_template_id`, and `your_ip_api_key` with your actual values.

4. **Install Dependencies & Run Project:**

```
pnpm install

pnpm dev
```

5. **Deployment**

You can easily deploy with [Vercel](https://vercel.com) or [Netlify](https://netlify.com).

🎉 By following these steps, you'll be able to customize, run, and deploy this template effectively.

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

## Sponsor 💛

Give a ⭐ if you like this project!

```

```
