echo "Enter environment name:"
read env_name

dotenv -e .env.${env_name} -- npx prisma migrate deploy
