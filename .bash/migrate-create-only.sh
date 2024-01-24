echo "Enter migration name:"
read migration_name
dotenv -e .env.local -- npx prisma migrate dev --create-only --name $migration_name
