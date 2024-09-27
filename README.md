<p align="center">
    <h1 align="center">RETAINIQ</h1>
</p>
<!-- <p align="center">
    <em><code>❯ REPLACE-ME</code></em>
</p> -->
<p align="center">
	<img src="https://img.shields.io/github/license/Giriraj-Roy/retainIQ?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Giriraj-Roy/retainIQ?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Giriraj-Roy/retainIQ?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Giriraj-Roy/retainIQ?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>


##  Overview

 A UI presentation for retain IQ

---


##  Repository Structure

```sh
└── retainIQ/
    ├── README.md
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── src
    │   └── app
    │     ├── assets
    │     ├── components
    │     ├── pages
    │     ├── fonts
    │     ├── contexts
    │     └── utils
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

##  Modules

<details open><summary>.</summary>

| File | Summary |
| --- | --- |
| [postcss.config.mjs](https://github.com/Giriraj-Roy/retainIQ/blob/main/postcss.config.mjs) | 
| [tailwind.config.ts](https://github.com/Giriraj-Roy/retainIQ/blob/main/tailwind.config.ts) | Typescipt configuration file
| [tsconfig.json](https://github.com/Giriraj-Roy/retainIQ/blob/main/tsconfig.json) | 
| [package.json](https://github.com/Giriraj-Roy/retainIQ/blob/main/package.json) | Contains all dependencies
| [next.config.mjs](https://github.com/Giriraj-Roy/retainIQ/blob/main/next.config.mjs) |
| [package-lock.json](https://github.com/Giriraj-Roy/retainIQ/blob/main/package-lock.json) |

</details>

<details open><summary>src.app</summary>

| File | Summary |
| --- | --- |
| [globals.css](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/globals.css) | global css defined to maintain basic structure
| [page.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/page.tsx) |  the start of the application
| [layout.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/layout.tsx) |  metadata and title of the application maintained here

</details>

<details open><summary>src.app.fonts</summary>

| File | Summary |
| --- | --- |
| [corporative-sans.otf](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/fonts/corporative-sans.otf) | Minor components fonts
| [Recoleta.otf](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/fonts/Recoleta.otf) |  Title Fonts

</details>

<details open><summary>src.app.utils</summary>

| File | Summary |
| --- | --- |
| [useAppContext.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/utils/useAppContext.tsx) |  Context Hook to Fetch all details of app context
| [interfaces.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/utils/interfaces.tsx) |  defines and exports all interfaces in a single place
| [wordGenerator.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/utils/wordGenerator.tsx) |  utility function that generates random words

</details>

<details open><summary>src.app.pages</summary>

| File | Summary |
| --- | --- |
| [Dashboard.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/pages/Dashboard.tsx) |  Dasboard routed page (The First screen)

</details>

<details open><summary>src.app.components</summary>

| File | Summary |
| --- | --- |
| [ListHead.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/ListHead.tsx) |  Headers of all lists
| [ListFooter.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/ListFooter.tsx) |  The Footer conatans button to add more elements
| [Header.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/Header.tsx) |  The Header Contains the title and FeedButton
| [Footer.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/Footer.tsx) |  Footer (not rendered)
| [HeaderInput.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/HeaderInput.tsx) |  Input handle of header
| [Modal.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/Modal.tsx) |  Modal to insert new images
| [DragDropList.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/DragDropList.tsx) |  The Total list which can be dragged and dropped
| [FilterBody.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/FilterBody.tsx) |  The body of the main list items
| [ListItem.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/ListItem.tsx) |  One particular list item with variants
| [AddVariant.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/AddVariant.tsx) |  Button and functionality to add more variants
| [FeedBtn.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/FeedBtn.tsx) |  Button to publish feed
| [Navbar.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/components/Navbar.tsx) |  Default navbar

</details>

<details open><summary>src.app.context</summary>

| File | Summary |
| --- | --- |
| [AppContext.tsx](https://github.com/Giriraj-Roy/retainIQ/blob/main/src/app/context/AppContext.tsx) |  state management using Context API of whole app

</details>

---

##  Getting Started

###  Prerequisites

**TypeScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the retainIQ repository:
```sh
❯ git clone https://github.com/Giriraj-Roy/retainIQ
```

2. Navigate to the project directory:
```sh
❯ cd retainIQ
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ npm run build && node dist/main.js
```
---
