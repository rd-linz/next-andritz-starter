# Next Andritz Starter

This Next.js template is designed for starting a new Andritz-NextJS project.

## 🔐 Adding Authentication Details to Your Local `.npmrc` File

To authenticate with Azure in the template, you need to add your authentication details to the `.npmrc` file in your user folder. Follow the steps below:

1. **Navigate to User Folder**: Open your terminal and navigate to your user folder. This is usually `~` on Unix-like systems or just under `C:\Users\User` on Windows.

2. **Create `.npmrc` File**: If you don't have an `.npmrc` file in your user folder, create one.

3. **Run `vsts-npm-auth`**: In the template repository, run the following command:

```bash
vsts-npm-auth -config .npmrc
```

After running this command, the `.npmrc` file should look something like this: 
[//pkgs.dev.azure.com/&lt;TENANT_ID&gt;/_packaging/&lt;FEED_NAME&gt;/npm/registry/:_authToken=&lt;CLIENT_SECRET&gt;](//pkgs.dev.azure.com/&lt;TENANT_ID&gt;/_packaging/&lt;FEED_NAME&gt;/npm/registry/:_authToken=&lt;CLIENT_SECRET&gt;)
[//pkgs.dev.azure.com/&lt;TENANT_ID&gt;/_packaging/&lt;FEED_NAME&gt;/npm/:_authToken=&lt;CLIENT_SECRET&gt;](//pkgs.dev.azure.com/&lt;TENANT_ID&gt;/_packaging/&lt;FEED_NAME&gt;/npm/:_authToken=&lt;CLIENT_SECRET&gt;)

## 🛠 Installation

To create a new project, run the following command:

```bash
npx create-next-app my-app -e https://github.com/rd-linz/next-andritz-starter
```

## Set Azure Client-ID
Copy your Azure-Client-ID to the settings/auth.ts file.

## 🚀 Getting Started
After the installation and adding the `.npmrc` file to the project as well as setting your azure-client-Id, navigate to the project directory and run the following command to spin up the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.