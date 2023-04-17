## This is a project of making portfolio using React

#### Deployment

To deploy this project on AWS follow the rules-

-   First commit the files to GitHub project directory:
    To commit execute the following commands:

```bash
  git add .
  git commit -m "[your message]"
  git push
```

-   Make the build folder, using the following command to the project directory:

```bash
  npm run build
```

-   To sync to the changes you made, execute the following command:

```bash
  aws s3 sync dist/ s3://portfolio-of-nirvik
```
