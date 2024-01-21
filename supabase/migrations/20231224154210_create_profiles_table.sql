
create table profiles (
  id uuid references auth.users not null primary key,
  user_name VARCHAR(30) not null,
  created_at timestamp with time zone default now(),
  created_by uuid references auth.users,
  updated_at timestamp with time zone default now(),
  updated_by uuid references auth.users,
  deleted_at timestamp with time zone
);

alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger as $$
declare
  user_name text;
begin
  user_name := split_part(new.email, '@', 1);
  insert into public.profiles (id, user_name)
  values (new.id, user_name);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
