# Initialize git if you haven't already
git init

# Add the files to your staging area
git add .

# Create a commit
git commit -m "Deploy ADUA Landing Page update"

# Link to your remote GitHub repository
git remote add origin https://github.com/AmanUXUI/ADUA-Landing-Page-Design.git

# Set your branch and push
git branch -M main
git push -u origin main --force