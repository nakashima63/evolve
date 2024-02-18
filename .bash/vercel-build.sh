npx prisma generate
if [ $? -eq 0 ]; then
  echo "prisma generate succeeded"
else
  echo "prisma generate failed"
  exit 1
fi

npx prisma migrate deploy
if [ $? -eq 0 ]; then
  echo "prisma migrate deploy succeeded"
else
  echo "prisma migrate deploy failed"
  exit 1
fi

next build
if [ $? -eq 0 ]; then
  echo "next build succeeded"
else
  echo "next build failed"
  exit 1
fi

npx tsx src/libs/prisma/seedTriggers.ts
if [ $? -eq 0 ]; then
  echo "npx tsx src/libs/prisma/seedTriggers.ts succeeded"
else
  echo "トリガーの設定に失敗しました"
  exit 1
fi
