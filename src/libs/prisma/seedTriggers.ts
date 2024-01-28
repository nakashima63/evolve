import postgres from "postgres";
import "dotenv/config";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("Couldn't find db url");
}

const sql = postgres(dbUrl);

async function main() {
  await sql`
    create or replace function public.handle_new_user()
    returns trigger as $$
    begin
      insert into public.profile (id)
      values (new.id);
      return new;
    end;
    $$ language plpgsql security definer;
    `;
  await sql`
    create or replace trigger on_auth_user_created
      after insert on auth.users
      for each row execute procedure public.handle_new_user();
    `;
  console.log("Finished adding triggers and functions for profile handling.");
  process.exit();
}

main();
