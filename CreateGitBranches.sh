!/bin/bash

for branch in Business Education Government-Services Health Logistics
do
    git checkout -b $branch
    echo "Placeholder file" > "Placeholder.txt"
    git add .
    git commit -m "init commit for branch"
    git push --set-upstream origin $branch
    git checkout master
done
