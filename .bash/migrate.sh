echo "Enter environment name:"
read env_name
echo "Enter migration name (optional):"
read migration_name

if [ -z "$migration_name" ]
then
  dotenv -e .env.${env_name} -- npx prisma migrate dev
else
  dotenv -e .env.${env_name} -- npx prisma migrate dev --name $migration_name
fi
