echo "Enter environment name:"
read env_name
echo "Enter migration name (optional):"
read migration_name

# Check if the environment file exists
if [ ! -f ".env.${env_name}" ]; then
  echo "Error: .env.${env_name} does not exist."
  exit 1
fi

# Run the migration
if [ -z "$migration_name" ]
then
  dotenv -e .env.${env_name} -- npx prisma migrate dev
else
  dotenv -e .env.${env_name} -- npx prisma migrate dev --name $migration_name
fi

# Check if the migration was successful
if [ $? -eq 0 ]; then
  dotenv -e .env.${env_name} -- npx tsx src/libs/prisma/seedTriggers.ts
else
  echo "Error: Migration failed."
  exit 1
fi
