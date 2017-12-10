# NtcCollab


Run instructions:

go to /NtcCollabWebAPI folder

run following commands:

dotnet restore

dotnet build

dotnet run (make sure you have sql server installed and running)

test http://localhost:57517/api/values (or whatever port is assigned)


go to /ClientApp

run following commands:

npm install (wait it can be long)

npm build (which will run ng build)

npm start (which will run ng serve --proxy-config proxy.config.json) 

(make sure that port 4200 is not already in use)
(make sure that port in proxy.config.json is configured to one on which api is running)

