# Hurado

NOI.PH's online judge

## Development

### Recommended computer specs

- RAM: 8GB or more
- CPU: Intel i3 or better

### Getting started

If you're using Windows, we recommend [using WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) to emulate a Unix environment. If you haven't yet, [set up your own SSH-key and add it to your SSH-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

#### Fork the repository

Fork the Hurado repository with the help of [this guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

#### Clone your fork of the repository

Before cloning your fork of the repository, make sure that you have added your SSH-key to your SSH-agent. You can clone the repository by running the following command:

```bash
git clone git@github.com:your_username/hurado.git
```

#### Setup Docker

We use docker containers for supporting services like postgresql. Follow instructions [here](https://docs.docker.com/engine/install/) to get a new version of docker.


Run the containers on a seperate terminal by running the following command in the project directory:

```bash
docker compose up
```

#### Setup NodeJS

We recommend using NodeJS 20 when running this application. Kindly go to [this guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to configure which version of NodeJS runs in your environment.

Once NVM has been installed, run the following so that NodeJS v20 is installed:

```bash
nvm install 20
nvm use 20
```

Install the required packages:

```bash
npm ci
```

## Running the application

Go to the repository directory by running the following command:

```bash
cd hurado
```

Copy the local environment:

```bash
cp .env.template .env
```

Migrate the database to the latest version:

```bash
npm run db:migrate
```

Run the development environment by using:

```bash
npm run dev
```

You should be seeing the following:

```bash
> algurado.com.ph@2.0.0 dev
> next dev -p 10000

   ▲ Next.js 14.1.3
   - Local:        http://localhost:10000
   - Environments: .env
```

## Contribution Workflow

1. Follow the above instructions regarding forking, cloning, and running this repository.
2. Read the [contributor's guide](contributor-guide.md) for useful tips to improve your experience
3. Add and commit your changes to the repository. Don't forget to add your name to the [contributors](#contributors) section below.
4. Submit a pull request (PR) and tag one of the contributors to review your code.
5. Wait for the review and address the comments.
6. Wait for the reviewer to approve your PR.
7. Merge your PR.

## Contributors

- Lead: [Payton Yao](https://github.com/jabbawookiees)
- [Franz Cesista](https://github.com/leloykun)
- [Cisco Ortega](https://github.com/gfmortega)
- [Neomi Mendoza](https://github.com/nimendoza)
- [Kian Chua](https://github.com/Quantum-K9)
- [Troy Serapio](https://github.com/tdserapio)
- [Angelu Garcia](https://github.com/devByGelu)
- [The Boy (alias)](https://github.com/RedBlazerFlame)
- [Davis Magpantay](https://github.com/dexva)
- [Clyde Jallorina](https://github.com/clydejallorina)
