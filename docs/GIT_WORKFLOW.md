# Git Workflow documentation for DK Wallet research application development.


## Pull requests and pushing changes:
### How to contribute to the repository
* Open IDE and clone the repository: https://github.com/DanielIversenCompSci/dkwallet-backend
* Alternatively open a empty folder in you IDE and 'git init' followed by 'git remote add origin https://github.com/your-username/your-repo.git' in your terminal.


### Making changes:
Before starting a new feature or performing any general change to code, make sure to operate by the following steps. Make sure to always create a new branch for each new feature.
<br>

1. Perform 'git branch' and confirm your on the master branch.
2. Perform 'git pull origin master' to ensure your on the latest version before creating a feature branch.
3. Perform 'git checkout -b nameOfFeatureBranch' (MAKE SURE TO FOLLOW FEATURE BRANCH NAMING CONVENTIONS, SEE CODE_CONVENTIONS.md).
4. Make changes...
5. When done making changes locally stage, commit and push the changes to GitHub by performing 'git add .', 'git commit -m "Commit Message"' and 'git push --set-upstream origin nameOfFeatureBranch' (MAKE SURE TO USE THE NAME OF YOUR CREATED FEATURE BRANCH FOR UPSTREAM).
6. You changes have now been pushed to GitHub, next step is to create a pull request, navigate to https://github.com/DanielIversenCompSci/workout-backend and use the new changes pop-up to create a PR.


### Creating a pull request
When the changes has been pushed to remote, create a PR for another dev to review, before finally merging it into master.
<br>

1. On the GitHub repo index page, click the pop-up about new changes pushed, click the button saying 'compare and pull request'
![Create PR](images/create-pr.png)