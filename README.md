# laradock-cli

This is a basic node cli helper to help myself with [Laradock](https://github.com/LaraDock/laradock) usage.

This is useful for those who are used to Homestead and want a simple CLI interface to use with Laradock, also for those who are new to docker like myself.

I integrated Laradock into my Laravel Projects because of the resources usage, and how fast you can bring containers up vs. virtual machines, but the usage was a bit annoying this cli tool exposes the basic actions you will probably use the most.

### What does it do?

**Note: All the following commands must run from within your laravel project root directory.**

- Initializes Laradock in existing laravel projects.
```bash
laradock init
```
- Creates/Starts the Laradock containers for the current project.
```bash
laradock up
```
- Stops the containers running for the current project.
```bash
laradock halt
```

- Destroys/Removes Laradock from the current project.
```bash
laradock destroy
```

- Helps you ssh into the workspace container to run migrations or seeds:
```bash
laradock ssh
```


I'm still toying around with Shelljs I might improve few stuff in the future. Any help will be great.
